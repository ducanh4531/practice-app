import "./App.css";
// import LoginStatus from "./state-management/LoginStatus";
// import TaskList from "./state-management/TaskList";
import { AuthProvider } from "./state-management/auth";
// import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import Counter from "./state-management/counter/Counter";
import { TasksProvider } from "./state-management/tasks";

// import TodoForm from "./react-query/TodoForm";
// import TodoList from "./react-query/TodoList";
// import PostList from "./react-query/PostList";

function App() {
	return (
		// CAN SHARE VALUE TO OTHER COMPONENT USING USECONTEXT() HOOK THEN
		// ----
		// should only use React context for managing client (UI) state, (define local state + React context)
		// use useState, useReducer for managing local state
		// if have complex state management, logic and logic is spread all over the components
		// => can centralize this state management logic using useReducer
		// ----
		// let react-query to manage server state
		<AuthProvider>
			<TasksProvider>
				<h1>React Starter Project</h1>
				{/* REACT-QUERY */}
				{/* <TodoForm /> */}
				{/* <TodoList /> */}
				{/* <PostList /> */}

				{/* STATE-MANAGEMENT */}
				<Counter />
				{/* <LoginStatus /> */}
				<NavBar />
				{/* <HomePage /> */}
			</TasksProvider>
		</AuthProvider>
	);
}

export default App;
