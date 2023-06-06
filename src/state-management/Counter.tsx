import { useReducer } from "react";
import counterReducer from "./reducers/counterReducer";

const Counter = () => {
	// use reducer, so state management logic is encapsulated inside reducer func
	// => component is purely responsible for the markup, and doesn't have state management logic
	// and can reuse the reducer in other components

	// dispatch will trigger changes (dispatch means send an action)
	const [value, dispatch] = useReducer(counterReducer, 0);

	return (
		<div>
			Counter ({value})
			<button
				onClick={() => dispatch({ type: "INCREMENT" })}
				className="btn btn-primary mx-1"
			>
				Increment
			</button>
			<button
				onClick={() => dispatch({ type: "RESET" })}
				className="btn btn-primary mx-1"
			>
				Reset
			</button>
		</div>
	);
};

export default Counter;
