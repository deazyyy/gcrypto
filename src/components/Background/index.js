import React from "react";
import ReactDOM from "react-dom";
import bg1 from "../../images/bg1.jpg";
import "./Background.css";

const Background = () => {
  return (
    <div id="backcontainer">
      <div id="blackoverlay"></div>
      <div id="bckimg">
        <img src={bg1} />
      </div>
    </div>
  );
};

export default Background;
