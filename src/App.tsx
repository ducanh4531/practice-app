import "./App.css";
// import LoginStatus from "./state-management/LoginStatus";
// import TaskList from "./state-management/TaskList";
import AuthProvider from "./state-management/AuthProvider";
import HomePage from "./state-management/HomePage";
import NavBar from "./state-management/NavBar";
import { TasksProvider } from "./state-management/tasks";
// import Counter from "./state-management/Counter";

// import TodoForm from "./react-query/TodoForm";
// import TodoList from "./react-query/TodoList";
// import PostList from "./react-query/PostList";

function App() {
	return (
		// CAN SHARE VALUE TO OTHER COMPONENT USING USECONTEXT() HOOK THEN
		<AuthProvider>
			<TasksProvider>
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
			</TasksProvider>
		</AuthProvider>
	);
}

export default App;
