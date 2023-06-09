import { createBrowserRouter } from "react-router-dom";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import Layout from "./Layout";
import UserDetailPage from "./UserDetailPage";
import UserListPage from "./UserListPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ index: true, element: <HomePage /> }, // index: true | path: ''
			{ path: "users", element: <UserListPage /> },
			{ path: "users/:id", element: <UserDetailPage /> },
			{ path: "contact", element: <ContactPage /> },
		],
	},
]);

export default router;
