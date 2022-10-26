import React from 'react'
import Btn from './Btn'
import Chart from './Chart'

const Main = ({ weather }) => {
    return (
        <div className="main ">
            <h1 className="title d-flex justify-content-center">Welcome</h1>
            <p className="title d-flex justify-content-center">Please Click Button For Other Cities' Weather Condition</p>
            <Btn />
            <Chart weather={weather} />
        </div>
    )
}

export default Main