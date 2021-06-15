import React from "react";
import logo from "../../../images/logo.png";
const Logo = () => {
  const logostyle = {
    fontSize: "13px",
    marginTop: "20px",
    color: "#c1ffd5",
    position: "absolute",
    left: "50%",
    transform: "translate(-50%, 0%)",
    transition: "1s all ease-out",
  };

  return (
    <div style={logostyle} className="Logo">
      <img src={logo} className="site-logo"></img>
    </div>
  );
};

export default Logo;
