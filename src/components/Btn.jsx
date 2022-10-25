import React from 'react'
import Button from 'react-bootstrap/Button';

const Btn = () => {
    return (
        <div className="m-2  d-flex justify-content-center">
            <Button variant="dark" size="lg" className="m-1 w-15">
                Turkey Map
            </Button>
            <Button variant="dark" size="lg" className="m-1 w-15">
                List of Cities
            </Button>
        </div>
    )
}

export default Btn