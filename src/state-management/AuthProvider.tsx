import { ReactNode, useReducer } from "react";
import authReducer from "./reducers/authReducer";
import AuthContext from "./contexts/authContext";

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
