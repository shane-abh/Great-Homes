import { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export const DarkmodeButton = () => {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [darkMode]);

	return (
		<button
			onClick={() => setDarkMode(!darkMode)}
			className="md:order-2 bg-gray-200 rounded-full dark:bg-gray-800"
			aria-label="Toggle dark mode"
		>
			{darkMode ? <MdLightMode size={24} /> : <MdDarkMode size={24} />}
		</button>
	);
};
