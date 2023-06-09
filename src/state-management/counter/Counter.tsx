import useCounterStore from "./store";

const Counter = () => {
	// use reducer, so state management logic is encapsulated inside reducer func
	// => component is purely responsible for the markup, and doesn't have state management logic
	// and can reuse the reducer in other components

	// dispatch will trigger changes (dispatch means send an action)

	// ----
	const { counter, increment, reset } = useCounterStore();

	return (
		<div>
			Counter ({counter})
			<button
				onClick={() => increment()}
				className="btn btn-primary mx-1"
			>
				Increment
			</button>
			<button onClick={() => reset()} className="btn btn-primary mx-1">
				Reset
			</button>
		</div>
	);
};

export default Counter;
