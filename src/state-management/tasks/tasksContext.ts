import React, { Dispatch } from "react";
import { Task, TaskAction } from "./TasksProvider";

// CREATE CONTEXT TYPE TO SHARE DATA THROUGH CHILDREN COMPONENTS
interface TasksContextType {
	tasks: Task[];
	dispatch: Dispatch<TaskAction>;
}

const TasksContext = React.createContext<TasksContextType>(
	{} as TasksContextType
);

export default TasksContext;
