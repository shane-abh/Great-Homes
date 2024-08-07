import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import {Listing} from "./pages/Lisitng";
import Search from "./pages/Search";
import UserLisitings from "./pages/UserLisitings";
import { UpdateLisitng } from "./pages/UpdateLisitng";
import Wishlist from "./pages/Wishlist";
import { CreateLisitng } from "./pages/CreateLisitng";
import Contact from "./pages/Contact";

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
          <Route path="/search" element={<Search />} />
          <Route path="/myLisitngs" element={<UserLisitings />} />
          <Route path="/listing/:listingId" element={<Listing />} />
          <Route path="/contact" element={<Contact />} />

          <Route element={<PrivateRoute />}>
            <Route path="/Profile" element={<Profile />}></Route>
            <Route path="/create-listing" element={<CreateLisitng />} />
            <Route
              path="/update-listing/:listingId"
              element={<UpdateLisitng />}
            />
            <Route path="/wishlist" element={<Wishlist />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
