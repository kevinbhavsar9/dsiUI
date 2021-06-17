import React from "react";
import pana2 from "../../../images/pana2.png";
import "./Sub2.css";
function Sub2(props) {
  return (
    <div id="Sub2">
      <img src={pana2} />
      <div id="ert">
        <h1>
          Welcome to <span>Dwidasa Samsara Indonesia (DSI)</span>
        </h1>
        <article>
          Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the
          founders, who each of them has a common end objective to innovate new
          creations by making the most of the ever-growing information
          technology through DSI’s distinct front-end based application concept.
        </article>
        <article>
          Managed by a team of professional experts with extensive experience
          and impressive track records, DSI believes that continuous
          improvements and innovations assure your business to run effectively
          and efficiently.
        </article>
      </div>
    </div>
  );
}

export default Sub2;
