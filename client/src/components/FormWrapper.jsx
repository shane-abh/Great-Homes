import React from "react";

export function FormWrapper({ title, subTitle,  children }) {
  const circleDimension = "3vw";
  return (
    <>
      <div className="hidden md:flex justify-evenly p-2 mb-4 ">
        <div className=" md:w-1/4 flex flex-col items-center justify-center ">
          <div
            className={` w-[${circleDimension}] h-[${circleDimension}] rounded-full flex justify-center items-center ${
              title === "Property Details" ? "bg-blue-800" : "bg-blue-800/50"
            } mx-auto mb-2 `}
            id="circle"
          >
            <span className="text-white font-bold">1</span>
          </div>
          <div>
            <h3 className="text-center font-semibold text-sm">
              Property Details
            </h3>
          </div>
        </div>
        <div className="w-1/4 ">
          <div
            className={`w-[${circleDimension}] h-[${circleDimension}] rounded-full flex justify-center items-center ${
              title === "Property Address" ? "bg-blue-800" : "bg-blue-800/50"
            } mx-auto mb-2`}
          >
            <span className="text-white font-bold">2</span>
          </div>
          <div>
            <h3 className="text-center font-semibold text-sm">
              Property Address
            </h3>
          </div>
        </div>
        <div className="w-1/4 ">
          <div
            className={`w-[${circleDimension}] h-[${circleDimension}] rounded-full flex justify-center items-center ${
              title === "Property Images" ? "bg-blue-800" : "bg-blue-800/50"
            } mx-auto mb-2`}
          >
            <span className="text-white font-bold">3</span>
          </div>
          <div>
            <h3 className="text-center font-semibold text-sm">Add photos</h3>
          </div>
        </div>
        <div className="w-1/4 ">
          <div
            className={`w-[${circleDimension}] h-[${circleDimension}] rounded-full flex justify-center items-center ${
              title === "Review" ? "bg-blue-800" : "bg-blue-800/50"
            } mx-auto mb-2`}
          >
            <span className="text-white font-bold">4</span>
          </div>
          <div>
            <h3 className="text-center font-semibold text-sm">
              Review details
            </h3>
          </div>
        </div>
      </div>
      <h2 className="font-bold text-center text-3xl">{title}</h2>
      <p className="text-center  mt-4 mb-8">
       {subTitle}
      </p>
      <div className="w-full bg-white shadow-lg  p-4 md:p-8 my-2 rounded-lg">{children}</div>
    </>
  );
}
