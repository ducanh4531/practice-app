import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";

import { Todo } from "../hooks/useTodos";

interface AddTodoContext {
	previousTodos: Todo[];
}

const TodoForm = () => {
	const queryClient = useQueryClient();

	const addTodo = useMutation<Todo, Error, Todo, AddTodoContext>({
		mutationFn: (todo: Todo) =>
			axios
				.post<Todo>("https://jsonplaceholder.typicode.com/todos", todo)
				.then((res) => res.data),

		// this callback will be called before mutation
		// to implement optimistic update => onMutate callback should be called
		// this callback will update query cache => UI gets updated right away
		onMutate: (newTodo) => {
			const previousTodos =
				queryClient.getQueryData<Todo[]>(["todos"]) || [];
			queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
				newTodo,
				...(todos || []),
			]);

			// clear input field value
			if (ref.current) ref.current.value = "";

			return { previousTodos };
		},

		// func is called if everything goes well
		onSuccess: (savedTodo, newTodo) => {
			// there are 2 options to update the list:
			// 1: invalidating the cache => tell react-query that data in cache is invalid
			// react-query will refetch data from backend
			// this will invalidate all queries whose key starts with todos
			// queryClient.invalidateQueries({ queryKey: ["todos"] });

			// 2: updating the data in the cache
			// need to use generic type argument to let react-query know what kind of data
			// we want to update (posts/todos/etc.)
			queryClient.setQueryData<Todo[]>(["todos"], (todos) =>
				todos?.map((todo) => (todo.id === 0 ? savedTodo : todo))
			);
			// [savedTodo, ...(todos || [])]
			// );

			// clear input field value
			// if (ref.current) ref.current.value = "";
		},

		onError(error, newTodo, context) {
			if (!context) return;

			return queryClient.setQueryData(["todos"], context.previousTodos);
		},

		// onError called if smth goes wrong and we can show smth like toast notification
	});

	const ref = useRef<HTMLInputElement>(null);

	return (
		<>
			{addTodo.error && (
				<div className="alert alert-danger">
					{addTodo.error.message}
				</div>
			)}
			<form
				onSubmit={(event) => {
					event.preventDefault();

					// mutate method will call mutationFn and pass todo obj as para
					if (ref.current && ref.current.value)
						addTodo.mutate({
							id: 0,
							title: ref.current?.value,
							userId: 1,
							completed: false,
						});
				}}
				className="row mb-3"
			>
				<div className="col">
					<input ref={ref} type="text" className="form-control" />
				</div>
				<div className="col">
					<button
						disabled={addTodo.isLoading}
						className="btn btn-primary"
					>
						{addTodo.isLoading ? "Adding..." : "Add"}
					</button>
				</div>
			</form>
		</>
	);
};

export default TodoForm;
