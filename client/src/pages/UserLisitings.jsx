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
};

export default UserLisitings;
