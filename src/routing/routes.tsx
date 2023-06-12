import { createBrowserRouter } from "react-router-dom";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import Layout from "./Layout";
import UserDetail from "./UserDetail";
import UsersPage from "./UsersPage";
import ErrorPage from "./ErrorPage";
import LoginPage from "./LoginPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorPage />, // another benefit: anytime, app throws an error
		// => react router catches it and render ErrorPage component
		children: [
			{ index: true, element: <HomePage /> }, // index: true | path: ''
			{
				path: "users",
				element: <UsersPage />,
				children: [{ path: ":id", element: <UserDetail /> }],
			},
			{ path: "contact", element: <ContactPage /> },
			{ path: "login", element: <LoginPage /> },
		],
	},
]);

export default router;
