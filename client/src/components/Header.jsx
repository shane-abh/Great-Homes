<<<<<<< HEAD
import Logo from "./Logo.jsx";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
=======
import Logo from "./Logo";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useScroll from "../util/useScroll";
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
import {
	signOutUserStart,
	deleteUserSuccess,
	deleteUserFailure,
} from "../redux/user/userSlice.js";
import { handleApiRequest } from "../util/handleApiRequest.js";
<<<<<<< HEAD
import useScroll from "../util/useScroll";
import { useState } from "react";
=======
import { DarkmodeButton } from "./DarkmodeButton";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const { currentUser } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const scrolled = useScroll();

	const toggleNavBar = () => {
		setIsOpen(!isOpen);
	};

	const handleSignOut = async () => {
		await handleApiRequest(
			dispatch,
			navigate,
			"/api/auth/signout",
			"GET",
			signOutUserStart,
			deleteUserSuccess,
			deleteUserFailure,
			"/signin"
		);
	};

<<<<<<< HEAD
	return (
		<header
			className={`sticky top-0 z-[20] transition-colors duration-300 ${
				scrolled ? "bg-black" : "bg-primary"
			} shadow-sm bg-clip-padding blur-background-filter`}
		>
			<nav className=" border-gray-200 ">
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
=======
	const getLinkClass = (path) =>
		location.pathname === path
			? "text-secondary" // This applies the secondary color
			: "text-gray-900 dark:text-white";

	return (
		<header
			className={`sticky top-0 z-[20] transition-colors duration-300 ${
				scrolled ? "bg-primary" : "bg-white"
			} dark:bg-black shadow-md bg-clip-padding blur-background-filter`}
		>
			<nav className="border-gray-200 dark:border-b-2">
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
					<Logo />
					<button className="md:hidden" onClick={toggleNavBar}>
						{isOpen ? <IoClose /> : <GiHamburgerMenu />}
					</button>
					<div
						className={`items-center justify-between w-full md:flex md:w-auto ${
							isOpen ? "block" : "hidden"
						}`}
					>
<<<<<<< HEAD
						<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  bg-gray-secondary md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-transparent">
							<li>
								<a
									href="/"
									className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-buttonSecondaryColor md:p-0 "
									aria-current="page"
=======
						<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium bg-gray-secondary md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-transparent">
							<li>
								<a
									href="/"
									className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:hover:bg-gray-700 ${
										scrolled ? "text-white" : "text-black"
									} ${getLinkClass("/")}`}
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
								>
									Home
								</a>
							</li>
							<li>
								<a
<<<<<<< HEAD
									href="#"
									className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0 md:dark:hover:text-secondary dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
=======
									href="/About"
									className={`block py-2 px-3 rounded md:hover:bg-transparent md:p-0 dark:hover:bg-gray-700 ${
										scrolled ? "text-white" : "text-black"
									} ${getLinkClass("/About")}`}
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
								>
									About
								</a>
							</li>
<<<<<<< HEAD
=======
							<li>
								<a
									href="/contact"
									className={`block py-2 px-3 rounded md:hover:bg-transparent md:p-0 dark:hover:bg-gray-700 ${
										scrolled ? "text-white" : "text-black"
									} ${getLinkClass("/contact")}`}
								>
									Contact Us
								</a>
							</li>
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
							{!currentUser &&
								location.pathname !== "/signin" && (
									<li>
										<Link
											to="/signin"
<<<<<<< HEAD
											className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0 dark:text-white md:dark:hover:text-secondary dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
=======
											className={`block py-2 px-3 rounded md:hover:bg-transparent md:p-0 dark:hover:bg-gray-700 ${
												scrolled
													? "text-white"
													: "text-black"
											} ${getLinkClass("/signin")}`}
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
										>
											Login
										</Link>
									</li>
								)}
							{currentUser && (
								<>
									<li>
										<Link
											to={"/Profile"}
<<<<<<< HEAD
											className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0 dark:text-white md:dark:hover:text-secondary dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
=======
											className={`block py-2 px-3 rounded md:hover:bg-transparent md:p-0 dark:hover:bg-gray-700 ${
												scrolled
													? "text-white"
													: "text-black"
											} ${getLinkClass("/Profile")}`}
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
										>
											Profile
										</Link>
									</li>
									<li>
										<Link
											to={"/myLisitngs"}
<<<<<<< HEAD
											className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0 dark:text-white md:dark:hover:text-secondary dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
=======
											className={`block py-2 px-3 rounded md:hover:bg-transparent md:p-0 dark:hover:bg-gray-700 ${
												scrolled
													? "text-white"
													: "text-black"
											} ${getLinkClass("/myLisitngs")}`}
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
										>
											My Listings
										</Link>
									</li>
									<li>
<<<<<<< HEAD
										<button
											onClick={handleSignOut}
											className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0 dark:text-white md:dark:hover:text-secondary dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
=======
										<Link
											to={"/wishlist"}
											className={`block py-2 px-3 rounded md:hover:bg-transparent md:p-0 dark:hover:bg-gray-700 ${
												scrolled
													? "text-white"
													: "text-black"
											} ${getLinkClass("/wishlist")}`}
										>
											My Wishlist
										</Link>
									</li>

									<li>
										<button
											onClick={handleSignOut}
											className={`block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:hover:text-secondary md:p-0 dark:text-white md:dark:hover:text-secondary dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
												scrolled
													? "text-white"
													: "text-black"
											}`}
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
										>
											Sign Out
										</button>
									</li>
<<<<<<< HEAD
=======
									<li className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:hover:text-secondary md:p-0 dark:text-white md:dark:hover:text-secondary dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
										<DarkmodeButton />
									</li>
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
								</>
							)}
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
}
