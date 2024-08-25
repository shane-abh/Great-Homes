import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import ListingItem from "../components/ListingItem";
import hero from "../assets/hero.jpg";
import Search from "../components/Search";
import {
	OFFER_LISTINGS,
	RENT_LISTING,
	SALES_LISTINGS,
} from "../util/constants";

const Home = () => {
	const [offerListings, setOfferListings] = useState([]);
	const [saleListings, setSaleListings] = useState([]);
	const [rentListings, setRentListings] = useState([]);

	SwiperCore.use([Navigation]);

	useEffect(() => {
		const fetchOfferListings = async () => {
			try {
				const res = await fetch(OFFER_LISTINGS);
				const data = await res.json();
				setOfferListings(data);
				fetchRentListings();
			} catch (error) {
				console.error(error);
			}
		};
		const fetchRentListings = async () => {
			try {
				const res = await fetch(RENT_LISTING);
				const data = await res.json();
				setRentListings(data);
				fetchSaleListings();
			} catch (error) {
				console.error(error);
			}
		};

		const fetchSaleListings = async () => {
			try {
				const res = await fetch(SALES_LISTINGS);
				const data = await res.json();
				setSaleListings(data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchOfferListings();
	}, []);
	return (
		<div>
			{/* top */}
			<div
				className="relative z-0 bg-cover bg-center  inset-0 min-h-[90vh]"
				style={{
					backgroundImage: `url(${hero})`,
					zIndex: 0,
					backgroundColor: "black",
				}}
			>
				<div className="absolute inset-0 bg-primary/20 rounded-sm"></div>
				<div className="w-full px-2 flex flex-col gap-6 absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 max-w-6xl mx-auto z-10 text-gray-600 bg-black/0">
					<h1 className="text-4xl text-white mb-2 lg:text-6xl text-center font-serif">
						Find Your Dream
						<br />
						Home Here
					</h1>
					<div className="text-xs sm:text-sm z-10 items-center justify-center outline-none">
						<Search />
					</div>
				</div>
			</div>

			<div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
				{offerListings && offerListings.length > 0 && (
					<div className="recent-offers">
						<div className="my-3">
							<h2 className="text-2xl font-semibold text-slate-600">
								Recent offers
							</h2>
							<Link
								className="text-sm text-blue-800 hover:underline"
								to={"/search?offer=true"}
							>
								Show more offers
							</Link>
						</div>
						<div className="flex flex-wrap gap-4">
							{offerListings.map((listing) => (
								<ListingItem
									listing={listing}
									key={listing._id}
								/>
							))}
						</div>
					</div>
				)}
				{rentListings && rentListings.length > 0 && (
					<div className="">
						<div className="my-3">
							<h2 className="text-2xl font-semibold text-slate-600 dark:text-white">
								Recent places for rent
							</h2>
							<Link
								className="text-sm text-blue-800 hover:underline dark:text-secondary"
								to={"/search?type=Rent"}
							>
								Show more places for rent
							</Link>
						</div>
						<div className="flex flex-wrap justify-between">
							{rentListings.map((listing) => (
								<ListingItem
									listing={listing}
									key={listing._id}
								/>
							))}
						</div>
					</div>
				)}
				{saleListings && saleListings.length > 0 && (
					<div className="">
						<div className="my-3">
							<h2 className="text-2xl font-semibold text-slate-600 dark:text-white">
								Recent places for sale
							</h2>
							<Link
								className="text-sm text-blue-800 hover:underline dark:text-secondary"
								to={"/search?type=Sale"}
							>
								Show more places for sale
							</Link>
						</div>
						<div className="flex flex-wrap justify-between">
							{saleListings.map((listing) => (
								<ListingItem
									listing={listing}
									key={listing._id}
								/>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Home;
