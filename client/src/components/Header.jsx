import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useState } from "react";
import useScroll from "../util/useScroll";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const scrolled = useScroll();

	const toggleNavBar = () => {
		setIsOpen(!isOpen);
	};

	const { currentUser } = useSelector((state) => state.user);
	return (
		<header
			className={`sticky top-0 z-[20] transition-colors duration-300 ${
				scrolled ? "bg-primary" : "bg-transparent"
			} shadow-sm bg-clip-padding blur-background-filter`}
		>
			<nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-6 px-1">
				<Logo />
				<button className="md:hidden" onClick={toggleNavBar}>
					{isOpen ? "Close" : "Menu"}
				</button>
				<div
					className={`items-center justify-between w-full md:flex md:w-auto ${
						isOpen ? "block" : "hidden"
					}`}
				>
					<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-transparent">
						<li>
							<a
								href="/"
								className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-buttonSecondaryColor md:p-0 "
								aria-current="page"
							>
								Home
							</a>
						</li>
						<li>
							<a
								href="#"
								className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-buttonSecondaryColor dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700"
							>
								About
							</a>
						</li>
						{currentUser && (
							<>
								<li>
									<Link
										to={"/Profile"}
										className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-buttonSecondaryColor dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
									>
										Profile
									</Link>
								</li>
								<li>
									<Link
										to={"/myLisitngs"}
										className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-buttonSecondaryColor dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
									>
										My Listings
									</Link>
								</li>
							</>
						)}
					</ul>
				</div>
			</nav>
		</header>
	);
}
