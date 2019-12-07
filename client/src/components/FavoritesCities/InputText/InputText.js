import React from "react";
import "./InputText.css";

const InputText = ({onChangeInput, onClickAddCity, inputText}) => {
    return (
        <div id="input">
            <form>
                <input type="text" value={inputText} onChange={onChangeInput}/>
                <button type="submit" onClick={onClickAddCity}>Add</button>
            </form>
        </div>
    );
};

export default InputText;