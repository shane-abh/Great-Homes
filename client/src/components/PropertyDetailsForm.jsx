
import { FormWrapper } from "./FormWrapper";

const PropertyDetailsForm = ({
  name,
  description,
  propertyType,
  regularPrice,
  discountPrice,
  bathrooms,
  bedrooms,
  parkings,
  amenities, // Destructure amenities directly
  sqFeet,
  type,
  updateFields,
}) => {
  const { furnished, parking, laundry, kitchenEssentials } = amenities;

  const handleCheckboxChange = (key, value) => {
    updateFields({
      amenities: {
        ...amenities,
        [key]: value,
      },
    });
  };

  const amenitiesList = [
    { id: "furnished", label: "Furnished", value:  furnished},
    { id: "parking", label: "Parking" , value:  parking},
    { id: "laundry", label: "Laundry" , value:  laundry},
    { id: "kitchenEssentials", label: "Kitchen Essentials", value:  kitchenEssentials },
  ];

  return (
    <FormWrapper title="Property Details" subTitle="Please enter a detailed description about your property">
      <div className="flex flex-col w-full  ">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Name
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              autoFocus
              required
              type="text"
              id="name"
              value={name}
              onChange={(e) => updateFields({ name: e.target.value })}
            />
          </div>

          <div>
            <label
              htmlFor="propertyType"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Property Type
            </label>
            {/* <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
              type="text"
              id="propertyType"
              value={propertyType}
              onChange={(e) => updateFields({ propertyType: e.target.value })}
            /> */}

            <select
              onChange={(e) => updateFields({ propertyType: e.target.value })}
              id="propertyType"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              <option value="">Select an Option</option>
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
              <option value="Condominium">Condominium</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="regularPrice"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Regular Price
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
              type="number"
              id="regularPrice"
              value={regularPrice}
              onChange={(e) => updateFields({ regularPrice: e.target.value })}
            />
          </div>
          <div>
            <label
              htmlFor="discountPrice"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Discount Price
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
              type="number"
              id="discountPrice"
              value={discountPrice}
              onChange={(e) => updateFields({ discountPrice: e.target.value })}
            />
          </div>
          <div>
            <label
              htmlFor="bathrooms"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Bathrooms
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
              type="number"
              id="bathrooms"
              value={bathrooms}
              onChange={(e) => updateFields({ bathrooms: e.target.value })}
            />
          </div>
          <div>
            <label
              htmlFor="bedrooms"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Bedrooms
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
              type="number"
              id="bedrooms"
              value={bedrooms}
              onChange={(e) => updateFields({ bedrooms: e.target.value })}
            />
          </div>
          <div>
            <label
              htmlFor="parkings"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Parkings
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
              type="number"
              id="parkings"
              value={parkings}
              onChange={(e) => updateFields({ parkings: e.target.value })}
            />
          </div>

          <div>
            <label
              htmlFor="sqFeet"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Square Feet
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
              type="number"
              id="sqFeet"
              value={sqFeet}
              onChange={(e) => updateFields({ sqFeet: e.target.value })}
            />
          </div>
        </div>
        <div className="grid gap-6 mb-6">
          <div>
            <label
              htmlFor="type"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Type
            </label>

           <div className="flex justify-start gap-10">
            <div className="flex gap-2">
              <input
                
                required
                type="radio"
                id="Sale"
                value="Sale"
                name="type"
                checked={type=== 'Sale'}
                onChange={(e) => updateFields({ type: e.target.value })}
              />
              <label htmlFor="Sale">Sale</label>
            </div>
           <div className="flex gap-2"> 
            <input
              
              required
              type="radio"
              id="Rent"
              value="Rent"
              name="type"
              checked={type=== 'Rent'}
              onChange={(e) => updateFields({ type: e.target.value })}
            />
            <label htmlFor="Rent">Rent</label>
           </div>
           </div>
          </div>
          <div>
    <label className="block mb-2 text-sm font-medium text-gray-900">
      Amenities
    </label>
    {amenitiesList.map((amenity) => (
      <div key={amenity.id}>
        <input
          className="mx-2"
          type="checkbox"
          id={amenity.id}
          checked={amenity.value}
          onChange={(e) =>
            handleCheckboxChange(amenity.id, e.target.checked)
          }
        />
        <label htmlFor={amenity.id}>{amenity.label}</label>
      </div>
    ))}
  </div>
          <div>
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Description
            </label>
            <textarea
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
              id="description"
              value={description}
              onChange={(e) => updateFields({ description: e.target.value })}
            />
          </div>
        </div>
      </div>
    </FormWrapper>
  );
};

export default PropertyDetailsForm;
