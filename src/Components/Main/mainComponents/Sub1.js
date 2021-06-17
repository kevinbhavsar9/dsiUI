import React from "react";
import pana from "../../../images/pana.png";
import "./Sub1.css";

function Sub1(props) {
  return (
    <div id="Sub1">
      <div id="art">
        <h2>Making the most of the ever-growing </h2>
        <h2>
          <span>Information Technology</span>
        </h2>
        <article>
          Managed by a team of professional experts with extensive experience
          and impressive track records
        </article>
        <button class="btn pw" id="btnSub1">
          Read More
        </button>
      </div>

      <img id="pana" src={pana} />
    </div>
  );
}

export default Sub1;
