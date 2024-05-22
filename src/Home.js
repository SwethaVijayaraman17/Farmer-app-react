/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useNavigate } from "react-router-dom";
import { FarmingTypes,Equipments,Fertilizer } from './FarmingJson'



const Home = (props) => {

    const {setjson,setname,setpath} = props

    const navigate = useNavigate()

    const handleTab = (str,json,name) =>{
        navigate(`/${str}`)
        setjson(json)
       setname(name)
       setpath(str)
    }

    return (
        <div id="home">
            <div id='homeBg'>
                <img src={require('./images/Farmer.jpg')} />
                <h1>Adding Green to your life.<br />Bringing growth to agriculture.</h1>
            </div>

            <div id='categories'>
                <div id='farmingTypes' onClick={()=>handleTab('FarmingTypes',FarmingTypes,"Types of Farming")}>
                    <img src={require('./images/farming_type.jpg')} />
                    <h1>Types of Farming</h1>
                </div>

                <div id='fertilizer' onClick={()=>handleTab('Fertilizer',Fertilizer,"Fertilizer")}>
                    <img src={require('./images/fertilizer.jpg')} />
                    <h1>Fertilizer</h1>
                </div>

                <div id='equipments' onClick={()=>handleTab('Equipments',Equipments,"Equipments")}>
                    <img src={require('./images/equipment.jpg')} />
                    <h1>Farming Equipments</h1>
                </div>
            </div>

        </div>
    )
}

export default Home