import { Link, useNavigate } from "react-router-dom";
import house_logo from "../assets/house_logo.svg";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInFailure,
  signInSuccess,
} from "../redux/user/userSlice";
import OAuth from "../../OAuth";
import { handleApiRequest } from "../util/handleApiRequest";
import { encryptData } from "../util/encryption";


export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const encryptFormData = encryptData(formData);

    await handleApiRequest(
      dispatch,
      navigate,
      `api/auth/signin`,
      "POST",
      signInStart,
      signInSuccess,
      signInFailure,
      "/",
      { "Content-Type": "application/json" },
      {data: encryptFormData}
    );
  };

  return (
    <div className="bg-white max-w-screen-xl mx-auto  p-5 sm:p-8 md:px-20 lg:p-0">
      <div className="lg:p-5  flex flex-col-reverse lg:flex-row justify-center items-center">
        <div className="bg-white  w-full lg:w-3/5">
          <div>
            <h1 className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6 text-5xl">
              Find Your Dream Here!
            </h1>
          </div>
          <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 h-full">
              <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
                >
                  <img
                    src="https://images.pexels.com/photos/7641856/pexels-photo-7641856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                </a>
              </div>
              <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
                >
                  <img
                    src="https://images.pexels.com/photos/8293651/pexels-photo-8293651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                </a>
                <div className="grid gap-4 grid-cols-1">
                  <a
                    href=""
                    className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                  >
                    <img
                      src="https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  </a>
                </div>
              </div>
              <div className="col-span-2 sm:col-span-2 md:col-span-2 bg-sky-50 h-auto md:h-full flex flex-col">
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
                >
                  <img
                    src="https://images.pexels.com/photos/7415013/pexels-photo-7415013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-white w-full lg:w-2/5 flex flex-row justify-center p-0 rounded-lg">
          <div className="bg-loginBox w-full  rounded-lg flex-col justify-center p-8 sm:p-10 md:p-15 ">
            <div className="flex justify-center">
              <img src={house_logo} className="w-30 md:w-1/7  xl:w-[3vw]" />
            </div>
            <h1 className="text-white text-center text-2xl md:text-3xl font-semibold my-4">
              Sign In
            </h1>

            {/* Inputs  */}
            <form onSubmit={handleSubmit}>
              <div className="flex-col  justify-center  items-center   lg:mt-10">
                <input
                  className="bg-white my-4 md:my-2 p-2 w-full rounded-lg"
                  placeholder="Email"
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  required
                />
                <input
                  className="bg-white  mb-0 md:my-4 p-2 w-full rounded-lg"
                  placeholder="Password"
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  required
                />
              </div>
              {/* <div className="w-full  flex flex-row-reverse my-2  lg:my-0">
              <a className="text-white text-sm">Forgot Password?</a>
            </div> */}

              {/* Buttons */}

              <div className="mt-5 ">
                <button
                  type="submit"
                  className="focus:outline-none w-full text-buttonSecondaryTextColor bg-buttonSecondaryColor hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                >
                  {loading ? "Loading..." : "Sign In"}
                </button>
              </div>
            </form>
            <span className="text-red-700">{error}</span>
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
            <div className=" flex w-full my-5 items-center ">
              <hr className="w-1/3 h-0.5 mx-auto  bg-gray-100 border-0 rounded " />
              <span className=" mx-auto  text-white  ">or </span>
              <hr className="w-1/3 h-0.5 mx-auto  bg-gray-100 border-0 rounded " />
            </div>

            <div className=" flex justify-center items-center  my-6 ">
              <OAuth></OAuth>
            </div>
            <div>
              <p className="text-white text-center">
                Dont have an account?{" "}
                <Link to="/signup" className="text-[#4285F4]">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
