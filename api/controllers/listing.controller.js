import Listing from "../models/lisitng.model.js";
import { errorHandler } from "../utils/error.js";
import { calculateAmortization } from "../utils/calculateAmortization.js";

export const createListing = async (req, res, next) => {
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return res.status(400).json({ errors: errors.array() });
  // }

  try {
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};


export const deleteListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);

  if (!listing) {
    return next(errorHandler(404, "Listing not found!"));
  }

  if (req.user.id !== listing.userRef) {
    return next(errorHandler(401, "You can only delete your own listings!"));
  }

  try {
    await Listing.findByIdAndDelete(req.params.id);
    res.status(200).json("Listing has been deleted!");
  } catch (error) {
    next(error);
  }
};

export const updateListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    return next(errorHandler(404, "Listing not found!"));
  }
  if (req.user.id !== listing.userRef) {
    return next(errorHandler(401, "You can only update your own listings!"));
  }

  try {
    const updatedListing = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedListing);
  } catch (error) {
    next(error);
  }
};

export const getListing = async (req, res, next) => {
  try {
    console.log(req.params);
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      return next(errorHandler(404, "Listing not found!"));
    }
    if (listing == []) {
      return next(errorHandler(204, "Empty Lisitngs"));
    }
    res.status(200).json(listing);
  } catch (error) {
    next(error);
  }
};

export const getListings = async (req, res, next) => {
  try {
    console.log(req.query);
    
    const limit = parseInt(req.query.limit) || 9;
    const startIndex = parseInt(req.query.startIndex) || 0;
    const searchTerm = req.query.searchTerm || "";
    const sort = req.query.sort || "createdAt";
    const order = req.query.order === "asc" ? 1 : -1;
    
    const parseBooleanFilter = (filter) => {
      if (filter === undefined || filter === "false") {
        return { $in: [false, true] };
      } else {
        return true;
      }
    };

    const offer = parseBooleanFilter(req.query.offer);
    const furnished = parseBooleanFilter(req.query.furnished);
    const parking = parseBooleanFilter(req.query.parking);
    const laundry = parseBooleanFilter(req.query.laundry);
    const kitchenEssentials = parseBooleanFilter(req.query.kitchenEssentials);

    let type = req.query.type;
    if (type === undefined || type === "all") {
      type = { $in: ["Sale", "Rent"] };
    }

    const minPrice = parseFloat(req.query.minPrice) || 0;
    const maxPrice = parseFloat(req.query.maxPrice) || Infinity;

    const homeStyles = ["Apartment", "Bungalow", "Condominium", "Villa"];
    const homeStyleFilters = homeStyles.reduce((acc, style) => {
      if (req.query[style] === "true") {
        acc.push(style.charAt(0).toUpperCase() + style.slice(1)); // Capitalize first letter
      }
      return acc;
    }, []);

    const query = {
      $or: [
        { name: { $regex: searchTerm, $options: "i" } },
        { "address.city": { $regex: searchTerm, $options: "i" } },
        { "address.street": { $regex: searchTerm, $options: "i" } },
        { "address.province": { $regex: searchTerm, $options: "i" } },
      ],
      offer,
      type,
      "amenities.furnished": furnished,
      "amenities.parking": parking,
      "amenities.laundry": laundry,
      "amenities.kitchenEssentials": kitchenEssentials,
      regularPrice: { $gte: minPrice, $lte: maxPrice }
    };

    if (homeStyleFilters.length > 0) {
      query.propertyType = { $in: homeStyleFilters };
    }

    const listings = await Listing.find(query)
      .sort({ [sort]: order })
      .limit(limit)
      .skip(startIndex);

    if (listings.length > 0) {
      return res.status(200).json(listings);
    } else {
      return res.status(404).json({ message: "No listings found" });
    }
  } catch (error) {
    next(error);
  }
};



export const getAll = async (req, res, next) => {
  const listings = await Listing.find();
  return res.status(200).json(listings);
};

export const getMortgageCalculations = async (req, res, next) => {
  const {
    purchasePrice,
    downPayment,
    
    annualInterestRate,
    loanTermYears,
    extraPayment,
    extraPaymentIntervalYears,
  } = req.body;

  let principal = purchasePrice - downPayment;
  let LTV = (principal / purchasePrice) * 100;

  let cmhcRate = getCMHCRate(LTV);
  // Calculate the CMHC insurance premium
  let cmhcPremium = principal * cmhcRate;

  // Add the CMHC insurance premium to the principal
  principal += cmhcPremium;

  console.log(cmhcRate, principal, LTV);
  const standardAmortization = calculateAmortization(
    parseInt(principal),
    parseFloat(annualInterestRate),
    parseInt(loanTermYears)
  );

  console.log(extraPayment);
  if (extraPayment) {
    let extraPaymentIntervalMonths = extraPaymentIntervalYears * 12;
    const acceleratedAmortization = calculateAmortization(
      principal,
      annualInterestRate,
      loanTermYears,
      parseFloat(extraPayment),
      parseInt(extraPaymentIntervalMonths)
    );

    // Calculate the difference in total interest paid
    const interestSaved = (
      standardAmortization.totalInterestPaid -
      acceleratedAmortization.totalInterestPaid
    ).toFixed(2);

    // Calculate the difference in time saved (in months)
    const timeSavedMonths =
      standardAmortization.monthsToPayoff -
      acceleratedAmortization.monthsToPayoff;

    return res.json({
      standardAmortization,
      acceleratedAmortization,
      interestSaved,
      timeSavedMonths,
      cmhcPremium,
      principal
    });
  }

  return res.json({ standardAmortization, cmhcPremium, LTV, principal });
};

const getCMHCRate = (LTV) => {
  if (LTV > 0 && LTV <= 65) return 0.006;
  else if (LTV > 65 && LTV <= 75) return 0.015;
  else if (LTV > 75 && LTV <= 80) return 0.024;
  else if (LTV > 80 && LTV <= 85) return 0.028;
  else if (LTV > 85 && LTV <= 90) return 0.031;
  else if (LTV > 90 && LTV <= 95) return 0.04;
  else return 0;
};
