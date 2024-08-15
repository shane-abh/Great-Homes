<<<<<<< HEAD
import express from 'express';
import { createListing, deleteListing, updateListing, getListing, getListings, getAll, getMortgageCalculations } from '../controllers/listing.controller.js';
import { verifyToken } from '../utils/verifyUser.js';
import { body, validationResult } from 'express-validator';

const router = express.Router();

const stripTags = (input) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = input;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

router.post('/create', verifyToken,   createListing);
router.delete('/delete/:id', verifyToken, deleteListing);
router.post('/update/:id', verifyToken, updateListing);
router.get('/get/:id', getListing);
router.get('/get', getListings);
router.get('/getAll', getAll);
router.post('/getMortgageCalculations', getMortgageCalculations);


export default router;
=======
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
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
