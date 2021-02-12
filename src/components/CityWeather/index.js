import React from "react";
import { Form,Button, Container} from "react-bootstrap";

const CityWeather=({city, setCity, obj2}) =>{

    console.log("weather",obj2);
    return (
        <>
        {
        !city ? (
            <p>data not found</p>
            )  : (
            <div>
            <h1>Weather of {city}</h1>
            <h1>temp:{obj2.main.temp}</h1>
            </div>
            )
        }
       
        </>
    );
    
};

export default CityWeather;
