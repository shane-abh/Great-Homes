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

  const updateFields = (fields) => {
    const sanitizedFields = {};

    for (const key in fields) {
      
      if (key === "imageUrls") {
        // Sanitize only imageUrls array
        sanitizedFields[key] = fields[key].map((url) =>
          DOMPurify.sanitize(url)
        );
      } else if (typeof fields[key] === "string") {
        sanitizedFields[key] = DOMPurify.sanitize(fields[key]);
        if (hasSpecialCharacters(fields[key])) {
          alert("Special characters are not allowed.");
          return;
        }
      } else if (typeof fields[key] === "object" && fields[key] !== null) {
        sanitizedFields[key] = {};
        for (const subKey in fields[key]) {
          if (typeof fields[key][subKey] === "string") {
            sanitizedFields[key][subKey] = DOMPurify.sanitize(
              fields[key][subKey]
            );
            if (hasSpecialCharacters(fields[key][subKey])) {
              alert("Special characters are not allowed.");
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
    const { name, propertyType, regularPrice, bathrooms, bedrooms, parkings, sqFeet, type, description, address } = data;
    const { street, city, province, postalCode } = address;

    switch (currentStepIndex) {
      case 0:
        if (!name) {
          alert("Name is required");
          return false;
        }
        if (!propertyType) {
          alert("Property Type is required");
          return false;
        }
        if (regularPrice < 500 || isNaN(regularPrice)) {
          alert("Regular Price must be at least 500");
          return false;
        }
        if (bathrooms < 0 || bathrooms > 10 || isNaN(bathrooms)) {
          alert("Bathrooms must be between 0 and 10");
          return false;
        }
        if (bedrooms < 0 || bedrooms > 10 || isNaN(bedrooms)) {
          alert("Bedrooms must be between 0 and 10");
          return false;
        }
        if (parkings < 0 || parkings > 8 || isNaN(parkings)) {
          alert("Parkings must be between 0 and 8");
          return false;
        }
        if (sqFeet < 150 || sqFeet > 5000 || isNaN(sqFeet)) {
          alert("Square Feet must be between 150 and 5000");
          return false;
        }
        if (!type) {
          alert("Type is required");
          return false;
        }
        if (description.length < 30) {
          alert("Description must be at least 30 characters long");
          return false;
        }
        break;
      case 1:
        if (!street) {
          alert("Street is required");
          return false;
        }
        if (!city) {
          alert("City is required");
          return false;
        }
        if (!province) {
          alert("Province is required");
          return false;
        }
        if (!isValidPostalCode(postalCode)) {
          alert("Invalid Postal Code");
          return false;
        }
        break;
      // Add additional cases if there are other steps requiring validation
      default:
        break;
    }

    return true;
  };

  const { step, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <PropertyDetailsForm key={1} {...data} updateFields={updateFields} />,
    <PropertyAddressForm key={2} {...data} updateFields={updateFields} />,
    <PropertyImageForm key={3} {...data} updateFields={updateFields} />,
    <PropertyReview key={4} {...data} updateFields={updateFields} />,
  ], validateStep);

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

		console.log(data2);
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
