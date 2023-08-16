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
        <div className="Details">
            <p>Product Name : {listing.itemName}</p>
            <p>Price : ${listing.itemPrice}</p>
            <p>Description : {listing.itemDescription}</p>
        </div>
    )
}

export default Details