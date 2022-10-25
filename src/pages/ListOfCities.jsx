import React from "react";
import useTurkeyCities from "use-turkey-cities";

const ListOfCities = () => {
    const { cities, city, setCity } = useTurkeyCities();

    return (
        <div className="list bg-danger mx-auto">
            <form
                onSubmit={e => {
                    e.preventDefault();
                    console.log(city);
                }}
            >
                <select
                    className="form-select w-50"
                    onChange={e => {
                        setCity(e.target.value);
                    }}
                    value={city}
                >
                    {cities.map(city => (
                        <option key={`city-${city}`} value={city}>
                            {city}
                        </option>
                    ))}
                </select>

                <br />
                <button className='btn btn-dark' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ListOfCities;