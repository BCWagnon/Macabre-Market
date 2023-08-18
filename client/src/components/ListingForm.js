import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate} from "react-router-dom";
import '../styles.css'

const ListingForm= (props) => {
    
    const {listing, setListing} = props;
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [itemDesc, setItemDesc] = useState('');
    const [errors, setErrors] = useState([]);
    const [image, setImage] = useState('')
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/listing', {
            itemName,    
            itemPrice,
            itemDesc,
        })

        .then(res => {navigate("/"); 
        })
        .catch(err => {
            const errorResponse = err.response.data.errors;

            const errorArr = [];
            for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
        })
    }

    function convertToBase64(e){
        console.log(e.target.files);
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            console.log(reader.result);
            setImage(reader.result)
        };
        reader.oneerror = error => {
            console.log("Error:", error);
        };
    }

    return (
        <div className="Form_Div">
            <form className="Form" onSubmit={onSubmitHandler}>
            
            {errors.map((err, index) => (
                    <p key="{index}">{err}</p>
                ))}
                <p>
                    <h1>Create New Listing</h1>
                </p>
                <div> 
                    <input
                    accept='image/*'
                    type='file'
                    onChange={convertToBase64}
                    />
                    {image==''|| image==null?'': <img width={100} height={100} src={image}/>}
                </div>
                <div className="Form">
                    <p>
                        <label>Item Name: </label>
                        <input type="text" onChange = {(e)=>setItemName(e.target.value)} required/>
                    </p>

                    <p>
                        <label>Price: </label>
                        <input type="text" onChange = {(e)=>setItemPrice(e.target.value)} required/>
                    </p>

                    <p>
                        <label>Description: </label>
                        <input type="text" onChange = {(e)=>setItemDesc(e.target.value)} required/>
                    </p>
                </div>

                <input  onSubmit={(e)=>setListing({itemName,itemPrice, itemDesc})} type="submit"/>
            </form>
        </div>
    )
}
export default ListingForm;