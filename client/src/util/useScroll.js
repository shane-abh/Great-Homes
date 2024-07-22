import { useState, useEffect } from "react";

const useScroll = () => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const screen = window.scrollY;
        if (screen > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return scrolled;
};

export default useScroll;