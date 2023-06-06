import { ReactNode, useReducer } from "react";
import TasksContext from "./contexts/tasksContext";
import tasksReducer from "./reducers/tasksReducer";

interface TasksProviderProps {
	children: ReactNode;
}

const TasksProvider = ({ children }: TasksProviderProps) => {
	const [tasks, dispatch] = useReducer(tasksReducer, []);

	return (
		<TasksContext.Provider value={{ tasks, dispatch }}>
			{children}
		</TasksContext.Provider>
	);
};

export default TasksProvider;
