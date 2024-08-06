import  { useState, useEffect } from 'react';
import heart from '../assets/icons/heart.png'
import heart_colored from '../assets/icons/heart_colored.png';

const WishlistButton = (wishlistDetails) => {
  const { listingId, userId } = wishlistDetails
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    const fetchWishlistStatus = async () => {
      try {
        const response = await fetch(`/api/wishlist/${userId}`);
        const data = await response.json();
        if (data.listings.some(listingItem => listingItem._id === listingId)) {
          setIsInWishlist(true);
        }
      } catch (error) {
        console.error('Error fetching wishlist status:', error);
      }
    };

    fetchWishlistStatus();
  }, [userId, listingId]);

  const toggleWishlist = async () => {
    console.log(listingId, userId)
    try {
      const endpoint = isInWishlist ? 'remove' : 'add';
      const response = await fetch(`/api/wishlist/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, listingId }),
      });

      const data = await response.json();
      
      if (data) {
        setIsInWishlist(!isInWishlist);
      } else {
        console.error('Error toggling wishlist status:', data.message);
      }
    } catch (error) {
      console.error('Error toggling wishlist status:', error);
    }
  };

  return (
    <img
    src={isInWishlist ? heart_colored: heart}
    alt={isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
    onClick={toggleWishlist}
    style={{ cursor: 'pointer', width: '24px', height: '24px' }}
  />
  );
};

export default WishlistButton;
