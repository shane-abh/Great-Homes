import express from 'express';
import { createListing, deleteListing, updateListing, getListing, getListings, getAll } from '../controllers/listing.controller.js';
import { verifyToken } from '../utils/verifyUser.js';
import { body, validationResult } from 'express-validator';

const router = express.Router();

const stripTags = (input) => {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = input;
  return tempDiv.textContent || tempDiv.innerText || "";
};

router.post('/create', verifyToken, createListing);
router.delete('/delete/:id', verifyToken, deleteListing);
router.post('/update/:id', verifyToken, updateListing);
router.get('/get/:id', getListing);
router.get('/get', getListings);
router.get('/getAll', getAll);

export default router;