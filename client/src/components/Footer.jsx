// import footerLogo from "../assets/site-logo.png";

import Logo from "./Logo";

const Footer = () => {
	return (
		<footer className="bg-primary shadow dark:bg-dark-mode dark:border-t-2">
			<div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
				<div className="sm:flex sm:items-center sm:justify-between">
					{/* <img className="w-24" src={footerLogo} alt="Great Homes" /> */}
					<Logo />

					<ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-white-400">
						<li>
							<a
								href="#"
								className="hover:underline me-4 md:me-6 dark:text-white"
							>
								About
							</a>
						</li>
						<li>
							<a
								href="#"
								className="hover:underline me-4 md:me-6 dark:text-white"
							>
								Privacy Policy
							</a>
						</li>
						<li>
							<a
								href="#"
								className="hover:underline dark:text-white"
							>
								Contact Us
							</a>
						</li>
					</ul>
				</div>
				<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
				<span className="block text-sm text-gray-500 sm:text-center dark:text-white">
					© 2024{" "}
					<a href="#" className="hover:underline">
						GreatHomes™
					</a>
					. All Rights Reserved.
				</span>
			</div>
		</footer>
	);
};

export default Footer;
