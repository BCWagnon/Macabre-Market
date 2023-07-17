import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const Update = (props) => {

    const { id } = useParams();
    const [itemName, setItemName] = useState();
    const [itemPrice, setItemPrice] = useState();
    const [itemDesc, setItemDesc] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/listing/' + id)
        .then(res => {
            setItemName(res.data.itemName);
            setItemPrice(res.data.itemPrice);
            setItemDesc(res.data.itemDesc);
        })
        .catch(err => console.log(err))
    }, [])

    const updateListing = (e) => {
        e.preventDefault();
        axios.patch('http://localhost:8000/api/listing/' + id, {
            itemName,    
            itemPrice,
            itemDesc,
        })
        .then(res => {navigate("/"); 
        })
        .catch(err => console.log(err))
    }
    return(
        <div className="Form_Div">
            <form className="Form" onSubmit = { updateListing }>
                <h1>Update Listing</h1>

                <p>
                <label>Item Name:</label>
                <input type="text" name = "itemName" value = { itemName } onChange = {(e)=>setItemName(e.target.value)}/>
                </p>

                <p>
                    <label>Price:</label>
                    <input type="number" name = "itemPrice" value = { itemPrice } onChange = {(e)=>setItemPrice(e.target.value)}/>
                </p>

                <p>
                    <label>Description:</label>
                    <input type="text" name = "itemDesc" value = { itemDesc } onChange = {(e)=>setItemDesc(e.target.value)}/>
                </p>
                
                <input type="submit" />
            </form>
        </div>
    )

}

export default Update;