import { useInfiniteQuery } from "@tanstack/react-query";
// import axios from "axios";
import postService, { Post } from "../services/postService";

interface PostQuery {
	page: number;
	pageSize: number;
	userId: number | undefined;
}

const usePosts = (query: PostQuery) => {
	// implement infinite query with react-query
	return useInfiniteQuery<Post[], Error>({
		//
		// return useQuery<Post[], Error>({

		// react query will re-execute if userId, query updated => similar dependencies in useEffect
		// filter posts by passing userId
		// this pattern is the same as designing URLs for APIs, eg: /users/1/posts
		queryKey: query.userId
			? ["users", query.userId, "posts"]
			: ["posts", query],

		// the value returned in getNextPageParam will be passed as para in queryFn which fetched data from backend
		queryFn: ({ pageParam }) =>
			// refactor http request by extracting to another module
			postService.getAll({
				params: {
					// _start: (query.page - 1) * query.pageSize,
					_start: (pageParam - 1) * query.pageSize,
					_limit: query.pageSize,
					userId: query.userId,
				},
			}),

		// axios
		// 	.get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
		// 		params: {
		// 			// _start: (query.page - 1) * query.pageSize,
		// 			_start: (pageParam - 1) * query.pageSize,
		// 			_limit: query.pageSize,
		// 			userId: query.userId,
		// 		},
		// 	})
		// 	.then((res) => res.data),

		staleTime: 1 * 60 * 1000, // 1min => refetch data

		// keep data on current page while waiting for the new data => so the page is not jumping (loading) up and down each time
		keepPreviousData: true,

		// this function is executed after users scroll down webpage or click Load more button in component
		getNextPageParam: (lastPage, allPages) => {
			// jsonplaceholder will return empty array if data for a page doesn't exist
			return lastPage ? allPages.length + 1 : undefined;
		},
	});
};

export default usePosts;
