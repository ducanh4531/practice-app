import { ReactNode, useReducer } from "react";
import AuthContext from "./authContext";

interface LoginAction {
	type: "LOGIN";
	username: string;
}
interface LogoutAction {
	type: "LOGOUT";
}

export type AuthAction = LoginAction | LogoutAction;

const authReducer = (user: string, action: AuthAction): string => {
	switch (action.type) {
		case "LOGIN":
			return action.username;
		case "LOGOUT":
			return "";
		default:
			return user;
	}
};

interface AuthProviderProps {
	children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
	const [user, dispatch] = useReducer(authReducer, "");

	return (
		<AuthContext.Provider value={{ user, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
