import React, {useState, useEffect} from "react";
import "./FavoritesCities.css";

import InputText from "./InputText";
import AddButton from "./AddButton";
import ListOfCities from "./ListOfCities";

const FavoritesCities = ({id, cityData, getWeather, deleteCity}) => {
    const [inputText, setInputText] = useState("");
    const [condition, setCondition] = useState("Add");

    useEffect(() => {
        if (cityData && JSON.stringify(cityData) !== "{}")
            setCondition("List")
    }, [cityData]);

    const onClickAddButton = () => {
        setCondition("Input");
    };

    const onChangeInput = (event) => {
        setInputText(event.target.value);
    };

    const onClickAddCity = (event) => {
        event.preventDefault();
        setCondition("List");
        getWeather(id, inputText);
    };

    const onClickDelete = () => {
        deleteCity(id - 1);
        setCondition(" ");
    };

    const renderSwitch = () => {
        switch (condition) {
            case "Input":
                return (
                    <InputText
                        onChangeInput={onChangeInput}
                        inputText={inputText}
                        onClickAddCity={onClickAddCity}
                    />
                );
            case "List":
                return (
                    <ListOfCities
                        cityData={cityData}
                        onClickDelete={onClickDelete}
                    />
                );
            default :
                return (
                    <AddButton
                        onClickAddButton={onClickAddButton}
                    />
                );
        }
    };

    return (
        <div id={"city" + id} className="favCity">
            {renderSwitch()}
        </div>
    )
};

export default FavoritesCities;
