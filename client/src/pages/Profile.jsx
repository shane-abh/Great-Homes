import { Link, useNavigate } from "react-router-dom";
import house_logo from "../assets/house_logo.svg";
import user_avatar from "../assets/user_avatar.svg"
import { useState } from "react";

export default function Profile() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {};

  return (
    <div className=" w-[90vw] sm:w-[70vw] md:w-[50vw] mx-auto my-[2vh]">
      <div className="bg-primary w-full  rounded-lg flex-col justify-center p-8 sm:p-10 md:p-15 ">
       
        <h1 className="text-white text-center text-2xl md:text-3xl font-semibold my-4 mb8">
          Profile
        </h1>

		<div className="flex justify-center">
			<img src={user_avatar} className="w-30  my-5 w-1/2 md:w-1/5  xl:w-[5vw]"/>
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
              onChange={handleChange}
              required
            />
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

          {/* Buttons */}

          <div className="mt-5 ">
            <input
              className="focus:outline-none w-full text-primary bg-secondary  font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
              type="submit"
              value={"Update"}
            />
          </div>
        </form>

		<div className="w-full flex md:flex-row flex-col  justify-between text-white text-sm font-bold md:px-2 mt-8">
        <button className="bg-[#F52314] my-4 md:my-0 p-2 rounded-md">Delete Account</button>
        <button className="bg-[#7e2d21] p-2 rounded-md">Sign Out</button>
      </div>
      </div>
      
    </div>
  );
}
