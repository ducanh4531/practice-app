import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				Incidunt, mollitia!
			</p>
			{/* use Link component, instead of 'a' element */}
			{/* can help to avoid fetching an entire webpage from server */}
			<Link to="/users">Users</Link>
		</>
	);
};

export default HomePage;
