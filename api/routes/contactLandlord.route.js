import { getContactedListings, markAsContacted } from "../controllers/contactLandlord.route.js";
import express from 'express';

const router = express.Router();

router.post('/contacted', markAsContacted);
router.get('/contacted/:userId', getContactedListings);

export default router;