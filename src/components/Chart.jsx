import React from 'react'
import Card from 'react-bootstrap/Card';

const Chart = ({ data }) => {


    console.log(data);
    if (!data?.weather) {
        return <h1 className="text-light" >Loading</h1>
    }
    return (

        <Card style={{ width: '40rem' }} className="chart mx-auto" >
            <Card.Body>
                <Card.Title className="mr-0">{data?.name}</Card.Title>
                <Card.Subtitle className="text-light my-5">
                    <h2 className="text-center">{data?.main?.temp}°C</h2>
                </Card.Subtitle>
                <Card.Text className="text-light d-flex justify-content-between">
                    <Card.Text>
                        <Card.Text>
                            {data?.wind?.speed} km/h
                        </Card.Text>
                        <Card.Text>
                            {data?.main?.humidity}
                        </Card.Text>
                    </Card.Text>
                    <Card.Text className="text-light ">
                        <img className="city-icon" src={`http://openweathermap.org/img/wn/${data?.weather[0]?.icon}.png`} alt={data.name} />
                    </Card.Text>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Chart