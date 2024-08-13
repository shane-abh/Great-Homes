<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ListingItem from "../components/ListingItem";
import UserListingItem from "../components/UserListingItem";

const UserLisitings = () => {
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [showListingsError, setShowListingsError] = useState(false);
  const [userListings, setUserListings] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShowListings = async () => {
    if (!currentUser) {
      navigate("/signin");
    }
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

  useEffect(() => {
    handleShowListings();
  }, []);

  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between p-4   ">
          <h1 className="text-center text-3xl font-bold my-2">My Listings</h1>

          <Link
            className="bg-primary text-white p-4 rounded-lg"
            to={"/create-listing"}
          >
            Create Listing
          </Link>
        </div>

        <div className="flex justify-center  w-full">
          <div className="flex flex-wrap gap-4 ">
            {userListings.map((listing) => (
              <UserListingItem
                listing={listing}
                key={listing._id}
                setUserListings={setUserListings}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
=======
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import UserListingItem from "../components/UserListingItem";

const UserLisitings = () => {
	const { currentUser } = useSelector((state) => state.user);

	const [userListings, setUserListings] = useState([]);

	const navigate = useNavigate();

	const handleShowListings = async () => {
		if (!currentUser) {
			navigate("/signin");
		}
		try {
			const res = await fetch(`/api/user/listings/${currentUser._id}`);
			const data = await res.json();
			if (data.success === false) {
				return;
			}
			setUserListings(data);
		} catch (error) {
			alert(error);
		}
	};

	useEffect(() => {
		handleShowListings();
	}, []);

	return (
		<>
			<div className="max-w-screen-xl mx-auto my-10">
				<div className="flex justify-between p-4   ">
					<h1 className="text-center text-3xl font-bold my-2">
						My Listings
					</h1>

					<Link
						className="bg-primary text-white p-4 rounded-lg"
						to={"/create-listing"}
					>
						Create Listing
					</Link>
				</div>

				<div className="flex justify-start">
					<div className="flex flex-wrap gap-4 ">
						{userListings.map((listing) => (
							<UserListingItem
								listing={listing}
								key={listing._id}
								setUserListings={setUserListings}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
};

export default UserLisitings;
