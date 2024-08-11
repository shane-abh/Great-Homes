import { useState } from "react";
import HeroImage from "../assets/hero.jpg";
import { toast, ToastContainer } from "react-toastify";

export default function Contact() {
	const [formData, setFormData] = useState({
		Name: "",
		Email: "",
		Phone: "",
		Message: "",
	});
	const [msg, setMsg] = useState("");

	const scriptURL = import.meta.env.GOOGLE_SHEETS_SCRIPTS_URL;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = new FormData();
		form.append("Name", formData.Name);
		form.append("Email", formData.Email);
		form.append("Phone", formData.Phone);
		form.append("Message", formData.Message);

		fetch(scriptURL, { method: "POST", body: form })
			// eslint-disable-next-line no-unused-vars
			.then((response) => {
				setMsg(
					"Message Sent Successfully. We will get back to you shortly."
				);
				toast.success(
					"Message Sent Successfully. We will get back to you shortly."
				);
				setTimeout(() => setMsg(""), 5000);
				setFormData({ Name: "", Email: "", Phone: "", Message: "" });
			})
			.catch((error) => {
				console.error("Error:", error);
				toast.error(
					"Unable to send message. Please try again shortly."
				);
			});
	};

	return (
		<div className="contact-page">
			<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
			<div className="hero-section relative">
				<img
					src={HeroImage}
					alt="Contact Us"
					className="w-full h-64 object-cover"
				/>
				<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
					<h1 className="text-white text-4xl font-bold">
						Contact Us
					</h1>
				</div>
			</div>
			<div className="container mx-auto p-4">
				<div className="text-center mb-8">
					<h2 className="text-2xl font-bold mb-2 pt-4 dark:text-white">
						Do you have any query? We are here to help you.
					</h2>
					<p className="text-gray-700 dark:text-white">
						Fill out the form below and we will get back to you as
						soon as possible.
					</p>
				</div>
				<div className="flex justify-center">
					<form
						name="submit-to-google-sheet"
						onSubmit={handleSubmit}
						className="w-full max-w-lg bg-white p-8 shadow-md rounded"
					>
						<div className="mb-4">
							<label
								htmlFor="Name"
								className="block text-gray-700 font-bold mb-2"
							>
								Name
							</label>
							<input
								type="text"
								name="Name"
								placeholder="Your Name"
								value={formData.Name}
								onChange={handleChange}
								required
								className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="Email"
								className="block text-gray-700 font-bold mb-2"
							>
								Email
							</label>
							<input
								type="email"
								name="Email"
								placeholder="Your Email"
								value={formData.Email}
								onChange={handleChange}
								required
								className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="Phone"
								className="block text-gray-700 font-bold mb-2"
							>
								Phone
							</label>
							<input
								type="tel"
								name="Phone"
								placeholder="Your Phone Number"
								value={formData.Phone}
								onChange={handleChange}
								required
								className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="Message"
								className="block text-gray-700 font-bold mb-2"
							>
								Message
							</label>
							<textarea
								name="Message"
								rows="6"
								placeholder="Your Message"
								value={formData.Message}
								onChange={handleChange}
								className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
							></textarea>
						</div>
						<button
							type="submit"
							className="w-full bg-primary text-white text-lg font-bold py-4 px-4 rounded focus:outline-none"
						>
							Submit
						</button>
					</form>
				</div>
				{msg && (
					<p id="msg" className="text-center text-green-500 mt-4">
						{msg}
					</p>
				)}
			</div>
		</div>
	);
}
