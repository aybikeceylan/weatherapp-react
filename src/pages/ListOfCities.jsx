import React from "react";
import { useNavigate } from "react-router-dom";
import useTurkeyCities from "use-turkey-cities";

const ListOfCities = ({ setCurrent, current }) => {
    const { cities, city, setCity } = useTurkeyCities();
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        setCurrent(city)
        console.log(current)
        navigate(`/`)
    }

    return (
        <div className="list  mt-5">
            <form
                onSubmit={e => {
                    e.preventDefault();
                    setCity(city)
                }}
                className="d-flex justify-content-center"
            >
                <select
                    className="form-select w-50  mx-3"
                    onChange={e => {
                        setCity(e.target.value);
                    }}
                    value={city}
                >
                    {cities.map(city => (
                        <option value={city} key={`city-${city}`} >
                            {city}
                        </option>
                    ))}
                </select>

                <button className='btn btn-dark' type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
};

export default ListOfCities;