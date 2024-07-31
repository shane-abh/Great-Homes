import React from "react";
import { FormWrapper } from "./FormWrapper";

const PropertyReview = ({
  name,
  description,
  address,
  propertyType,
  regularPrice,
  discountPrice,
  bathrooms,
  bedrooms,
  parkings,
  amenities,
  sqFeet,
  type,
  offer,
  imageUrls,
  userRef,
}) => {
  const { street, city, province, postalCode } = address;
  const { furnished, parking, laundry, kitchenEssentials } = amenities;
  return (
    <FormWrapper title="Review" subTitle="Please carefully review the property details">
      <div>
        <h2 className="text-2xl font-bold mt-4 mb-2">Property Details</h2>
        <div className="grid gap-6 grid-cols-1  md:grid-cols-2">
          <div>
            <h3 className="font-semibold text-black/70">Name</h3>
            <p>{name}</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-black/70">Property Type</h3>
            <p>{propertyType}</p>
          </div>
          <div>
            <h3 className="font-semibold text-black/70">Price</h3>
            <p>Regular Price: ${regularPrice}</p>
            <p>Discount Price: ${discountPrice}</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-black/70">Bathrooms</h3>
            <p> {bathrooms}</p>
          </div>
          <div>
            <h3 className="font-semibold text-black/70">Bedrooms</h3>
            <p> {bedrooms}</p>
          </div>
          <div>
            <h3 className="font-semibold text-black/70">Parkings</h3>
            <p> {parkings}</p>
          </div>
          <div>
            <h3 className="font-semibold text-black/70">Square Feet</h3>
            <p>{sqFeet} sq.ft</p>
          </div>
          <div>
            <h3 className="font-semibold text-black/70">Amenities</h3>
            <p>{furnished ? "Furnished" : ""}</p>
            <p>{parking ? "Parking" : ""}</p>
            <p>{laundry ? "Laundry" : ""}</p>
            <p>{kitchenEssentials ? "Kitchen Essentials" : ""}</p>
          </div>
          <div className="md:col-span-2">
            <h3 className="font-semibold text-black/70">Description</h3>
            <p>{description}</p>
          </div>
          
        </div>
        <h2 className="text-2xl font-bold mt-4 mb-2">Address</h2>
        <div className="flex flex-col gap-2 mb-8">
          <div>
            <h3 className="font-semibold text-black/70">Street</h3>
            <p>{street}</p>
          </div>
          <div>
            <h3 className="font-semibold text-black/70">City</h3>
            <p>{city}</p>
          </div>
          <div>
            <h3 className="font-semibold text-black/70">Province</h3>
            <p>{province}</p>
          </div>
          <div>
            <h3 className="font-semibold text-black/70">Postal Code</h3>
            <p>{postalCode}</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mt-4 mb-2">Images</h2>
          <div className="flex flex-wrap gap-4">
            {imageUrls.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Property Image ${index + 1}`}
                className="w-[10vw]"
              />
            ))}
          </div>
        </div>
      </div>
    </FormWrapper>
  );
};

export default PropertyReview;
