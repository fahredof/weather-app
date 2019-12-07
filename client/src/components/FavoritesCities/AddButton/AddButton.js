import React from "react";
import "./AddButton.css";
import addButton from "./svg/addButton.svg";

const AddButton = ({onClickAddButton}) => {
    return (
        <div id={"addButton"}>
            <img src={addButton} alt="icon" onClick={onClickAddButton}/>
        </div>
    );
};

export default AddButton;