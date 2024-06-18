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

router.post('/create', verifyToken,  [
    body('name').notEmpty().withMessage('Name is required').customSanitizer(stripTags),
    body('description').notEmpty().withMessage('Description is required').customSanitizer(stripTags),
    body('address').notEmpty().withMessage('Address is required').customSanitizer(stripTags),
    body('regularPrice').isNumeric().withMessage('Regular price must be a number'),
    body('discountPrice').isNumeric().withMessage('Discount price must be a number'),
    body('bathrooms').isInt({ min: 0 }).withMessage('Bathrooms must be a non-negative integer'),
    body('bedrooms').isInt({ min: 0 }).withMessage('Bedrooms must be a non-negative integer'),
    body('furnished').isBoolean().withMessage('Furnished must be a boolean value'),
    body('parking').isBoolean().withMessage('Parking must be a boolean value'),
    body('type').isIn(['sale', 'rent']).withMessage('Type must be either "sale" or "rent"'),
    body('offer').isBoolean().withMessage('Offer must be a boolean value'),
    body('imageUrls').isArray({ min: 1 }).withMessage('Image URLs must be an array with at least one URL'),
    body('userRef').notEmpty().withMessage('User reference is required').customSanitizer(stripTags),
  ], createListing);
router.delete('/delete/:id', verifyToken, deleteListing);
router.post('/update/:id', verifyToken, updateListing);
router.get('/get/:id', getListing);
router.get('/get', getListings);
router.get('/getAll', getAll);

export default router;