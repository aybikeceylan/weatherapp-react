import React, { useState } from 'react'
import TurkeyMap from 'turkey-map-react';



const Turkeymap = ({ setCity }) => {
    const [title, setTitle] = useState("")

    const handleClick = () => {
        setCity(title.split(" ")[1])
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

export default Turkeymap