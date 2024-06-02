import { Link, useNavigate } from "react-router-dom";

import user_avatar from "../assets/user_avatar.svg";
import { useEffect, useRef, useState } from "react";
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

export default function Profile() {
  const [formData, setFormData] = useState({});
  const fileRef = useRef(null);
  const [file, setFile] = useState(null);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {};

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const updateRequest = await fetch(`api/user/update/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const updateResponse = await updateRequest.json();
      if (updateResponse.success == false) {
        dispatch(updateUserFailure(updateResponse.message));
        return;
      }

      dispatch(updateUserSuccess(updateResponse));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  };

  if (error) {
    toast.error(error);
  }

  if (updateSuccess) {
    toast.success("User updated successfully");
  }

  const handleDeleteUser = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };

  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart());
      const signoutRequest = await fetch('/api/auth/signout');
      const signoutResponse = await signoutRequest.json();
      if (signoutResponse.success === false) {
        dispatch(deleteUserFailure(signoutResponse.message));
        return;
      }
      dispatch(deleteUserSuccess(signoutResponse));
    } catch (error) {
      dispatch(deleteUserFailure(signoutResponse.message));
    }
  };

  return (
    <div className=" w-[90vw] sm:w-[70vw] md:w-[50vw] mx-auto my-[2vh]">
      <div className="bg-primary w-full  rounded-lg flex-col justify-center p-8 sm:p-10 md:p-15 ">
        <h1 className="text-white text-center text-2xl md:text-3xl font-semibold my-4 mb8">
          Profile
        </h1>

        <div className="flex justify-center">
          <input
            type="file"
            ref={fileRef}
            onClick={(e) => setFile(e.target.files[0])}
            hidden
            accept="image/*"
          />
          <img
            onClick={() => fileRef.current.click()}
            src={user_avatar}
            className="w-30  my-5 w-1/2 md:w-1/5  xl:w-[5vw]"
          />
        </div>

        {/* Inputs  */}
        <form onSubmit={handleSubmit}>
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
          <button onClick={handleDeleteUser} className="bg-[#F52314] my-4 md:my-0 p-2 rounded-md">
            Delete Account
          </button>
          <button onClick={handleSignOut} className="bg-[#7e2d21] p-2 rounded-md">Sign Out</button>
        </div>
      </div>
    </div>
  );
}
