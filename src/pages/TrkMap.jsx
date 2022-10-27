import React, { useState } from 'react'
import TurkeyMap from 'turkey-map-react';
import { useNavigate } from "react-router-dom";



const TrkMap = ({ setCurrent, current }) => {
    const [title, setTitle] = useState("")
    const navigate = useNavigate()

    const handleClick = () => {
        setCurrent(title.split("-")[1])
        console.log(current);
        navigate(`/`)
    }


    return (
        <div>

            <div><h3 className='text-center text-light mt-3'>{title}</h3></div>
            <TurkeyMap
                hoverable={true}
                customStyle={{ idleColor: "#dc3522", hoverColor: "#eeee" }}
                onHover={({ plateNumber, name }) => setTitle(plateNumber + "-" + name)}
                onClick={handleClick}
            />

        </div>
    )
}

export default TrkMap