import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
<<<<<<< HEAD
import CreateListing from "./pages/CreateListing";
import UpdateListing from "./pages/UpdateListing";
import Listing from "./pages/Listing";
import Search from "./pages/Search";
import UserLisitings from "./pages/UserLisitings";
import CreateLisitng2 from "./pages/CreateLisitng2";
import Listing2 from "./pages/Lisitng2";
import UpdateLisitng2 from "./pages/UpdateLisitng2";
=======
import Search from "./pages/Search";
import UserLisitings from "./pages/UserLisitings";
import Wishlist from "./pages/Wishlist";
import { Listing } from "./pages/Lisitng";
import { UpdateLisitng } from "./pages/UpdateLisitng";
import { CreateLisitng } from "./pages/CreateLisitng";
import Contact from "./pages/Contact";
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a

export default function App() {
	return (
		<BrowserRouter>
			<Header />
<<<<<<< HEAD
			<div className="main-content">
=======
			<div className="main-content dark:bg-black">
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/SignIn" element={<SignIn />}></Route>
					<Route path="/SignUp" element={<SignUp />}></Route>
					<Route path="/About" element={<About />}></Route>
<<<<<<< HEAD
					<Route path='/search' element={<Search />} />
					<Route path='/myLisitngs' element= {<UserLisitings/> } /> 
					<Route path="/listing/:listingId" element={<Listing2 />} />
=======
					<Route path="/search" element={<Search />} />
					<Route path="/myLisitngs" element={<UserLisitings />} />
					<Route path="/listing/:listingId" element={<Listing />} />
					<Route path="/contact" element={<Contact />} />
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a

					<Route element={<PrivateRoute />}>
						<Route path="/Profile" element={<Profile />}></Route>
						<Route
							path="/create-listing"
<<<<<<< HEAD
							element={<CreateLisitng2 />}
						/>
						<Route
							path="/update-listing/:listingId"
							element={<UpdateLisitng2 />}
						/>
=======
							element={<CreateLisitng />}
						/>
						<Route
							path="/update-listing/:listingId"
							element={<UpdateLisitng />}
						/>
						<Route path="/wishlist" element={<Wishlist />} />
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
					</Route>
				</Routes>
			</div>
			<Footer />
		</BrowserRouter>
	);
}
