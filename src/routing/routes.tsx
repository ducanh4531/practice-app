import { createBrowserRouter } from "react-router-dom";
import ContactPage from "./ContactPage";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import Layout from "./Layout";
import LoginPage from "./LoginPage";
import PrivateRoutes from "./PrivateRoutes";
import UserDetail from "./UserDetail";
import UsersPage from "./UsersPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorPage />, // another benefit: anytime, app throws an error
		// => react router catches it and render ErrorPage component
		children: [
			{ index: true, element: <HomePage /> }, // index: true | path: ''
			{ path: "contact", element: <ContactPage /> },
			{ path: "login", element: <LoginPage /> },
		],
	},
	// this is a layout route, its purpose is group route for enforcing layout or business rules
	{
		element: <PrivateRoutes />,
		// pass any routes that need to be protected
		children: [
			{
				path: "users",
				element: <UsersPage />,
				children: [{ path: ":id", element: <UserDetail /> }],
			},
		],
	},
]);

export default router;
