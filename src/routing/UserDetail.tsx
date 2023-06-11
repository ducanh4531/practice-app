import { useParams } from "react-router-dom";

type UserParams = {
	id: string;
};

const UserDetail = () => {
	// USE THREE HOOKS, CAN GET INFORMATION ABOUT THE CURRENT ROUTE
	// PATHNAME, QUERY STRING PARAMETERS AND UPDATE QUERY STRING PARAMETERS
	const { id } = useParams<UserParams>();
	// const location = useLocation();
	// const [searchParams, setSearchParams] = useSearchParams();

	return <p>User {id}</p>;
};

export default UserDetail;
