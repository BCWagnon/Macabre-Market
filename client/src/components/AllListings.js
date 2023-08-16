import React from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';
import Cabinet from '../Images/Cabinet.jpg';
import '../styles.css'

const AllListings = (props) => {

    const{ removeFromDom, listing, setListing } = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/listing')

        .then((res) => {
            setListing(res.data);
        })

        .catch((err)=>{
            console.log(err);
        })
    }, [])

    const deleteListing = (listingId) => {
        axios.delete('http://localhost:8000/api/listing/' + listingId)
        .then(res => {
            removeFromDom(listingId)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className='Listings_Container'>
            {
                listing?.map((listing, index)=>{
                return (
                    <div className="Listing_Display" key={index}> 
                        <img src={Cabinet} className="Cabinet_Image"/>
                        <Link to={"/listing/" + listing._id}>{listing.itemName}</Link>
                        <Link to={"/listing/edit/" + listing._id}>Edit</Link>
                        <button onClick={(e)=>{deleteListing(listing._id)}}>Delete</button>
                    </div> 
                )})
            }
        </div>
    );
}
export default AllListings;