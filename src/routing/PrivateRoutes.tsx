// implement layout route for the check-user logic in a single place => so it will be reusable
// no need to repeat the logic in every components
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const PrivateRoutes = () => {
	const { user } = useAuth();

	// use Navigate component, instead of navigate function,
	// then navigate func has side effect: change url during the render phase
	// Navigate component is a wrapper around navigate func
	if (!user) return <Navigate to={"/login"} />;

	return <Outlet />;
};

export default PrivateRoutes;
