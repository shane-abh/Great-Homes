import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { USERLISTING_IMG } from "../util/constants";

export default function UserListingItem(listingDetails) {
	const { listing, setUserListings } = listingDetails;
	const handleListingDelete = async (listingId) => {
		try {
			const res = await fetch(`/api/listing/delete/${listingId}`, {
				method: "DELETE",
			});
			const data = await res.json();
			if (data.success === false) {
				console.log(data.message);
				return;
			}

			setUserListings((prev) =>
				prev.filter((listing) => listing._id !== listingId)
			);
		} catch (error) {
			console.log(error.message);
		}
	};
	return (
		<div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg m-2">
			<Link to={`/listing/${listing._id}`}>
				<img
					src={listing.imageUrls[0] || USERLISTING_IMG}
					alt="listing cover"
					className="h-[320px] sm:h-[220px] w-full object-cover hover:scale-105 transition-scale duration-300"
				/>
				<div className="p-3 flex flex-col gap-2 w-full">
					<p className="truncate text-lg font-semibold text-slate-700">
						$
						{listing.offer
							? listing.discountPrice.toLocaleString("en-US")
							: listing.regularPrice.toLocaleString("en-US")}
						{listing.type === "rent" && " / month"}
					</p>
					<div className="flex items-center gap-1">
						<MdLocationOn className="h-4 w-4 text-green-700" />
						<p className="text-sm text-gray-600 truncate w-full">
							{listing.address.street}
						</p>
					</div>
					<p className="text-sm text-gray-600 line-clamp-2">
						{listing.description}
					</p>
					<p className="text-slate-500 mt-2 font-semibold ">
						{listing.name}
					</p>
					<div className="text-slate-700 flex gap-4">
						<div className="font-bold text-xs">
							{listing.bedrooms > 1
								? `${listing.bedrooms} beds `
								: `${listing.bedrooms} bed `}
						</div>
						<div className="font-bold text-xs">
							{listing.bathrooms > 1
								? `${listing.bathrooms} baths `
								: `${listing.bathrooms} bath `}
						</div>
					</div>
				</div>
			</Link>
			<div className="flex flex-col item-center">
				<button
					onClick={() => handleListingDelete(listing._id)}
					className="text-white uppercase bg-red-700 rounded-md mx-4 my-2 p-2"
				>
					Delete
				</button>
				<Link
					to={`/update-listing/${listing._id}`}
					className="text-white text-center  bg-green-700 rounded-md mx-4 p-2 mb-4"
				>
					<button className=" uppercase">Edit</button>
				</Link>
			</div>
		</div>
	);
}
