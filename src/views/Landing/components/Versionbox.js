import React, { useState, useEffect } from 'react'
import Vbox from "./Vbox.js";
import Vector from "../../../images/Vector.png";
import Vectorp from "../../../images/Vectorp.png";
import versiondata from "./versionjson";
import $ from 'jquery';

const Versionbox = () => {
  const [bxwidth,setBxwidth ] = useState(0) ;
  const [bigbxwidth,setBigbxwidth ] = useState(0) ;
  let counts =0;
  let totalcounts=Object.keys(versiondata).length;
  var travelledtillnow=0;
  useEffect(() => {
    const width =document.querySelector(".vbox").offsetWidth;
    const Bigwidth =document.querySelector(".versionboxouter").offsetWidth;
    setBxwidth(width);
    setBigbxwidth(Bigwidth);
    $( `.versionboxouter .vbox:nth-child(${counts+1})` ).css("opacity", 1);
  });
  function moveleft(){   
    if(counts<totalcounts-1){
      travelledtillnow = travelledtillnow - (bxwidth +20);
      document.querySelector(".versionboxouter").style.left = `${travelledtillnow}px`;
      counts++;
      setTimeout(function(){
        $( `.versionboxouter .vbox` ).css("opacity", 0.4);
        $( `.versionboxouter .vbox:nth-child(${counts+1})` ).css("opacity", 1);
      }, 620);
      
     
    }
  }
  function moveright(){
    console.log(travelledtillnow)

      
    if(counts>0){
      travelledtillnow = travelledtillnow + (bxwidth +20);
      document.querySelector(".versionboxouter").style.left = `${travelledtillnow}px`;
      counts--;
      $( `.versionboxouter .vbox` ).css("opacity", 0.4);
      $( `.versionboxouter .vbox:nth-child(${counts+1})` ).css("opacity", 1);
    }
  }
  return (
    <div id="versionbox">
      <div id="vh-parent">
        <div id="vh">Hugo Changelog</div>
        <div className="left-right">
          <button className="lf" id="lf-l" onClick={moveright}>
            <img src={Vectorp}></img>
          </button>
          <button className="lf" id="lf-r"  onClick={moveleft}>
            <img src={Vector}></img>
          </button>
        </div>
      </div>
      <div className="versionboxmainouter">
        <div className="versionboxouter">
          {
          versiondata.map((item) => (<>
            <Vbox
              date={item.date}
              version={item.version}
              added={item.details.added}
              changed={item.details.changed}
              fixed={item.details.fixed}
            />
            </>
          ))
          }
        </div>
      </div>
    </div>
  );
};

export default Versionbox;
