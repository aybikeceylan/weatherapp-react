import React from 'react'
import Card from 'react-bootstrap/Card';

const Chart = ({ weather }) => {
    return (

        <Card style={{ width: '40rem' }} className="mx-auto" >
            {weather?.map((index, item) => {
                console.log(item)
                return (
                    <Card.Body key={index}>
                        <Card.Title className="mr-0"></Card.Title>
                        <Card.Subtitle className="text-muted my-5">
                            <h2 className="text-center">°C</h2>
                        </Card.Subtitle>
                        <Card.Text className="text-muted d-flex justify-content-between">
                            <Card.Text>
                                <Card.Text>
                                    km/h
                                </Card.Text>
                                <Card.Text>

                                </Card.Text>
                            </Card.Text>
                            <Card.Text className="text-muted ">

                            </Card.Text>
                        </Card.Text>
                    </Card.Body>
                )
            })}

        </Card>
    )
}

export default Chart