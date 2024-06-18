import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import CreateListing from "./pages/CreateListing";
import UpdateListing from "./pages/UpdateListing";
import Listing from "./pages/Listing";

export default function App() {
	return (
		<BrowserRouter>
			<Header />
			<div className="main-content">
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/SignIn" element={<SignIn />}></Route>
					<Route path="/SignUp" element={<SignUp />}></Route>
					<Route path="/About" element={<About />}></Route>
					<Route path="/listing/:listingId" element={<Listing />} />

					<Route element={<PrivateRoute />}>
						<Route path="/Profile" element={<Profile />}></Route>
						<Route
							path="/create-listing"
							element={<CreateListing />}
						/>
						<Route
							path="/update-listing/:listingId"
							element={<UpdateListing />}
						/>
					</Route>
				</Routes>
			</div>
			<Footer />
		</BrowserRouter>
	);
}
