import { useNavigate } from "react-router-dom";

import user_avatar from "../assets/user_avatar.svg";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserFailure,
  deleteUserSuccess,
  deleteUserStart,
  signOutUserStart,
} from "../redux/user/userSlice.js";

import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { handleApiRequest } from "../util/handleApiRequest.js";

export default function Profile() {
  const [formData, setFormData] = useState({});

  const [updateSuccess, setUpdateSuccess] = useState(false);
  const { currentUser, loading, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleApiRequest(
      dispatch,
      navigate,
      `api/user/update/${currentUser._id}`,
      "POST",
      updateUserStart,
      updateUserSuccess,
      updateUserFailure,
      null,
      { "Content-Type": "application/json" },
      formData
    );
    setUpdateSuccess(true);
  };

  if (error) {
    toast.error(error);
  }

  useEffect(() => {
    if (updateSuccess) {
      toast.success("User updated successfully");
      setUpdateSuccess(false); // Reset the state if needed
    }
  }, [updateSuccess]);

  const handleDeleteUser = async () => {
    await handleApiRequest(
      dispatch,
      navigate,
      `/api/user/delete/${currentUser._id}`,
      "DELETE",
      deleteUserStart,
      deleteUserSuccess,
      deleteUserFailure,
      "/signin"
    );
  };

  const handleSignOut = async () => {
   await handleApiRequest(
      dispatch,
      navigate,
      "/api/auth/signout",
      "GET",  // Assuming signout uses POST, change if necessary
      signOutUserStart,
      deleteUserSuccess,
      deleteUserFailure,
      "/signin"
    );
  };

  return (
    <div className=" w-[90vw] sm:w-[70vw] md:w-[50vw] mx-auto my-[2vh]">
      <div className="bg-primary w-full  rounded-lg flex-col justify-center p-8 sm:p-10 md:p-15 ">
        <h1 className="text-white text-center text-2xl md:text-3xl font-semibold my-4 mb8">
          Profile
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center">
            <img
              src={user_avatar}
              alt="Profile Image"
              className="w-30  my-5 w-1/2 md:w-1/5  xl:w-[5vw]"
            />
          </div>

          {/* Inputs  */}

          <div className="flex-col  justify-center  items-center   lg:mt-10">
            <input
              className="bg-white my-4 md:my-2 p-2 w-full rounded-lg"
              placeholder="Username"
              type="text"
              name="username"
              id="username"
              defaultValue={currentUser.username}
              onChange={handleChange}
            />
            <input
              className="bg-white my-4 md:my-2 p-2 w-full rounded-lg"
              placeholder="Email"
              type="email"
              name="email"
              id="email"
              defaultValue={currentUser.email}
              onChange={handleChange}
            />
            <input
              className="bg-white  mb-0 md:my-4 p-2 w-full rounded-lg"
              placeholder="Password"
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
            />
          </div>

          {/* Buttons */}

          <div className="mt-5 ">
            <input
              disabled={loading}
              className="focus:outline-none w-full text-primary bg-secondary  font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
              type="submit"
              value={loading ? "Loading..." : "Update Profile"}
            />
          </div>
        </form>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />

        <div className="w-full flex md:flex-row flex-col  justify-between text-white text-sm font-bold md:px-2 mt-8">
          <button
            onClick={handleDeleteUser}
            className="bg-[#F52314] my-4 md:my-0 p-2 rounded-md"
          >
            Delete Account
          </button>
          <button
            onClick={handleSignOut}
            className="bg-[#7e2d21] p-2 rounded-md"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
