const Listing = require('../models/listing.model');  

module.exports.createListing = (request, response) => {
    Listing.create(request.body) 
        .then(listing => response.json(listing))
        
        .catch(err => response.json(err));
}

module.exports.getAllListings = (request, response) => {
    Listing.find({})
        .then(listings => response.json(listings))

        .catch(err => response.json(err))
}

module.exports.deleteListing = (request, response) => {
    Listing.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))

        .catch(err => response.json(err))
}

module.exports.getListing = (request, response) => {
    Listing.findOne({_id:request.params.id})
        .then(listing => response.json(listing))
        .catch(err => response.json(err));
}


module.exports.updateListing = (request, response) => {
    Listing.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedlisting => response.json(updatedlisting))

        .catch(err => response.json(err))
}

