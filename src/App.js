import logo from './logo.svg';
import React from "react";
import './App.css';
import CityInput from './components/CityInput';
import CityWeather from './components/CityWeather';

function App() {
  const [city, setCity]=React.useState("");
  const[obj2,setobj]=React.useState("");

  let obj;
  const fetchCityWeather=() =>{
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4c496af33d732297c30b641b3b235e47`
    )
    .then((res)=>res.json())
    .then(data => obj = data)
    .then(() =>{
          setobj(obj) 
          console.log()}
        )

  };

  return (
    <>
   <CityInput 
    city={city} 
    setCity={setCity}
    fetchCityWeather={fetchCityWeather}
   />

  <CityWeather 
    city={city} 
    obj2={obj2}
   />
   </>
  );
}

export default App;
