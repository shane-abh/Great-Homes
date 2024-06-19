import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import ListingItem from '../components/ListingItem';
import UserListingItem from '../components/UserListingItem';

const UserLisitings = () => {
    const [formData, setFormData] = useState({});
    const [updateSuccess, setUpdateSuccess] = useState(false);
    const { currentUser, loading, error } = useSelector((state) => state.user);
    const [showListingsError, setShowListingsError] = useState(false);
    const [userListings, setUserListings] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleShowListings = async () => {
        try {
          setShowListingsError(false);
          const res = await fetch(`/api/user/listings/${currentUser._id}`);
          const data = await res.json();
          if (data.success === false) {
            setShowListingsError(true);
            return;
          }
          setUserListings(data);
        } catch (error) {
          setShowListingsError(true);
        }
      };
    
    //   const handleListingDelete = async (listingId) => {
    //     try {
    //       const res = await fetch(`/api/listing/delete/${listingId}`, {
    //         method: "DELETE",
    //       });
    //       const data = await res.json();
    //       if (data.success === false) {
    //         console.log(data.message);
    //         return;
    //       }
    
    //       setUserListings((prev) =>
    //         prev.filter((listing) => listing._id !== listingId)
    //       );
    //     } catch (error) {
    //       console.log(error.message);
    //     }
    //   };

      useEffect(()=> {
        handleShowListings()
      },[])
     
  return (
    <>
    <div className='max-w-screen-xl mx-auto'>

    
    <div className='flex justify-between p-4   '>

    <h1 className='text-center text-3xl font-bold my-2'>My Listings</h1>
    
    <Link
            className="bg-primary text-white p-4 rounded-lg"
            to={"/create-listing"}
          >
            Create Listing
          </Link>
    </div>
   
    <div className='flex justify-center  w-full'>
          {/* {userListings && userListings.length > 0 && (
        <div className="flex flex-col gap-4">
          <h1 className="text-center mt-7 text-2xl font-semibold">
            Your Listings
          </h1>
          {userListings.map((listing) => (
            <div
              key={listing._id}
              className="border rounded-lg p-3 flex justify-between items-center gap-4"
            >
              <Link to={`/listing/${listing._id}`}>
                <img
                  src={listing.imageUrls[0]}
                  alt="listing cover"
                  className="h-16 w-16 object-contain"
                />
              </Link>
              <Link
                className="text-slate-700 font-semibold  hover:underline truncate flex-1"
                to={`/listing/${listing._id}`}
              >
                <p>{listing.name}</p>
              </Link>
              <div className="flex flex-col item-center">
                <button
                  onClick={() => handleListingDelete(listing._id)}
                  className="text-red-700 uppercase"
                >
                  Delete
                </button>
                <Link to={`/update-listing/${listing._id}`}>
                  <button className="text-green-700 uppercase">Edit</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )} */}

<div className='flex flex-wrap gap-4'>
              {userListings.map((listing) => (
                <UserListingItem listing={listing} key={listing._id} setUserListings={setUserListings} />
              ))}
            </div>
    </div>
    </div>
  </>
  )
}

export default UserLisitings