import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { useSelector } from "react-redux";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import {
  FaBath,
  FaBed,
  FaChair,
  FaMapMarkerAlt,
  FaParking,
  FaShare,
} from "react-icons/fa";
import { FcSalesPerformance } from "react-icons/fc";

import MortgageCalculator from "../components/MortgageCalculator";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ContactLandlord from "../components/ContactLandlord";
import WishlistButton from "../components/WishlistButton";

export const Listing = () => {
  SwiperCore.use([Navigation]);
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);

  const params = useParams();

  const { currentUser } = useSelector((state) => state.user);
  

  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/listing/get/${params.listingId}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setListing(data);
        setLoading(false);
        setError(false);
       
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchListing();
  }, [params.listingId]);

  return (
    <main>
      {loading && <p className="text-center my-7 text-2xl">Loading...</p>}
      {error && (
        <p className="text-center my-7 text-2xl">Something went wrong!</p>
      )}
      {listing && !loading && !error && (
        <div>
          <Swiper navigation>
            {listing.imageUrls.map((url) => (
              <SwiperSlide key={url}>
                <div
                  className="h-[550px]"
                  style={{
                    background: `url(${url}) center no-repeat`,
                    backgroundSize: "cover",
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="fixed top-[13%] right-[3%] z-10 border rounded-full w-12 h-12 flex justify-center items-center bg-slate-100 cursor-pointer">
            <FaShare
              className="text-slate-500"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                setCopied(true);
                setTimeout(() => {
                  setCopied(false);
                }, 2000);
              }}
            />
          </div>
          {copied && (
            <p className="fixed top-[23%] right-[5%] z-10 rounded-md bg-slate-100 p-2">
              Link copied!
            </p>
          )}

          <div className="max-w-screen-lg mx-auto p-4 ">
            <Tabs>
              <div className="dark:text-white">
                <TabList>
                  <Tab>Details</Tab>
                  { listing.type === "Sale" ? <Tab>Mortgage Calculator</Tab> : ""}
                </TabList>
              </div>

              <TabPanel>
                <div className="flex flex-col max-w-5xl mx-auto p-3 my-7 gap-4">
                  {/* Description and Contact Landlord */}
                  <div className="flex flex-col md:flex-row gap-4 h-full">
                    <div className="md:w-4/6 flex flex-col max-w-5xl px-3 md:gap-6">
                      <div className="bg-slate-50 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <p className="text-2xl font-semibold ">
                            {listing.name} - ${" "}
                            {listing.offer
                              ? listing.discountPrice.toLocaleString("en-US")
                              : listing.regularPrice.toLocaleString("en-US")}
                            {listing.type === "rent" && " / month"}
                          </p>
                          {currentUser ? (
                            <WishlistButton
                              listingId={listing._id}
                              userId={currentUser._id}
                            />
                          ) : (
                            ""
                          )}
                        </div>
                        <p className="flex items-center mt-6 gap-2 text-slate-600 text-sm">
                          <FaMapMarkerAlt className="text-green-700" />
                          {listing.address.street}, {listing.address.city},{" "}
                          {listing.address.province}
                        </p>
                      </div>

                      <div className="bg-slate-50 p-4 rounded-lg flex flex-col gap-4">
                        <div className="flex gap-2 items-center">
                          <FcSalesPerformance className="flex text-lg" />
                          <p className="w-full text-red-900 text-left font-bold rounded-md">
                            {listing.type === "Rent" ? "For Rent" : "For Sale"}
                          </p>
                          {listing.offer && (
                            <p className="bg-green-900 w-full max-w-[200px] text-white text-center p-1 rounded-md">
                              ${+listing.regularPrice - +listing.discountPrice}{" "}
                              OFF
                            </p>
                          )}
                        </div>
                        <p className="text-slate-800">
                          <span
                            className="font-semibold text-black"
                            id="description"
                          >
                            Description -{" "}
                          </span>
                          {listing.description}
                        </p>
                        <ul className="text-green-900 font-semibold text-sm flex flex-wrap items-center gap-4 sm:gap-6">
                          <li className="flex items-center gap-1 whitespace-nowrap ">
                            <FaBed className="text-lg" />
                            {listing.bedrooms > 1
                              ? `${listing.bedrooms} beds `
                              : `${listing.bedrooms} bed `}
                          </li>
                          <li className="flex items-center gap-1 whitespace-nowrap ">
                            <FaBath className="text-lg" />
                            {listing.bathrooms > 1
                              ? `${listing.bathrooms} baths `
                              : `${listing.bathrooms} bath `}
                          </li>
                          <li className="flex items-center gap-1 whitespace-nowrap ">
                            <FaParking className="text-lg" />
                            {listing.parking ? "Parking spot" : "No Parking"}
                          </li>
                          <li className="flex items-center gap-1 whitespace-nowrap ">
                            <FaChair className="text-lg" />
                            {listing.furnished ? "Furnished" : "Unfurnished"}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="md:w-2/6 ">
                      {currentUser ? (
                        <ContactLandlord listingDetails={listing} />
                      ) : (
                        <div className="p-4 shadow-lg rounded-md bg-slate-50 flex flex-col justify-between  ">
                          <p className="text-center">
                            Sign up to contact landlord
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="max-w-5xl mx-auto my-7">
                  <MortgageCalculator purchasePrice={listing.regularPrice} />
                  {/* <AmoritizationChart /> */}
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      )}
    </main>
  );
};
