const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
    itemName: { type: String },
    itemPrice: { type: Number },
    itemDescription: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Listing', ListingSchema);