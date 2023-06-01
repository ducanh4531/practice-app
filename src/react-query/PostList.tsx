import React, { useState } from "react";

import usePosts from "../hooks/usePosts";

const PostList = () => {
	const [userId, setUserId] = useState<number>();
	const [page, setPage] = useState(1);

	// in the future, users will select page size by choosing a value in a dropdown list
	// then need to store the page size value in a state instead
	const pageSize = 10;

	const {
		// data: posts,
		data,
		error,
		isLoading,
		fetchNextPage,
		isFetchingNextPage,
	} = usePosts({ page, pageSize, userId });

	if (isLoading) return <p>Loading...</p>;

	if (error) return <p>{error.message}</p>;

	const users = [1, 2, 3];

	return (
		<>
			<select
				onChange={(event) => setUserId(parseInt(event.target.value))}
				// set value so the next render will get the right option
				value={userId}
				className="form-select mb-3"
			>
				<option></option>
				{users.map((user) => (
					<option value={user} key={user}>
						User {user}
					</option>
				))}
			</select>
			<ul className="list-group">
				{/* posts is now in pages which is an instance of infinite data */}
				{data.pages.map((page, index) => (
					<React.Fragment key={index}>
						{page.map((post) => (
							<li key={post.id} className="list-group-item">
								{post.title}
							</li>
						))}
					</React.Fragment>
				))}

				{/* {posts.map((post) => (
					<li key={post.id} className="list-group-item">
						{post.title}
					</li>
				))} */}
			</ul>
			<button
				onClick={() => setPage(page - 1)}
				disabled={page === 1}
				className="btn btn-primary my-3"
			>
				Previous
			</button>
			<button
				onClick={() => setPage(page + 1)}
				className="btn btn-primary my-3 ms-1"
			>
				Next
			</button>
			<button
				onClick={() => fetchNextPage()}
				disabled={isFetchingNextPage}
				className="btn btn-primary my-3 ms-1"
			>
				{isFetchingNextPage ? "Loading..." : "Load more"}
			</button>
		</>
	);
};

export default PostList;
