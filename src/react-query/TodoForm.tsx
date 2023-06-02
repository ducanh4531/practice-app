import { useRef } from "react";
import useAddTodo from "./hooks/useAddTodo";

const TodoForm = () => {
	const addTodo = useAddTodo(() => {
		// clear input field value
		if (ref.current) ref.current.value = "";
	});

	const ref = useRef<HTMLInputElement>(null);

	return (
		<>
			{addTodo.error && (
				<div className="alert alert-danger">
					{addTodo.error.message}
				</div>
			)}
			<form
				onSubmit={(event) => {
					event.preventDefault();

					// mutate method will call mutationFn and pass todo obj as para
					if (ref.current && ref.current.value)
						addTodo.mutate({
							id: 0,
							title: ref.current?.value,
							userId: 1,
							completed: false,
						});
				}}
				className="row mb-3"
			>
				<div className="col">
					<input ref={ref} type="text" className="form-control" />
				</div>
				<div className="col">
					<button
						disabled={addTodo.isLoading}
						className="btn btn-primary"
					>
						{addTodo.isLoading ? "Adding..." : "Add"}
					</button>
				</div>
			</form>
		</>
	);
};

export default TodoForm;
