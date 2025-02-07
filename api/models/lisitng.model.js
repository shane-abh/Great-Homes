import mongoose from "mongoose";
const propertyTypes = ["Apartment", "Bungalow", "Condominium", "Villa"];
const listingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    address: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      province: { type: String, required: true },
      postalCode: { type: String, required: true },
    },
    propertyType: {
      type: String,
      enum: propertyTypes,
      required: true,
    },
    regularPrice: {
      type: Number,
      required: true,
    },
    discountPrice: {
      type: Number,
      required: true,
    },
    bathrooms: {
      type: Number,
      required: true,
    },
    bedrooms: {
      type: Number,
      required: true,
    },
    parkings: {
      type: Number,
      required: true,
    },
    amenities: {
      furnished: {
        type: Boolean,
        required: true,
      },
      parking: {
        type: Boolean,
        required: true,
      },
      laundry: {
        type: Boolean,
        required: true,
      },
      kitchenEssentials: {
        type: Boolean,
        required: true,
      },
    },
    sqFeet: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    offer: {
      type: Boolean,
      required: true,
    },
    imageUrls: {
      type: Array,
      required: true,
    },
    contactEmail: {
      type: String,
      required: true,
    },
    userRef: {
      type: String,
      required: true,
    },

  },
  { timestamps: true }
);

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;
