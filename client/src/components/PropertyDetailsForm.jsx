<<<<<<< HEAD

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
=======
import { FormWrapper } from "./FormWrapper";

const PropertyDetailsForm = (propertyDetails) => {
  const {
    name,
    description,
    propertyType,
    regularPrice,
    discountPrice,
    bathrooms,
    bedrooms,
    parkings,
    amenities,
    sqFeet,
    type,
    updateFields,
    errors,
  } = propertyDetails;
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
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
<<<<<<< HEAD
    { id: "furnished", label: "Furnished", value:  furnished},
    { id: "parking", label: "Parking" , value:  parking},
    { id: "laundry", label: "Laundry" , value:  laundry},
    { id: "kitchenEssentials", label: "Kitchen Essentials", value:  kitchenEssentials },
  ];

  return (
    <FormWrapper title="Property Details" subTitle="Please enter a detailed description about your property">
      <div className="flex flex-col w-full  ">
=======
    { id: "furnished", label: "Furnished", value: furnished },
    { id: "parking", label: "Parking", value: parking },
    { id: "laundry", label: "Laundry", value: laundry },
    {
      id: "kitchenEssentials",
      label: "Kitchen Essentials",
      value: kitchenEssentials,
    },
  ];

  return (
    <FormWrapper
      title="Property Details"
      subTitle="Please enter a detailed description about your property"
    >
      <div className="flex flex-col w-full">
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
<<<<<<< HEAD
              Name
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
=======
              Name*
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
              autoFocus
              required
              type="text"
              id="name"
              value={name}
              onChange={(e) => updateFields({ name: e.target.value })}
            />
<<<<<<< HEAD
=======
            {errors.name && <span className="text-xs text-red-600">{errors.name}</span>}
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
          </div>

          <div>
            <label
              htmlFor="propertyType"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
<<<<<<< HEAD
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
=======
              Property Type*
            </label>
            <select
              onChange={(e) => updateFields({ propertyType: e.target.value })}
              id="propertyType"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              value={propertyType}
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
            >
              <option value="">Select an Option</option>
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
              <option value="Condominium">Condominium</option>
              <option value="Bungalow">Bungalow</option>
            </select>
<<<<<<< HEAD
          </div>
=======
            {errors.propertyType && <span className="text-xs text-red-600">{errors.propertyType}</span>}
          </div>

>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
          <div>
            <label
              htmlFor="regularPrice"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
<<<<<<< HEAD
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
=======
              Regular Price*
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
              type="number"
              id="regularPrice"
              min={500}
              value={regularPrice}
              onChange={(e) => updateFields({ regularPrice: e.target.value })}
            />
            {errors.regularPrice && <span className="text-xs text-red-600">{errors.regularPrice}</span>}
          </div>

>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
          <div>
            <label
              htmlFor="discountPrice"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Discount Price
            </label>
            <input
<<<<<<< HEAD
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
              type="number"
              id="discountPrice"
              value={discountPrice}
              onChange={(e) => updateFields({ discountPrice: e.target.value })}
            />
          </div>
=======
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
              type="number"
              id="discountPrice"
              min={300}
              value={discountPrice}
              onChange={(e) => updateFields({ discountPrice: e.target.value })}
            />
            {errors.discountPrice && <span className="text-xs text-red-600">{errors.discountPrice}</span>}
          </div>

>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
          <div>
            <label
              htmlFor="bathrooms"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
<<<<<<< HEAD
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
=======
              Bathrooms*
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
              type="number"
              id="bathrooms"
              min={0}
              max={10}
              value={bathrooms}
              onChange={(e) => updateFields({ bathrooms: e.target.value })}
            />
            {errors.bathrooms && <span className="text-xs text-red-600">{errors.bathrooms}</span>}
          </div>

>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
          <div>
            <label
              htmlFor="bedrooms"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
<<<<<<< HEAD
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
=======
              Bedrooms*
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
              type="number"
              id="bedrooms"
              min={0}
              max={10}
              value={bedrooms}
              onChange={(e) => updateFields({ bedrooms: e.target.value })}
            />
            {errors.bedrooms && <span className="text-xs text-red-600">{errors.bedrooms}</span>}
          </div>

>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
          <div>
            <label
              htmlFor="parkings"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
<<<<<<< HEAD
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
=======
              Parkings*
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
              type="number"
              id="parkings"
              min={0}
              max={8}
              value={parkings}
              onChange={(e) => updateFields({ parkings: e.target.value })}
            />
            {errors.parkings && <span className="text-xs text-red-600">{errors.parkings}</span>}
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
          </div>

          <div>
            <label
              htmlFor="sqFeet"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
<<<<<<< HEAD
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
=======
              Square Feet*
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
              type="number"
              id="sqFeet"
              min={150}
              max={5000}
              value={sqFeet}
              onChange={(e) => updateFields({ sqFeet: e.target.value })}
            />
            {errors.sqFeet && <span className="text-xs text-red-600">{errors.sqFeet}</span>}
          </div>
        </div>

>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
        <div className="grid gap-6 mb-6">
          <div>
            <label
              htmlFor="type"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
<<<<<<< HEAD
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
=======
              Type*
            </label>
            <div className="flex justify-start gap-10">
              <div className="flex gap-2">
                <input
                  required
                  type="radio"
                  id="Sale"
                  value="Sale"
                  name="type"
                  checked={type === "Sale"}
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
                  checked={type === "Rent"}
                  onChange={(e) => updateFields({ type: e.target.value })}
                />
                <label htmlFor="Rent">Rent</label>
              </div>
            </div>
            {errors.type && <span className="text-xs text-red-600">{errors.type}</span>}
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Amenities*
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

>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
          <div>
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
<<<<<<< HEAD
              Description
            </label>
            <textarea
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
              id="description"
              value={description}
              onChange={(e) => updateFields({ description: e.target.value })}
            />
=======
              Description*
            </label>
            <textarea
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
              id="description"
              value={description}
              minLength={30}
              onChange={(e) => updateFields({ description: e.target.value })}
            />
            {errors.description && <span className="text-xs text-red-600">{errors.description}</span>}
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
          </div>
        </div>
      </div>
    </FormWrapper>
  );
};

export default PropertyDetailsForm;
