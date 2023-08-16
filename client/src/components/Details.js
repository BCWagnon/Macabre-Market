import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams,} from 'react-router-dom';

const Details = (props) => {

    const [listing, setListing] = useState({});

    const {id} = useParams(); 

    useEffect(() => {
        axios.get("http://localhost:8000/api/listing/" + id)
            .then( res => {
                console.log(res.data);
                setListing(res.data);
            })
            .catch( err => console.log(err) );
    }, []);

    return (
        <div>
            <p>Product Name: {listing.listingName}</p>
            <p>Price: ${listing.listingPrice}</p>
            <p>Description: {listing.listingDescription}</p>
        </div>
    )
}

export default Details