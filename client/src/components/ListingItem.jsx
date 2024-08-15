import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
<<<<<<< HEAD
import {
  FaBath,
  FaBed,
  FaChair,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaParking,
  FaShare,
} from "react-icons/fa";

export default function ListingItem({ listing }) {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px] ">
      <Link to={`/listing/${listing._id}`}>
        <img
          src={
            listing.imageUrls[0] ||
            "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg"
          }
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
              {listing.address.street}, {listing.address.city}, {listing.address.province}
            </p>
          </div>
          <p className="text-sm text-gray-600 line-clamp-2">
            {listing.description}
          </p>
          
          <div className="text-slate-700 flex gap-12 py-4">
            <div className="font-bold text-xs flex gap-2">
              <FaBed className="text-lg" />
              {listing.bedrooms}
            </div>
            <div className="font-bold text-xs flex gap-2">
              <FaBath className="text-lg" />
              {listing.bathrooms}
            </div>
            <div className="font-bold text-xs flex gap-2">
              {listing.parking ? <FaParking className="text-lg" /> : ""}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
=======
import { FaBath, FaBed, FaParking } from "react-icons/fa";
import { LISTING_ITEM_IMG } from "../util/constants";

export default function ListingItem(listings) {
	const { listing } = listings;
	return (
		<div className="bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[270px] mb-6">
			<Link to={`/listing/${listing._id}`}>
				<img
					src={listing.imageUrls[0] || LISTING_ITEM_IMG}
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
							{listing.address.street}, {listing.address.city},{" "}
							{listing.address.province}
						</p>
					</div>
					<p className="text-sm text-gray-600 line-clamp-2">
						{listing.description}
					</p>

					<div className="text-slate-700 flex gap-4 py-4">
						<div className="font-bold text-xs flex gap-2">
							<FaBed className="text-lg" />
							{listing.bedrooms}
						</div>
						<div className="font-bold text-xs flex gap-2">
							<FaBath className="text-lg" />
							{listing.bathrooms}
						</div>
						<div className="font-bold text-xs flex gap-2">
							{listing.parking ? (
								<FaParking className="text-lg" />
							) : (
								""
							)}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
}
