/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useNavigate } from "react-router-dom";


const Categories = ( props ) => {

    const navigate = useNavigate()
    const { json, name,path, setobj } = props

    const handleTab = (str) => {
        navigate(str)
    }

    return (
        <div className='category_bg'>
            <h1 id="coll_head">{name}</h1>
            <div id='collections'>
                {json.map((obj,i) => {
                    return (
                        <div id='image_div' className={`image_div${i+1}`} onClick={ (name !== 'Equipments') ? () =>{handleTab(`/${path}/${obj.path}`);setobj(obj)} : ''}>
                            <img src={obj.img} id={`img${i+1}`} />
                            <h2 id={`coll_name${i+1}`}>{obj.name}</h2>
                        </div>
                    )
                })}
            </div>
            <button id='coll_btn' onClick={() => handleTab('/')}>Back</button>
        </div>
    )
}

export default Categories
