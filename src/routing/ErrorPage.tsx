import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
	// show the thrown error in log (in real app, show error in some log services)
	const error = useRouteError();
	console.log("🚀 ~ file: ErrorPage.tsx:5 ~ ErrorPage ~ error:", error);

	return (
		<>
			<h1>Oops...</h1>
			{/* check if it is a thrown error or invalid route */}
			<p>
				{isRouteErrorResponse(error)
					? "Invalid page"
					: "Sorry, an unexpected error has occurred."}
			</p>
		</>
	);
};

export default ErrorPage;
