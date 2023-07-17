const Controller = require('../controllers/listing.controller')
module.exports = (app) => {
    app.post('/api/listing', Controller.createListing)
    app.get('/api/listing', Controller.getAllListings)
    app.delete('/api/listing/:id', Controller.deleteListing)
    app.get('/api/listing/:id', Controller.getListing);
    app.patch('/api/listing/:id', Controller.updateListing);
}

