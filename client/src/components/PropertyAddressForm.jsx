
import { FormWrapper } from "./FormWrapper";

const AddressForm = (addressDetails) => {
  const { address, updateFields } = addressDetails
  const { street, city, province, postalCode } = address;

  return (
    <FormWrapper title="Property Address" subTitle="Please enter the address to locate the property">
      <div className="flex flex-col">
        <label
          htmlFor="street"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Street*
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2.5 "
          autoFocus
          required
          type="text"
          id="street"
          value={street}
          onChange={(e) =>
            updateFields({ address: { ...address, street: e.target.value } })
          }
        />
        <label
          htmlFor="city"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          City*
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2.5 "
          required
          type="text"
          id="city"
          value={city}
          onChange={(e) =>
            updateFields({ address: { ...address, city: e.target.value } })
          }
        />
        <label
          htmlFor="province"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Province*
        </label>

        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          id="province"
          onChange={(e) =>
            updateFields({ address: { ...address, province: e.target.value } })
          }
          value={province}
        >
          <option value="">--Select an option--</option>
          <option value="Alberta">Alberta</option>
          <option value="British Columbia">British Columbia</option>
          <option value="Manitoba">Manitoba</option>
          <option value="New Brunswick">New Brunswick</option>
          <option value="Newfoundland and Labrador">
            Newfoundland and Labrador
          </option>
          <option value="Northwest Territories">Northwest Territories</option>
          <option value="Nova Scotia">Nova Scotia</option>
          <option value="Nunavut">Nunavut</option>
          <option value="Ontario">Ontario</option>
          <option value="Prince Edward Island">Prince Edward Island</option>
          <option value="Quebec">Quebec</option>
          <option value="Saskatchewan">Saskatchewan</option>
          <option value="Yukon">Yukon</option>
        </select>
        <label
          htmlFor="postalCode"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Postal Code*
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2.5 "
          required
          type="text"
          id="postalCode"
          value={postalCode}
          pattern="^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$"
          onChange={(e) =>
            updateFields({
              address: { ...address, postalCode: e.target.value },
            })
          }
        />
      </div>
    </FormWrapper>
  );
};

export default AddressForm;
