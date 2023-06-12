import { useNavigate } from "react-router-dom";

const ContactPage = () => {
	const navigate = useNavigate();

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				// Redirect the user to the home page programmatically
				// call navigate func only when it is inside event handlers, an effect
				navigate("/");
			}}
		>
			<button className="btn btn-primary">Submit</button>
		</form>
	);
};

export default ContactPage;
