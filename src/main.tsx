import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from "react-dom/client";

// import App from "./App";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routing/routes";

const queryClient = new QueryClient({
	// customize default settings globally here
	defaultOptions: {
		queries: {
			// overwrite here

			retry: 3,
			// default retries 3 times if query fails

			cacheTime: 300_000,
			// default after 5mins if query has no observers/components => query is inactive and removed from cache

			staleTime: 10 * 1000, // fresh for 10 mins, after that it becomes stale
			// default after 0, means as getting data => it is treated as old => refetch data from backend
			// maybe this one will need to customize in projects, meanwhile, other settings no need to customize

			refetchOnMount: false,
			refetchOnWindowFocus: false,
			refetchOnReconnect: false,
			// note: react query also automatically refetch data under 3 situations:
			// network reconnected, component mounted for 1st time, window refocused
			// change default values from true to false

			// big note: if data is still stale => react query will attempt to fetch new data from backend
			// while rerender components with stale data from cache => show data to users immediately
			// and when react query got the latest data => updates cache => rerender components again
		},
	},
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			{/* ROUTING */}
			<RouterProvider router={router}></RouterProvider>
			{/* <App /> */}
			<ReactQueryDevtools />
		</QueryClientProvider>
	</React.StrictMode>
);
