import { useEffect, useState } from "react";

export const DarkmodeButton = () => {
	const [darkMode, setDarkMode] = useState(false); // dark mode state

	// dark mode switch state
	useEffect(() => {
		if (!darkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [darkMode]);
	return (
		<button
			onClick={() => {
				setDarkMode(!darkMode);
			}}
			className="md:order-2 ml-2"
		>
			{!darkMode ? "Light" : "Dark"} Mode
		</button>
	);
};
