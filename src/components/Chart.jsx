import React from 'react'
import Card from 'react-bootstrap/Card';

const Chart = () => {
    return (
        <Card style={{ width: '40rem' }} className="mx-auto">
            <Card.Body >
                <Card.Title className="mr-0">Ankara</Card.Title>
                <Card.Subtitle className="text-muted my-5">
                    <h2 className="text-center">17.77°C</h2>
                    <p className="text-center">açık</p>
                </Card.Subtitle>
                <Card.Text className="text-muted d-flex justify-content-between">
                    <Card.Text>
                        <Card.Text>
                            2.06 km/h
                        </Card.Text>
                        <Card.Text>
                            40 %
                        </Card.Text>
                    </Card.Text>
                    <Card.Text className="text-muted ">
                        açık
                    </Card.Text>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Chart