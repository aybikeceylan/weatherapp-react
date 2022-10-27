import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Btn = () => {

    const navigate = useNavigate()
    return (
        <div className="m-2  d-flex justify-content-center">
            <Button size="lg" className=" btn m-1 w-15" onClick={() => navigate(`/TurkeyMap`)}>
                Turkey Map
            </Button>
            <Button size="lg" className=" btn m-1 w-15 " onClick={() => navigate(`/ListOfCities`)}>
                List of Cities
            </Button>
        </div>
    )
}

export default Btn