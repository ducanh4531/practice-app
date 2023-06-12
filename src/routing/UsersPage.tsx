import { Navigate, Outlet } from "react-router-dom";
import UserList from "./UserList";
import useAuth from "./hooks/useAuth";

const UsersPage = () => {
	const { user } = useAuth();

	// use Navigate component, instead of navigate function,
	// then navigate func has side effect: change url during the render phase
	// Navigate component is a wrapper around navigate func
	if (!user) return <Navigate to={"/login"} />;

	return (
		<div className="row">
			<div className="col">
				<UserList />
			</div>
			<div className="col">
				<Outlet />
			</div>
		</div>
	);
};

export default UsersPage;
