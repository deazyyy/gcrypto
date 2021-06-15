import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Background from "./components/Background";

import Landing from "./views/Landing";
import Dashboard from "./views/Dashboard";

import $ from "jquery";

class Application extends React.Component {
  render() {
    return (
      <div id="web">
        <Background />
        <div id="page1">
          <Landing />
        </div>
        <div id="page2">
          <Dashboard />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Application />, document.getElementById("root"));

function lauchApp() {
  $("#bckimg").css({ animation: "sliding 1s ease-in-out forwards" });
  $(".Logo").css({ opacity: "0" });
  $(".ctxt1-1").css({ opacity: "0" });
  $("#versionbox").css({ opacity: "0" });

  setTimeout(function () {
    $("#page1").css({ display: "none" });
    $("#page2").css({ display: "block" });
  }, 1001);

  setTimeout(launchApp2, 1200);
}

function launchApp2() {
  $("#cont").css({ animation: "contanim 1s ease-in-out forwards" });
  $("#mainpage").css({ animation: "mainpage 1s ease-in-out forwards" });
  $("#container").css({ animation: "containeranim 1s ease-in-out forwards" });
}

$("#launch-btn").click(lauchApp);

$(window).scroll(function () {
  var s = $(window).scrollTop();

  if (s >= 30) {
    $("#container").addClass("scroll-nav");
    $("#container2").addClass("scroll-nav");
  } else {
    $("#container").removeClass("scroll-nav");
    $("#container2").removeClass("scroll-nav");
  }
});
