import mongoose from 'mongoose';

const wishlistSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    listings: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Listing',
        required: true,
      },
    ],
  },
  { timestamps: true }
);

const Wishlist = mongoose.model('Wishlist', wishlistSchema);

export default Wishlist;
