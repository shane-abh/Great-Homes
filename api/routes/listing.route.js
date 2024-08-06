import express from "express";
import {
  createListing,
  deleteListing,
  updateListing,
  getListing,
  getListings,
  getAll,
  getMortgageCalculations,
  contactLandlord,
} from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";


const router = express.Router();



router.post("/create", verifyToken, createListing);
router.delete("/delete/:id", verifyToken, deleteListing);
router.post("/update/:id", verifyToken, updateListing);
router.get("/get/:id", getListing);
router.get("/get", getListings);
router.get("/getAll", getAll);
router.post("/getMortgageCalculations", getMortgageCalculations);
router.post("/contactLandlord", contactLandlord);

export default router;
