import { useReducer } from "react";
import "./App.css";
// import LoginStatus from "./state-management/LoginStatus";
// import TaskList from "./state-management/TaskList";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import AuthContext from "./state-management/contexts/authContext";
import TasksContext from "./state-management/contexts/tasksContext";
import authReducer from "./state-management/reducers/authReducer";
import tasksReducer from "./state-management/reducers/tasksReducer";
// import Counter from "./state-management/Counter";

// import TodoForm from "./react-query/TodoForm";
// import TodoList from "./react-query/TodoList";
// import PostList from "./react-query/PostList";

function App() {
	const [tasks, tasksDispatch] = useReducer(tasksReducer, []);
	const [user, authDispatch] = useReducer(authReducer, "");

	return (
		// CAN SHARE VALUE TO OTHER COMPONENT USING USECONTEXT() HOOK THEN
		<AuthContext.Provider value={{ user, dispatch: authDispatch }}>
			<TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
				<h1>React Starter Project</h1>
				{/* REACT-QUERY */}
				{/* <TodoForm /> */}
				{/* <TodoList /> */}
				{/* <PostList /> */}

				{/* STATE-MANAGEMENT */}
				{/* <Counter /> */}
				{/* <LoginStatus /> */}
				<NavBar />
				<HomePage />
			</TasksContext.Provider>
		</AuthContext.Provider>
	);
}

export default App;
