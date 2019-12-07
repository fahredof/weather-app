import React from "react";
import "./DefaultWeather.css"
import {connect} from "react-redux";
import Spinner from "../Spinner"

const DefaultWeather = (props) => {
    const {mainCity} = props;
    const {city, image, temp} = mainCity;

    return (
        <div className="def" id="def">
            {city ?
                <div className="default">
                    <p className="city">{city}</p>
                    <p className="temp">{temp}</p>
                    <div className="image">
                        <img src={image} alt=""/>
                    </div>
                </div>

                : <Spinner/>
            }
        </div>
    )
};

const mapStateToProps = ({mainCity}) => {
    return {
        mainCity
    };
};

export default connect(mapStateToProps)(DefaultWeather);
