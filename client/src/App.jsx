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
import Search from "./pages/Search";
import UserLisitings from "./pages/UserLisitings";

export default function App() {
	// Array of public routes
	const publicRoutes = [
		{ path: "/", element: <Home /> },
		{ path: "/SignIn", element: <SignIn /> },
		{ path: "/SignUp", element: <SignUp /> },
		{ path: "/About", element: <About /> },
		{ path: "/search", element: <Search /> },
		{ path: "/myListings", element: <UserLisitings /> },
		{ path: "/listing/:listingId", element: <Listing /> },
	];

	// Array of private routes
	const privateRoutes = [
		{ path: "/Profile", element: <Profile /> },
		{ path: "/create-listing", element: <CreateListing /> },
		{ path: "/update-listing/:listingId", element: <UpdateListing /> },
	];

	return (
		<BrowserRouter>
			<Header />
			<div className="main-content">
				<Routes>
					{/* Loop through public routes */}
					{publicRoutes.map((route, index) => (
						<Route
							key={index}
							path={route.path}
							element={route.element}
						/>
					))}

					{/* Loop through private routes inside the PrivateRoute component */}
					<Route element={<PrivateRoute />}>
						{privateRoutes.map((route, index) => (
							<Route
								key={index}
								path={route.path}
								element={route.element}
							/>
						))}
					</Route>
				</Routes>
			</div>
			<Footer />
		</BrowserRouter>
	);
}
