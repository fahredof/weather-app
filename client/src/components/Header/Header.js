import React from "react";
import "./Header.css";
import icon from "./svg/icon.svg"

const Header = (props) => {

  const onClick = (event) => {
    event.preventDefault();
    props.updateGeolocation();
  };

  return (
    <div className="header">
      <form onClick={onClick}>
        <img src={icon} alt="icon"/>
      </form>
    </div>
  );
};

export default Header;
