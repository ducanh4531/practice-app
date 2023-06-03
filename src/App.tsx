import "./App.css";
import TodoForm from "./react-query/TodoForm";
// import TodoList from "./react-query/TodoList";
import PostList from "./react-query/PostList";

function App() {
	return (
		<>
			<h1>React Starter Project</h1>
			<TodoForm />
			{/* <TodoList /> */}
			<PostList />
		</>
	);
}

export default App;
