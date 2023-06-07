// USE ZUSTAND CAN CENTRALIZE STATE MANAGEMENT LOGIC, STATE OF APP AND SHARE STATE TO OTHER COMPONENTS
// WITHOUT USING USECONTEXT FOR SHARING AND USEREDUCER FOR CENTRALIZING LOGIC, REDUX AS WELL
import { create } from "zustand";

// specify shape of the Store
interface CounterStore {
	counter: number;
	increment: () => void;
	reset: () => void;
}

// return a custom hook and use anywhere in application
const useCounterStore = create<CounterStore>((set) => ({
	counter: 0,
	increment: () => set((store) => ({ counter: store.counter + 1 })),
	reset: () => set(() => ({ counter: 0 })),
}));

export default useCounterStore;
