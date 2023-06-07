import useAuth from "./useAuth";

const LoginStatus = () => {
	// use custom hook => don't have to think about particular context
	// simply use custom hook to get the shared objects
	const { user, dispatch } = useAuth();

	if (user)
		return (
			<>
				<div>
					<span className="mx-2">{user}</span>
					<a onClick={() => dispatch({ type: "LOGOUT" })} href="#">
						Logout
					</a>
				</div>
			</>
		);
	return (
		<div>
			<a
				onClick={() =>
					dispatch({ type: "LOGIN", username: "mosh.hamedani" })
				}
				href="#"
			>
				Login
			</a>
		</div>
	);
};

export default LoginStatus;
