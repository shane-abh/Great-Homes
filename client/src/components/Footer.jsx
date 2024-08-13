<<<<<<< HEAD
const Footer = () => {
	return (
		<footer className="bg-primary  shadow  ">
			<div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
				<div className="sm:flex sm:items-center sm:justify-between">
					<h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
						<span className="text-white">Great</span>
						<span className="text-slate-400">Homes</span>
					</h1>
					<ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
						<li>
							<a
								href="#"
								className="hover:underline me-4 md:me-6"
=======
// import footerLogo from "../assets/site-logo.png";

import Logo from "./Logo";

const Footer = () => {
	return (
		<footer className="bg-primary shadow dark:bg-black dark:border-t-2">
			<div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
				<div className="sm:flex sm:items-center sm:justify-between">
					{/* <img className="w-24" src={footerLogo} alt="Great Homes" /> */}
					<Logo />

					<ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-white-400">
						<li>
							<a
								href="#"
								className="hover:underline me-4 md:me-6 dark:text-white"
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
							>
								About
							</a>
						</li>
						<li>
							<a
								href="#"
<<<<<<< HEAD
								className="hover:underline me-4 md:me-6"
=======
								className="hover:underline me-4 md:me-6 dark:text-white"
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
							>
								Privacy Policy
							</a>
						</li>
						<li>
<<<<<<< HEAD
							<a href="#" className="hover:underline">
								Contact
=======
							<a
								href="#"
								className="hover:underline dark:text-white"
							>
								Contact Us
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
							</a>
						</li>
					</ul>
				</div>
				<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
<<<<<<< HEAD
				<span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
=======
				<span className="block text-sm text-gray-500 sm:text-center dark:text-white">
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
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
