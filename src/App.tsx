import { useReducer } from "react";
import "./App.css";
// import LoginStatus from "./state-management/LoginStatus";
// import TaskList from "./state-management/TaskList";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import TasksContext from "./state-management/contexts/tasksContext";
import tasksReducer from "./state-management/reducers/tasksReducer";
// import Counter from "./state-management/Counter";

// import TodoForm from "./react-query/TodoForm";
// import TodoList from "./react-query/TodoList";
// import PostList from "./react-query/PostList";

function App() {
	const [tasks, dispatch] = useReducer(tasksReducer, []);

	return (
		// CAN SHARE VALUE TO OTHER COMPONENT USING USECONTEXT() HOOK THEN
		<TasksContext.Provider value={{ tasks, dispatch }}>
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
	);
}

export default App;
