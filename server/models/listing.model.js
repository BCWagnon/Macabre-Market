const mongoose = require('mongoose');

const ListingSchema = new mongoose.Schema({
    itemName: { 
        type: String, 
        required: [
            true,
            "Item name is required"
        ]
    },
    itemPrice: { 
        type: Number,
        required: [
            true,
            "Price is required"
        ]
    },
    itemDescription: { 
        type: String,
        required: [
            true,
            "Description is required"
        ]
    }
}, { timestamps: true });

module.exports = mongoose.model('Listing', ListingSchema);