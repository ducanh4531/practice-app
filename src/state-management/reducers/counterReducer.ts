interface Action {
	type: "INCREMENT" | "RESET";
	// use union literal values to type safety
	// other values, ts will yell
}

const counterReducer = (state: number, action: Action): number => {
	switch (action.type) {
		case "INCREMENT":
			return state + 1;
		case "RESET":
			return 0;
		default:
			return state;
	}
};

export default counterReducer;
