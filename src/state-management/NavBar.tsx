import { LoginStatus } from "./auth";
import useCounterStore from "./counter/store";
import useTasks from "./tasks/useTasks";

const NavBar = () => {
	const { tasks } = useTasks();
	const counter = useCounterStore((state) => state.counter);

	return (
		<nav className="navbar d-flex justify-content-between">
			<span className="badge text-bg-secondary">
				{tasks.length} {counter}
			</span>
			<LoginStatus />
		</nav>
	);
};

export default NavBar;
