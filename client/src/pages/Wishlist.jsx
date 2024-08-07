import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import WishlistItem from "../components/WishlistItem";

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
				console.error("Error fetching wishlist:", error);
			}
		};

		fetchWishlist();
	}, [currentUser._id]);

	return (
		<div className="max-w-screen-xl mx-auto">
			<div className="flex justify-between p-4">
				<h1 className="text-center text-3xl font-bold my-2">
					Wishlist
				</h1>
			</div>

			<div className="flex justify-start">
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
	);
};

export default Wishlist;
