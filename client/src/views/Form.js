import React, { useState } from 'react'
import axios from 'axios';
import ListingForm from '../components/ListingForm';

const Form = (props) => {
    
    const [listing, setListing] = useState([]);
    
    return (
        <div className="Form_Container">
            <ListingForm listing={listing} setListing={setListing} />
        </div>
    )
}
export default Form;