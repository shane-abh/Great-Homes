import { useState } from "react";
import { useMultistepForm } from "../util/useMultistepForm";
import PropertyDetailsForm from "../components/PropertyDetailsForm";
import PropertyImageForm from "../components/PropertyImageForm";
import PropertyReview from "../components/PropertyReview";
import PropertyAddressForm from "../components/PropertyAddressForm";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import DOMPurify from "dompurify";

// type FormData = {
//   name: string,
//   description: string,
//   address: {
//     street: string,
//     city: string,
//     province: string,
//     postalCode: string,
//   },
//   propertyType: string,
//   regularPrice: number,
//   discountPrice: number,
//   bathrooms: number,
//   bedrooms: number,
//   parkings: number,
//   amenities: {
//     furnished: boolean,
//     parking: boolean,
//     laundry: boolean,
//     kitchenEssentials: boolean,
//   },
//   sqFeet: number, // Assuming a sample square footage
//   type: string,
//   offer: boolean,
//   imageUrls: [string],
//   userRef: string,
// };

const INITIAL_DATA = {
  name: "", // name of house/villa/apartment
  description: "",
  address: {
    street: "",
    city: "",
    province: "",
    postalCode: "",
  },
  propertyType: "", // villa/bungalow/apartment/condominium
  regularPrice: 0,
  discountPrice: 0,
  bathrooms: 0,
  bedrooms: 0,
  parkings: 0,
  amenities: {
    furnished: false,
    parking: false,
    laundry: false,
    kitchenEssentials: false,
  },
  sqFeet: 0, // Assuming a sample square footage
  type: "",
  offer: false,
  imageUrls: [""],
  userRef: "",
};

const CreateLisitng2 = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);



  const updateFields = (fields) => {
    const sanitizedFields = {};
    for (const key in fields) {
      if (key === "imageUrls") {
        // Sanitize only imageUrls array
        sanitizedFields[key] = fields[key].map((url) => DOMPurify.sanitize(url));
      } else if (typeof fields[key] === "string") {
        sanitizedFields[key] = DOMPurify.sanitize(fields[key]);
      } else if (typeof fields[key] === "object" && fields[key] !== null) {
        sanitizedFields[key] = {};
        for (const subKey in fields[key]) {
          if (typeof fields[key][subKey] === "string") {
            sanitizedFields[key][subKey] = DOMPurify.sanitize(fields[key][subKey]);
          } else {
            sanitizedFields[key][subKey] = fields[key][subKey];
          }
        }
      } else {
        sanitizedFields[key] = fields[key];
      }
    }
    setData((prev) => ({
      ...prev,
      ...sanitizedFields,
    }));
  };

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <PropertyDetailsForm key={1} {...data} updateFields={updateFields} />,
      <PropertyAddressForm key={2} {...data} updateFields={updateFields} />,
      <PropertyImageForm key={3} {...data} updateFields={updateFields} />,
      <PropertyReview key={4} {...data} updateFields={updateFields} />,
    ]);

  async function onSubmit(e) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Successful Account Creation");
    setLoading(true);
      setError(false);
      const res = await fetch("/api/listing/create", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          userRef: currentUser._id,
        }),
      });
      const data2 = await res.json();
      setLoading(false);
      if (data2.success === false) {
        setError(data2.message);
      }
      console.log(data2)
      navigate(`/listing/${data2._id}`);
  }

  return (
    <div className="bg-[#F6F6F6]">
      <div className="  p-5 md:w-1/2 mx-auto rounded-lg py-4 max-w-screen-lg">
        <form onSubmit={onSubmit}>
          {step}
          <div>
            <div className="md:mx-auto flex md:justify-end flex-col md:flex-row gap-4  w-full">
              {!isFirstStep && (
                <button
                  type="button"
                  onClick={back}
                  className="px-8 py-2 bg-[#0144BD] text-white rounded-md"
                >
                  Back
                </button>
              )}
              <button
                type="submit"
                className={`px-8 py-2 ${
                  isLastStep ? "bg-[#012865]/80" : "bg-[#012865]/80"
                } text-white rounded-md`}
              >
                {isLastStep ? "Finish" : "Next"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateLisitng2;
