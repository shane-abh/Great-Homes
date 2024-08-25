import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OAuth from "../../OAuth";
import house_logo from "../assets/house_logo.svg";
import { SIGNUP_URLS } from "../util/constants";

export default function SignUp() {
	const [formData, setFormData] = useState({});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const navigate = useNavigate();

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		setLoading(true);
		const signUpAPIResponse = await fetch("api/auth/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		});

	

		if (signUpAPIResponse.status == 201) {
			const serverResult = await signUpAPIResponse.json();
			if (serverResult.success === false) {
				setError(serverResult.message);

				setLoading(false);
				return;
			}

			setLoading(false);
			setError(null);
			toast.success("Account created successfully");
			navigate("/signin");
		} else {
			toast.error(
				signUpAPIResponse.status + " " + signUpAPIResponse.statusText
			);
		}
	};

	return (
		<div className="bg-white max-w-screen-xl mx-auto  p-5 sm:p-8 md:px-20 lg:p-0">
			<div className="lg:p-5  flex flex-col-reverse lg:flex-row justify-center items-center">
				<div className="bg-white  w-full lg:w-3/5">
					<div>
						<h1 className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6 text-5xl">
							Find Your Dream Here!
						</h1>
					</div>
					<div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 h-full">
							<div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
								<a
									href=""
									className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow cursor-text"
								>
									<img
										src={SIGNUP_URLS.IMAGE_1}
										alt="Cityscape at night"
										className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
									/>
									<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
									{/* <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
				  Book Appointments
				</h3> */}
								</a>
							</div>
							<div className="col-span-2 sm:col-span-1 md:col-span-2 ">
								<a
									href=""
									className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4 cursor-text"
								>
									<img
										src={SIGNUP_URLS.IMAGE_2}
										alt="A man looking at property documents with realtor and family"
										className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
									/>
									<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
									{/* <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
				  Gin
				</h3> */}
								</a>
								<div className="grid gap-4 grid-cols-1">
									<a
										href=""
										className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 cursor-text"
									>
										<img
											src={SIGNUP_URLS.IMAGE_3}
											alt="A couple holding the sold sign"
											className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
										/>
										<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
										{/* <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
					Whiskey
				  </h3> */}
									</a>
								</div>
							</div>
							<div className="col-span-2 sm:col-span-2 md:col-span-2 bg-sky-50 h-auto md:h-full flex flex-col">
								<a
									href=""
									className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow cursor-text"
								>
									<img
										src={SIGNUP_URLS.IMAGE_4}
										alt="A happy family in a house along with the realtor"
										className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
									/>
									<div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
									{/* <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
				  Brandy
				</h3> */}
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className=" bg-white w-full lg:w-2/5 flex flex-row justify-center p-0 rounded-lg">
					<div className="bg-loginBox w-full  rounded-lg flex-col justify-center p-8 sm:p-10 md:p-15 ">
						<div className="flex justify-center">
							<img
								src={house_logo}
								className="w-30 md:w-1/7  xl:w-[3vw]"
							/>
						</div>
						<h1 className="text-white text-center text-2xl md:text-3xl font-semibold my-4">
							Sign Up
						</h1>

						{/* Inputs  */}
						<form onSubmit={handleSubmit}>
							<div className="flex-col  justify-center  items-center   lg:mt-10">
								<input
									className="bg-white my-4 md:my-2 p-2 w-full rounded-lg"
									placeholder="Username"
									type="text"
									name="username"
									id="username"
									onChange={handleChange}
									required
								/>
								<input
									className="bg-white my-4 md:my-2 p-2 w-full rounded-lg"
									placeholder="Email"
									type="email"
									name="email"
									id="email"
									onChange={handleChange}
									required
								/>
								<input
									className="bg-white  mb-0 md:my-4 p-2 w-full rounded-lg"
									placeholder="Password"
									type="password"
									name="password"
									id="password"
									onChange={handleChange}
									required
								/>
							</div>

							{/* Buttons */}

							<div className="mt-5 ">
								<input
									className="focus:outline-none w-full text-buttonSecondaryTextColor bg-buttonSecondaryColor hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
									type="submit"
									value={loading ? "Loading..." : "Sign Up"}
								/>
							</div>
						</form>

						<span className="text-red-700">{error}</span>
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
						{/* {error ?toast.error(error) : toast.success("User Created Successfully ")} */}

						<div className=" flex w-full my-5 items-center ">
							<hr className="w-1/3 h-0.5 mx-auto  bg-gray-100 border-0 rounded " />
							<span className=" mx-auto  text-white  ">or </span>
							<hr className="w-1/3 h-0.5 mx-auto  bg-gray-100 border-0 rounded " />
						</div>

						<div className=" flex justify-center items-center  my-6 ">
							<OAuth></OAuth>
						</div>

						<div>
							<p className="text-white text-center">
								Have an account?{" "}
								<Link to="/signin" className="text-[#4285F4]">
									Sign In
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
