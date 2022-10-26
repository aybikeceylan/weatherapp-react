import React, { useState } from 'react'
import TurkeyMap from 'turkey-map-react';



const Turkeymap = () => {
    const [cityName, setCityName] = useState("")

    // const handleClick = () => {
    //     setCity(cityName.split(" ")[1])
    // }


    return (
        <div>
            <div><h3 className='text-center text-danger mt-3'>{cityName}</h3></div>
            <TurkeyMap
                hoverable={true}
                customStyle={{ idleColor: "#dc3522", hoverColor: "#eeee" }}
                onHover={({ plateNumber, name }) => setCityName(plateNumber + "-" + name)}

            />

        </div>
    )
}

export default Turkeymap