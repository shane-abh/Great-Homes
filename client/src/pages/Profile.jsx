import { useNavigate } from "react-router-dom";
import user_avatar from "../assets/user_avatar.svg";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
	updateUserStart,
	updateUserSuccess,
	updateUserFailure,
	deleteUserFailure,
	deleteUserSuccess,
	deleteUserStart,
	signOutUserStart,
} from "../redux/user/userSlice.js";

import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { handleApiRequest } from "../util/handleApiRequest.js";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import { list } from "firebase/storage";
=======
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a

export default function Profile() {
	const [formData, setFormData] = useState({});
	const [updateSuccess, setUpdateSuccess] = useState(false);
	const { currentUser, loading, error } = useSelector((state) => state.user);
<<<<<<< HEAD
	const [showListingsError, setShowListingsError] = useState(false);
	const [userListings, setUserListings] = useState([]);
=======

>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await handleApiRequest(
			dispatch,
			navigate,
			`api/user/update/${currentUser._id}`,
			"POST",
			updateUserStart,
			updateUserSuccess,
			updateUserFailure,
			null,
			{ "Content-Type": "application/json" },
			formData,
			"Wrong Credentials. Please try Again"
		);
		setUpdateSuccess(true);
	};

	if (error) {
		toast.error(error);
	}

	useEffect(() => {
		if (updateSuccess) {
			toast.success("User updated successfully");
			setUpdateSuccess(false); // Reset the state if needed
		}
	}, [updateSuccess]);

	const handleDeleteUser = async () => {
		await handleApiRequest(
			dispatch,
			navigate,
			`/api/user/delete/${currentUser._id}`,
			"DELETE",
			deleteUserStart,
			deleteUserSuccess,
			deleteUserFailure,
			"/signin"
		);
	};

	const handleSignOut = async () => {
		await handleApiRequest(
			dispatch,
			navigate,
			"/api/auth/signout",
			"GET", // Assuming signout uses POST, change if necessary
			signOutUserStart,
			deleteUserSuccess,
			deleteUserFailure,
			"/signin"
		);
	};

<<<<<<< HEAD
	const handleShowListings = async () => {
		try {
			setShowListingsError(false);
			const res = await fetch(`/api/user/listings/${currentUser._id}`);
			const data = await res.json();
			if (data.success === false) {
				setShowListingsError(true);
				return;
			}
			setUserListings(data);
		} catch (error) {
			setShowListingsError(true);
		}
	};

	const handleListingDelete = async (listingId) => {
		try {
			const res = await fetch(`/api/listing/delete/${listingId}`, {
				method: "DELETE",
			});
			const data = await res.json();
			if (data.success === false) {
				console.log(data.message);
				return;
			}

			setUserListings((prev) =>
				prev.filter((listing) => listing._id !== listingId)
			);
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<div className=" w-[90vw] sm:w-[70vw] md:w-[50vw] mx-auto my-[2vh]">
			<div className="bg-primary w-full  rounded-lg flex-col justify-center p-8 sm:p-10 md:p-15 ">
=======
	return (
		<div className="bg-[url('./assets/profile-bg.jpg')] bg-no-repeat bg-cover bg-center w-[90vw] sm:w-[70vw] md:w-[50vw] mx-auto my-[2vh] relative">
			<div className="absolute inset-0 bg-black opacity-50 rounded-sm"></div>
			<div className="relative bg-auto bg-no-repeat bg-center w-full rounded-lg flex-col justify-center p-8 sm:p-10 md:p-15 z-10">
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
				<h1 className="text-white text-center text-2xl md:text-3xl font-semibold my-4 mb8">
					Profile
				</h1>
				<form onSubmit={handleSubmit}>
					<div className="flex justify-center">
						<img
							src={user_avatar}
							alt="Profile Image"
<<<<<<< HEAD
							className="w-30  my-5 w-1/2 md:w-1/5  xl:w-[5vw]"
=======
							className="w-30 my-5 w-1/2 md:w-1/5 xl:w-[5vw]"
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
						/>
					</div>

					{/* Inputs  */}

<<<<<<< HEAD
					<div className="flex-col  justify-center  items-center   lg:mt-10">
						<input
							className="bg-white my-4 md:my-2 p-2 w-full rounded-lg"
=======
					<div className="flex-col justify-center items-center lg:mt-10">
						<input
							className="bg-white my-2 md:my-2 p-2 w-full rounded-sm"
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
							placeholder="Username"
							type="text"
							name="username"
							id="username"
							defaultValue={currentUser.username}
							onChange={handleChange}
						/>
						<input
<<<<<<< HEAD
							className="bg-white my-4 md:my-2 p-2 w-full rounded-lg"
=======
							className="bg-white my-1 md:my-2 p-2 w-full rounded-sm"
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
							placeholder="Email"
							type="email"
							name="email"
							id="email"
							defaultValue={currentUser.email}
							onChange={handleChange}
						/>
						<input
<<<<<<< HEAD
							className="bg-white  mb-0 md:my-4 p-2 w-full rounded-lg"
=======
							className="bg-white mb-0 md:my-2 p-2 w-full rounded-sm"
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
							placeholder="Password"
							type="password"
							name="password"
							id="password"
							onChange={handleChange}
						/>
					</div>

					{/* Buttons */}

					<div className="mt-5 ">
						<input
							disabled={loading}
<<<<<<< HEAD
							className="focus:outline-none w-full text-primary bg-secondary  font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-6 dark:focus:ring-yellow-900"
=======
							className="focus:outline-none w-full text-primary bg-secondary font-bold rounded-lg 
              text-md p-6 py-2.5 me-2 mb-6 dark:focus:ring-yellow-900 cursor-pointer"
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
							type="submit"
							value={loading ? "Loading..." : "Update Profile"}
						/>
					</div>
				</form>

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

				<div className="w-full flex md:flex-row flex-col  justify-between text-white text-sm font-bold md:px-2 mt-8">
					<button
						onClick={handleDeleteUser}
<<<<<<< HEAD
						className="bg-[#F52314] my-4 md:my-0 p-2 rounded-md"
=======
						className="bg-primary my-4 md:my-0 p-4 rounded-md text-md"
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
					>
						Delete Account
					</button>
					<button
						onClick={handleSignOut}
<<<<<<< HEAD
						className="bg-[#7e2d21] p-2 rounded-md"
=======
						className="bg-primary py-4 px-5 rounded-md text-md"
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
					>
						Sign Out
					</button>
				</div>
			</div>
		</div>
	);
}
