import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

import { CACHE_KEY_TODOS } from "../constants";
import { Todo } from "./useTodos";

interface AddTodoContext {
	previousTodos: Todo[];
}

const useAddTodo = (onAdd: () => void) => {
	const queryClient = useQueryClient();

	return useMutation<Todo, Error, Todo, AddTodoContext>({
		mutationFn: (todo: Todo) =>
			axios
				.post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
				.then((res) => res.data),

		// this callback will be called before mutation
		// to implement optimistic update => onMutate callback should be called
		// this callback will update query cache => UI gets updated right away
		onMutate: (newTodo) => {
			const previousTodos =
				queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];
			queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos = []) => [
				newTodo,
				...todos,
			]);

			onAdd();

			return { previousTodos };
		},

		// func is called if everything goes well
		onSuccess: (savedTodo, newTodo) => {
			// there are 2 options to update the list:
			// 1: invalidating the cache => tell react-query that data in cache is invalid
			// react-query will refetch data from backend
			// this will invalidate all queries whose key starts with todos
			// queryClient.invalidateQueries({ queryKey: CACHE_KEY_TODOS });

			// 2: updating the data in the cache
			// need to use generic type argument to let react-query know what kind of data
			// we want to update (posts/todos/etc.)
			queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
				todos?.map((todo) => (todo.id === 0 ? savedTodo : todo))
			);
			// [savedTodo, ...(todos || [])]
			// );

			// clear input field value
			// if (ref.current) ref.current.value = "";
		},

		// onError called if smth goes wrong and we can show smth like toast notification
		onError(error, newTodo, context) {
			if (!context) return;

			return queryClient.setQueryData(
				CACHE_KEY_TODOS,
				context.previousTodos
			);
		},
	});
};

export default useAddTodo;
