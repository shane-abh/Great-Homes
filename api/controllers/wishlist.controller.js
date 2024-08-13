import Wishlist from '../models/wishlist.model.js';
import Listing from '../models/lisitng.model.js';

// Add a listing to the user's wishlist
export const addToWishlist = async (req, res) => {
  const { userId, listingId } = req.body;
console.log(req.body)
  try {
    // Find the wishlist for the user
    let wishlist = await Wishlist.findOne({ user: userId });

    // If no wishlist exists, create a new one
    if (!wishlist) {
      wishlist = new Wishlist({ user: userId, listings: [listingId] });
    } else {
      // Add the listing to the wishlist if not already present
      if (!wishlist.listings.includes(listingId)) {
        wishlist.listings.push(listingId);
      }
    }

    await wishlist.save();
    res.status(200).json(wishlist);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add listing to wishlist', error });
  }
};

// Remove a listing from the user's wishlist
export const removeFromWishlist = async (req, res) => {
  const { userId, listingId } = req.body;

  try {
    // Find the wishlist for the user
    const wishlist = await Wishlist.findOne({ user: userId });

    if (wishlist) {
      wishlist.listings = wishlist.listings.filter(id => id.toString() !== listingId);

      await wishlist.save();
      res.status(200).json(wishlist);
    } else {
      res.status(404).json({ message: 'Wishlist not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to remove listing from wishlist', error });
  }
};

// Get the wishlist for a user
export const getWishlist = async (req, res) => {
  const { userId } = req.params;

  try {
    const wishlist = await Wishlist.findOne({ user: userId }).populate('listings');

    if (wishlist) {
      res.status(200).json(wishlist);
    } else {
      res.status(404).json({ message: 'Wishlist not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to get wishlist', error });
  }
};
