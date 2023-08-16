import React, { useState } from 'react'
import axios from 'axios';
import AllListings from '../components/AllListings';
import banner from '../Images/Banner.png';

const Main = (props) => {
    
    const [listing, setListing] = useState([]);

    const removeFromDom = listingId => {
        setListing(listing.filter(listing => listing._id !== listingId))
    }
    
    return (
        <div className="Main_Container">
            <img className="Banner_Img" src={banner} alt="Banner"/>

            <h1 className="Listings_Title">All Listings</h1>
            <AllListings listing={listing} setListing={setListing} removeFromDom={removeFromDom}/>
        </div>
    )
}
export default Main;