import ContactLandlordSchema from "../models/contactlandlord.model";

// Mark a listing as contacted
export const markAsContacted = async (req, res) => {
    const { userId, listingId } = req.body;
  
    try {
      // Find or create the interaction
      let interaction = await ContactLandlordSchema.findOne({ user: userId, listing: listingId });
  
      if (!interaction) {
        interaction = new ContactLandlordSchema({ user: userId, listing: listingId, contacted: true });
      } else {
        interaction.contacted = true;
      }
  
      await interaction.save();
  
      res.status(200).json({ success: true, message: 'Marked as contacted' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to mark as contacted', error });
    }
  };
  
  // Get all contacted listings for a user
  export const getContactedListings = async (req, res) => {
    const { userId } = req.params;
  
    try {
      const contactedListings = await ContactLandlordSchema.find({ user: userId, contacted: true }).populate('listing');
      res.status(200).json(contactedListings);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch contacted listings', error });
    }
  };