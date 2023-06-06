import { ReactNode, useReducer } from "react";
import TasksContext from "./tasksContext";

// REDUCER FOR MANAGING STATE OF TASKS
export interface Task {
	id: number;
	title: string;
}

interface AddTask {
	type: "ADD";
	task: Task;
}

interface DeleteTask {
	type: "DELETE";
	taskId: number;
}

// union of two interfaces
export type TaskAction = AddTask | DeleteTask;

const tasksReducer = (tasks: Task[], action: TaskAction): Task[] => {
	switch (action.type) {
		case "ADD":
			return [action.task, ...tasks];
		case "DELETE":
			return tasks.filter((t) => t.id !== action.taskId);
	}
};

interface TasksProviderProps {
	children: ReactNode;
}

// PROVIDER COMPONENT
const TasksProvider = ({ children }: TasksProviderProps) => {
	const [tasks, dispatch] = useReducer(tasksReducer, []);

	return (
		<TasksContext.Provider value={{ tasks, dispatch }}>
			{children}
		</TasksContext.Provider>
	);
};

export default TasksProvider;
