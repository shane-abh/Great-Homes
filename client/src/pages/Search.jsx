import { useEffect, useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ListingItem from "../components/ListingItem";

export default function Search() {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebardata, setSidebardata] = useState({
    searchTerm: "",
    type: "all",
    parking: false,
    furnished: false,
    laundry: false,
    kitchenEssentials: false,
    offer: false,
    sort: "created_at",
    order: "desc",
    minPrice: 0,
    maxPrice: Infinity,
    apartment: false,
    bungalow: false,
    condominium: false,
    house: false,
  });

  const [loading, setLoading] = useState(false);
  const [listings, setListings] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const parseUrlParams = useCallback(() => {
    const urlParams = new URLSearchParams(location.search);
    return {
      searchTerm: urlParams.get("searchTerm") || "",
      type: urlParams.get("type") || "all",

      parking: urlParams.get("parking") === "true",
      furnished: urlParams.get("furnished") === "true",
      laundry: urlParams.get("laundry") === "true",
      kitchenEssentials: urlParams.get("kitchenEssentials") === "true",
      offer: urlParams.get("offer") === "true",
      sort: urlParams.get("sort") || "created_at",
      order: urlParams.get("order") || "desc",
      minPrice: urlParams.get("minPrice") || 0,
      maxPrice: urlParams.get("maxPrice") || Infinity,
      apartment: urlParams.get("apartment") === "true",
      bungalow: urlParams.get("bungalow") === "true",
      condominium: urlParams.get("condominium") === "true",
      house: urlParams.get("house") === "true",
    };
  }, [location.search]);

  useEffect(() => {
    const updateSidebarData = () => {
      setSidebardata(parseUrlParams());
    };

    const fetchListings = async () => {
      setLoading(true);
      setShowMore(false);
      const searchQuery = new URLSearchParams(location.search).toString();
      const res = await fetch(`/api/listing/get?${searchQuery}`);
      const data = await res.json();
      setShowMore(data.length > 8);
      if (data.message != "No listings found") setListings(data);
      else setListings("No listings found");
      setLoading(false);
    };

    updateSidebarData();
    fetchListings();
  }, [location.search, parseUrlParams]);

  const handleChange = (e) => {
    const { id, value, checked, type } = e.target;
   
    if (type === "radio") {
      setSidebardata((prev) => ({
        ...prev,
        type: value,
      }));
    } else {
      setSidebardata((prev) => ({
        ...prev,
        [id]: type === "checkbox" ? checked : value,
      }));
    }
    
  };

 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const urlParams = new URLSearchParams();
    for (const key in sidebardata) {
      if (typeof sidebardata[key] === "boolean") {
        urlParams.set(key, sidebardata[key].toString());
      } else {
        urlParams.set(key, sidebardata[key]);
      }
    }
    
    navigate(`/search?${urlParams.toString()}`);
  };

  const onShowMoreClick = async () => {
    const numberOfListings = listings.length;
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("startIndex", numberOfListings);
    const res = await fetch(`/api/listing/get?${urlParams.toString()}`);
    const data = await res.json();
    setShowMore(data.length >= 9);
    setListings((prev) => [...prev, ...data]);
  };

  const renderRadioButton = (id, label) => (
    <div className="flex items-center gap-2" key={id}>
      <input
        type="radio"
        id={id}
        
        name="propertyType"
        className="w-5 checked:bg-primary bg-primary/50 "
        onChange={handleChange}
        value={id}
        checked={sidebardata.type === id}
      />
      <span>{label}</span>
    </div>
  );

  const renderCheckbox = (id, label) => (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        id={id}
        className="w-5 checked:bg-primary bg-primary/50"
        onChange={handleChange}
        checked={sidebardata[id]}
        
      />
      <span>{label}</span>
    </div>
  );

  const renderFormSection = (title, elements) => (
    <div>
      <label className="font-medium text-xl">{title}</label>
      <div className="flex flex-col gap-2 mt-4">{elements}</div>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row">
      <div className="p-7 border-b-2 md:border-r-2 md:min-h-screen">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          {renderFormSection("Search Term:", [
            <input
              key="searchTerm"
              type="text"
              id="searchTerm"
              placeholder="Search..."
              className="border rounded-lg p-3 w-full"
              value={sidebardata.searchTerm}
              onChange={handleChange}
            />,
          ])}
          {renderFormSection("Property Type", [
           renderRadioButton("all", "All"),
           renderRadioButton("Rent", "Rent"),
           renderRadioButton("Sale", "Sale"),
          //  renderRadioButton("offer", "Offer"),
          ])}
          {renderFormSection("Style of Home", [
            renderCheckbox("apartment", "Apartment"),
            renderCheckbox("bungalow", "Bungalow"),
            renderCheckbox("condominium", "Condominium"),
            renderCheckbox("house", "House"),
          ])}

          {renderFormSection("Price", [
            <div key="minPrice">
              <label
                htmlFor="minPrice"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Min. Price
              </label>
              <input
                type="number"
                id="minPrice"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="0"
                value={sidebardata.minPrice}
                onChange={handleChange}
              />
            </div>,
            <div key="maxPrice">
              <label
                htmlFor="maxPrice"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Max. Price
              </label>
              <input
                type="number"
                id="maxPrice"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="100,000"
                value={sidebardata.maxPrice}
                onChange={handleChange}
              />
            </div>,
          ])}
          {renderFormSection("Amenities", [
            renderCheckbox("parking", "Parking"),
            renderCheckbox("furnished", "Furnished"),
            renderCheckbox("laundry", "Laundry"),
            renderCheckbox("kitchenEssentials", "Kitchen Essentials"),
          ])}
          <div className="flex flex-col">
            <label className="font-semibold">Sort:</label>
            <select
              onChange={handleChange}
              defaultValue="created_at_desc"
              id="sort_order"
              className="border rounded-lg p-3"
            >
              <option value="regularPrice_desc">Price high to low</option>
              <option value="regularPrice_asc">Price low to high</option>
              <option value="createdAt_desc">Latest</option>
              <option value="createdAt_asc">Oldest</option>
            </select>
          </div>
          <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95">
            Search
          </button>
        </form>
      </div>
      <div className="flex-1">
        <h1 className="text-3xl font-semibold border-b p-3 text-slate-700 mt-5">
          Listing results:
        </h1>
        <div className="p-7 flex flex-wrap justify-between">
          {!loading && listings.length === 0 && (
            <p className="text-xl text-slate-700">No listing found!</p>
          )}
          {loading && (
            <p className="text-xl text-slate-700 text-center w-full">
              Loading...
            </p>
          )}
          {listings == "No listings found"
            ? 'No results found related to " ' + sidebardata.searchTerm + ' "'
            : !loading &&
              listings.map((listing) => (
                <ListingItem key={listing._id} listing={listing} />
              ))}
          {showMore && (
            <button
              onClick={onShowMoreClick}
              className="text-green-700 hover:underline p-7 text-center w-full"
            >
              Show more
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
