import Main from "./components/Main";
import Header from "./components/Header";
import TurkeyMap from "./pages/TurkeyMap";
import ListOfCities from "./pages/ListOfCities";
import { useEffect, useState } from "react";
import axios from "axios";


function App() {
  const [weather, setWeather] = useState()
  const [city, setCity] = useState("Ankara")

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=98ee7a2b10fb4e81ffcc70e6a64d53c3&units=metric&lang=tr`

  const getWeather = async () => {
    try {
      const weatherData = await axios(url)
      console.log(weatherData.data);
      setWeather(weatherData.data)
      console.log(weather);


    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getWeather();

  }, [city]);

  console.log(weather)

  return (
    <div className="App">
      <Header />
      <Main weather={weather} />
      <TurkeyMap setCity={setCity} />
      <ListOfCities />
    </div>
  );
}

export default App;
