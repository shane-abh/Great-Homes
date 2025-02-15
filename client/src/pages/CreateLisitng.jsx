import { useState } from "react";
import { useMultistepForm } from "../util/useMultistepForm";
import PropertyDetailsForm from "../components/PropertyDetailsForm";
import PropertyImageForm from "../components/PropertyImageForm";
import PropertyReview from "../components/PropertyReview";
import PropertyAddressForm from "../components/PropertyAddressForm";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import DOMPurify from "dompurify";

const INITIAL_DATA = {
  name: "",
  description: "",
  address: {
    street: "",
    city: "",
    province: "",
    postalCode: "",
  },
  propertyType: "",
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
  sqFeet: 0,
  type: "",
  offer: false,
  imageUrls: [],
  userRef: "",
};

const isValidPostalCode = (postalCode) => {
  const pattern = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
  return pattern.test(postalCode);
};

const hasSpecialCharacters = (str) => {
  const pattern = /[^a-zA-Z0-9\s]/;
  return pattern.test(str);
};

export const CreateLisitng = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [error, setError] = useState({});

  const updateFields = (fields) => {
    const sanitizedFields = {};

    for (const key in fields) {
      if (key === "imageUrls") {
        sanitizedFields[key] = fields[key].map((url) =>
          DOMPurify.sanitize(url)
        );
      } else if (typeof fields[key] === "string") {
        sanitizedFields[key] = DOMPurify.sanitize(fields[key]);
        if (hasSpecialCharacters(fields[key])) {
          setError((prevError) => ({ ...prevError, [key]: "Invalid input, special characters are not allowed" }));
          return;
        }else{
          setError((prevError) => ({ ...prevError, [key]: "" }));
        }
      } else if (typeof fields[key] === "object" && fields[key] !== null) {
        sanitizedFields[key] = {};
        for (const subKey in fields[key]) {
          if (typeof fields[key][subKey] === "string") {
            sanitizedFields[key][subKey] = DOMPurify.sanitize(fields[key][subKey]);
            if (hasSpecialCharacters(fields[key][subKey])) {
              setError((prevError) => ({ ...prevError, [subKey]: "Invalid input, special characters are not allowed" }));
              return;
            }
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

  const validateStep = (currentStepIndex) => {
    const {
      name,
      propertyType,
      regularPrice,
      bathrooms,
      bedrooms,
      parkings,
      sqFeet,
      type,
      description,
      address,
    } = data;
    const { street, city, province, postalCode } = address;

    let errors = {};

    switch (currentStepIndex) {
      case 0:
        if (!name) {
          errors.name = "Name is required";
        }
        if (!propertyType) {
          errors.propertyType = "Property Type is required";
        }
        if (regularPrice < 500 || isNaN(regularPrice)) {
          errors.regularPrice = "Regular Price must be at least 500";
        }
        if (bathrooms < 0 || bathrooms > 10 || isNaN(bathrooms)) {
          errors.bathrooms = "Bathrooms must be between 0 and 10";
        }
        if (bedrooms < 0 || bedrooms > 10 || isNaN(bedrooms)) {
          errors.bedrooms = "Bedrooms must be between 0 and 10";
        }
        if (parkings < 0 || parkings > 8 || isNaN(parkings)) {
          errors.parkings = "Parkings must be between 0 and 8";
        }
        if (sqFeet < 150 || sqFeet > 5000 || isNaN(sqFeet)) {
          errors.sqFeet = "Square Feet must be between 150 and 5000";
        }
        if (!type) {
          errors.type = "Type is required";
        }
        if (description.length < 30) {
          errors.description = "Description must be at least 30 characters long";
        }
        break;
      case 1:
        if (!street) {
          errors.street = "Street is required";
        }
        if (!city) {
          errors.city = "City is required";
        }
        if (!province) {
          errors.province = "Province is required";
        }
        if (!isValidPostalCode(postalCode)) {
          errors.postalCode = "Invalid Postal Code";
        }
        break;
      default:
        break;
    }

    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const { step, isFirstStep, isLastStep, back, next } = useMultistepForm(
    [
      <PropertyDetailsForm
        key={1}
        {...data}
        updateFields={updateFields}
        errors={error}
      />,
      <PropertyAddressForm key={2} {...data} updateFields={updateFields} errors={error} />,
      <PropertyImageForm key={3} {...data} updateFields={updateFields} />,
      <PropertyReview key={4} {...data} updateFields={updateFields} />,
    ],
    validateStep
  );

  async function onSubmit(e) {
    e.preventDefault();

    if (!isLastStep) return next();

    const res = await fetch("/api/listing/create", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        userRef: currentUser._id,
        contactEmail: currentUser.email,
      }),
    });
    const data2 = await res.json();   
    navigate(`/listing/${data2._id}`);
  }

  return (
    <div className="bg-[#F6F6F6]">
      <div className="p-5 md:w-1/2 mx-auto rounded-lg py-4 max-w-screen-lg">
        <form onSubmit={onSubmit}>
          {step}
          <div>
            <div className="md:mx-auto flex md:justify-end flex-col md:flex-row gap-4 w-full">
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
