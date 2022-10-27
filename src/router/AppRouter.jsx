import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import TrkMap from 'turkey-map-react'
import Header from '../components/Header'
import Main from '../components/Main'
import ListOfCities from '../pages/ListOfCities'

const AppRouter = ({ setCurrent, current, data }) => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Main data={data} />} />
                <Route path="/TurkeyMap" element={<TrkMap current={current} setCurrent={setCurrent} />} />
                <Route path="/ListOfCities" element={<ListOfCities current={current} setCurrent={setCurrent} />} />
            </Routes>
        </Router>
    )
}

export default AppRouter