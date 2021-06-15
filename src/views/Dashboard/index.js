import React from "react";
import "./style.scss";
import Header from "./components/Header";
import Headersmall from "./components/Headersmall";
import Sidemenu from "./components/Sidemenu";
// import Mainpage from './Mainpage';
import Mainpagev2 from "./components/Mainpagev2";

const Dashboard = () => {
  return (
    <>
      <Header dollar="135,916" />
      <Headersmall dollar="135,916" />
      <Sidemenu />
      <Mainpagev2
        tvl="135,916,013"
        deposit="4.567"
        utopiapending="4.567"
        utopiapendingdollars="13.69"
      />
    </>
  );
};

export default Dashboard;
