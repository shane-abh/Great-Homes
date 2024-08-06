import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import UserListingItem from '../components/UserListingItem';
import WishlistItem from '../components/WishlistItem';

const Wishlist = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const res = await fetch(`/api/wishlist/${currentUser._id}`);
        const data = await res.json();
        setWishlist(data.listings || []);
      } catch (error) {
        console.error('Error fetching wishlist:', error);
      }
    };

    fetchWishlist();
  }, [currentUser._id]);

  

  return (
    <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between p-4   ">
          <h1 className="text-center text-3xl font-bold my-2">Wishlist</h1>

         
        </div>

        <div className="flex justify-center  w-full">
          <div className="flex flex-wrap gap-4 ">
            {wishlist.map((listing) => (
              <WishlistItem
                listing={listing}
                key={listing._id}
                setWishlist={setWishlist}
              />
            ))}
          </div>
        </div>
      </div>
    // <div>
    //   <h1>Wishlist</h1>
    //   <ul>
    //     {wishlist.map((listing) => (
    //       <li key={listing._id}>
    //         <h2>{listing.name}</h2>
    //         <p>{listing.description}</p>
    //         <button onClick={() => removeFromWishlist(listing._id)}>Remove</button>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default Wishlist;
