import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export interface Todo {
	id: number;
	title: string;
	userId: number;
	completed: boolean;
}

const useTodos = () => {
	const fetchTodos = () =>
		axios
			.get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
			.then((res) => res.data);

	return useQuery<Todo[], Error>({
		// queryKey is used to access data stored in cache
		// queryKey value is an array which has one or more value inside
		// 1st one identifies the type of data
		// other values like 'completed' - for storing completed todo (string type)
		// or {completed: true}(obj type)
		queryKey: ["todos"], // => structure the cache

		// this func will be used to fetch data in backend
		queryFn: fetchTodos,

		// customize default settings per query here
		staleTime: 10 * 1000,
	});
};

export default useTodos;
