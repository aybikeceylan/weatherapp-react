import React from 'react'
import Card from 'react-bootstrap/Card';

const Chart = (weather) => {

    console.log(weather);
    if (!weather) {
        return <h1>Loading</h1>
    }
    return (

        <Card style={{ width: '40rem' }} className="mx-auto" >
            <Card.Body>
                <Card.Title className="mr-0">{weather?.name}</Card.Title>
                <Card.Subtitle className="text-muted my-5">
                    <h2 className="text-center">{weather?.main.temp}°C</h2>
                </Card.Subtitle>
                <Card.Text className="text-muted d-flex justify-content-between">
                    <Card.Text>
                        <Card.Text>
                            {weather?.wind.speed} km/h
                        </Card.Text>
                        <Card.Text>
                            {weather?.main.humidity}
                        </Card.Text>
                    </Card.Text>
                    <Card.Text className="text-muted ">
                        <img className="city-icon" src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`} alt={weather.name} />
                    </Card.Text>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Chart