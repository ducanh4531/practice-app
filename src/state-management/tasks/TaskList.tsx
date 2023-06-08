import useAuthStore from "../auth/store";
import useTasks from "./useTasks";

const TaskList = () => {
	const { tasks, dispatch } = useTasks();

	// use selector to prevent unnecessary renders
	// this component is only dependent on user property
	// and rerender only if this property changes
	const user = useAuthStore((s) => s.user);

	return (
		<>
			<p>user: {user}</p>
			<button
				onClick={() =>
					dispatch({
						type: "ADD",
						task: { id: Date.now(), title: "Task " + Date.now() },
					})
				}
				className="btn btn-primary my-3"
			>
				Add Task
			</button>
			<ul className="list-group">
				{tasks.map((task) => (
					<li
						key={task.id}
						className="list-group-item d-flex justify-content-between align-items-center"
					>
						<span className="flex-grow-1">{task.title}</span>
						<button
							className="btn btn-outline-danger"
							// REACT WILL DISPATCH THIS ACTION TO REDUCER TO GET A NEW STATE
							onClick={() =>
								dispatch({
									type: "DELETE",
									taskId: task.id,
								})
							}
						>
							Delete
						</button>
					</li>
				))}
			</ul>
		</>
	);
};

export default TaskList;
