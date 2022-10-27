import React from 'react'
import Btn from './Btn'
import Chart from './Chart'

const Main = ({ data }) => {
    console.log(data)
    return (
        <div className="main ">
            <h1 className="title d-flex justify-content-center text-light">Welcome</h1>
            <p className="title d-flex justify-content-center text-light">Please Click Button For Other Cities' Weather Condition</p>
            <Btn />
            <Chart data={data} />
        </div>
    )
}

export default Main