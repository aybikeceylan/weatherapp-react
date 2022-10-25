import React, { useState } from 'react'
import TurkeyMap from 'turkey-map-react';



const Turkeymap = () => {
    const [cityName, setCityName] = useState("")




    return (
        <div>
            <div><h3 className='text-center text-danger mt-3'>{cityName}</h3></div>
            <TurkeyMap
                hoverable={true}
                customStyle={{ idleColor: "#dc3522", hoverColor: "#eeee" }}
                onHover={({ plateNumber, name }) => setCityName(plateNumber + "-" + name)}
                onClick={({ plateNumber, name }) => console.log(plateNumber + " - " + name + " is just clicked!")}
            />

        </div>
    )
}

export default Turkeymap