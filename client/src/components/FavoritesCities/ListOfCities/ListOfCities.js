import React from "react";
import "./ListOfCities.css";
import Details from "../../Details/Details";
import crossButton from "./svg/crossButton.svg";
import Spinner from "../../Spinner";

const ListOfCities = ({cityData, onClickDelete}) => {
    const {
        city,
        temp,
        image,
        error
    } = cityData;

    return (
        JSON.stringify(cityData) !== "{}" ?
            !error ?
                <div id="list">
                    <div className="city">{city}</div>
                    <div className="temp">{temp}</div>
                    <div className="image">
                        <img src={image} alt=""/>
                    </div>
                    <div className="sp">
                        <Details mainCity={cityData}/>
                    </div>
                    <img src={crossButton} alt="" onClick={onClickDelete}/>
                </div>

                : <div id="list">
                    <div className="wind">{error}</div>
                    <div className="crossButton">
                        <img src={crossButton} alt="" onClick={onClickDelete}/>
                    </div>
                </div>
            : <Spinner/>
    );
};

export default ListOfCities;
