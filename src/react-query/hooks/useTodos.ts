import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import APIClient from "../services/apiClient";

export interface Todo {
	id: number;
	title: string;
	userId: number;
	completed: boolean;
}

export const apiClient = new APIClient<Todo>("/todos");

const useTodos = () => {
	const fetchTodos = () => apiClient.getAll();

	return useQuery<Todo[], Error>({
		// queryKey is used to access data stored in cache
		// queryKey value is an array which has one or more value inside
		// 1st one identifies the type of data
		// other values like 'completed' - for storing completed todo (string type)
		// or {completed: true}(obj type)
		queryKey: CACHE_KEY_TODOS, // => structure the cache

		// this func will be used to fetch data in backend
		queryFn: fetchTodos,
		// queryFn: apiClient.getAll, there will happen an error here if reference func getAll
		// this.endpoint is undefined since this keyword loses its context
		// like a standalone func, and not a func is part of an object
		// SOLVE PROBLEM (2 opts)
		// 1/ use bind: apiClient.getAll.bind(apiClient) => so connecting this func to the containing obj
		// then this keyword will reference apiClient instance

		// 2/ use arrow func:
		// arrow funcs don't have their own 'this' context
		// => 'this' will refer to the apiClient instance
		// convert all method to arrow func in apiClient.ts

		// customize default settings per query here
		staleTime: 10 * 1000,
	});
};

export default useTodos;
