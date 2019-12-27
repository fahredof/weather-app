import React from "react"
import "./Details.css";

const Details = (props) => {

    const {mainCity} = props;
    const {wind, overcast, pressure, humidity, coordinates} = mainCity;

    return (
        <div className="det">
            <p>{wind}</p>
            <p>{overcast}</p>
            <p>{pressure}</p>
            <p>{humidity}</p>
            <p>{coordinates}</p>
        </div>
    );
};

export default Details;