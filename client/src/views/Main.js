import React, { useState } from 'react'
import axios from 'axios';
import AllListings from '../components/AllListings';

const Main = (props) => {
    
    const [listing, setListing] = useState([]);

    const removeFromDom = listingId => {
        setListing(listing.filter(listing => listing._id !== listingId))
    }
    
    return (
        <div>
            <AllListings listing={listing} setListing={setListing} removeFromDom={removeFromDom}/>
        </div>
    )
}
export default Main;