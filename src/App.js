import { useEffect, useState } from "react";
import axios from "axios";
import AppRouter from './router/AppRouter';


function App() {
  const [data, setData] = useState()
  const [current, setCurrent] = useState("Ankara")
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${current}&appid=98ee7a2b10fb4e81ffcc70e6a64d53c3&units=metric&lang=tr`
  const getWeather = async () => {
    try {
      console.log("here2")
      const data = await axios(url)
      console.log(data.data);
      setData(data.data)
      console.log(data);


    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getWeather();

  }, [current]);

  console.log(data)

  return (
    <div className="App">
      <AppRouter data={data} setCurrent={setCurrent} current={current} />

    </div>
  );
}

export default App;
