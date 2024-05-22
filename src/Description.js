/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useNavigate } from "react-router-dom";


const Description = (props) => {

    const { obj, path } = props
    const navigate = useNavigate()

    console.log(obj);

    const handleTab = () =>{
        navigate(`/${path}`)
    }

    return (
       
        <div id="description">
            <img src={obj.img} id='des_img'/>
            <h2 id='des_name'>{obj.name}</h2>
            <ul id='des_ul'>{obj.description.map((obj) => {
                return(            
                    <li>{obj}</li>
                ) 
            })}</ul>
        <button id='des_btn' onClick={handleTab}>Back</button>
        </div>
           
    )
}

export default Description