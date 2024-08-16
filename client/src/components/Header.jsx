import Logo from "./Logo";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useScroll from "../util/useScroll";
import {
  signOutUserStart,
  deleteUserSuccess,
  deleteUserFailure,
} from "../redux/user/userSlice.js";
import { handleApiRequest } from "../util/handleApiRequest.js";
import { DarkmodeButton } from "./DarkmodeButton";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

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

  const getLinkClass = (path) =>
    location.pathname === path
      ? "text-secondary" // This applies the secondary color
      : "text-gray-900 dark:text-white";

  return (
    <header
      className={`sticky top-0 z-[20] transition-colors duration-300 ${
        scrolled ? "bg-primary" : "bg-white"
      } dark:bg-dark-mode shadow-md bg-clip-padding blur-background-filter`}
    >
      <nav className="border-gray-200/20 dark:border-b-2">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <Logo />
          <button className="md:hidden" onClick={toggleNavBar}>
            {isOpen ? <IoClose /> : <GiHamburgerMenu />}
          </button>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium bg-gray-secondary md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-transparent">
              <li>
                <a
                  href="/"
                  className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:hover:bg-gray-700 ${
                    scrolled ? "text-white" : "text-black"
                  } ${getLinkClass("/")}`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/About"
                  className={`block py-2 px-3 rounded md:hover:bg-transparent md:p-0 dark:hover:bg-gray-700 ${
                    scrolled ? "text-white" : "text-black"
                  } ${getLinkClass("/About")}`}
                >
                  About
                </a>
              </li>
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
              {!currentUser && location.pathname !== "/signin" && (
                <li>
                  <Link
                    to="/signin"
                    className={`block py-2 px-3 rounded md:hover:bg-transparent md:p-0 dark:hover:bg-gray-700 ${
                      scrolled ? "text-white" : "text-black"
                    } ${getLinkClass("/signin")}`}
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
                      className={`block py-2 px-3 rounded md:hover:bg-transparent md:p-0 dark:hover:bg-gray-700 ${
                        scrolled ? "text-white" : "text-black"
                      } ${getLinkClass("/Profile")}`}
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/myLisitngs"}
                      className={`block py-2 px-3 rounded md:hover:bg-transparent md:p-0 dark:hover:bg-gray-700 ${
                        scrolled ? "text-white" : "text-black"
                      } ${getLinkClass("/myLisitngs")}`}
                    >
                      My Listings
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/wishlist"}
                      className={`block py-2 px-3 rounded md:hover:bg-transparent md:p-0 dark:hover:bg-gray-700 ${
                        scrolled ? "text-white" : "text-black"
                      } ${getLinkClass("/wishlist")}`}
                    >
                      My Wishlist
                    </Link>
                  </li>

                  <li>
                    <button
                      onClick={handleSignOut}
                      className={`block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:hover:text-secondary md:p-0 dark:text-white md:dark:hover:text-secondary dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                        scrolled ? "text-white" : "text-black"
                      }`}
                    >
                      Sign Out
                    </button>
                  </li>
                  <li className="block py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:hover:text-secondary md:p-0 dark:text-white md:dark:hover:text-secondary dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                    <DarkmodeButton />
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
