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
import CreateLisitng2 from "./pages/CreateLisitng2";
import Listing2 from "./pages/Lisitng2";
import UpdateLisitng2 from "./pages/UpdateLisitng2";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/About" element={<About />} />
          <Route path="/search" element={<Search />} />
          <Route path="/myLisitngs" element={<UserLisitings />} />
          <Route path="/listing/:listingId" element={<Listing2 />} />
          <Route path="/contact" element={<Contact />} />

          <Route element={<PrivateRoute />}>
            <Route path="/Profile" element={<Profile />} />
            <Route path="/create-listing" element={<CreateLisitng2 />} />
            <Route path="/update-listing/:listingId" element={<UpdateLisitng2 />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
