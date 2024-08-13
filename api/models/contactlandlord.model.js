import mongoose from 'mongoose';

const contactLandlordSchema = new mongoose.Schema(
    {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        listing: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Listing",
          required: true,
        },
        contacted: {
          type: Boolean,
          default: false,
        },
      },
      { timestamps: true }
    );

const ContactLandlordSchema = mongoose.model('ContactLandlord', contactLandlordSchema);

export default ContactLandlordSchema;