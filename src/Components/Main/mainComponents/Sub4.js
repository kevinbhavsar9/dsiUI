import React from "react";
import silverlight from "../../../images/silverstar.png";
import net from "../../../images/net.png";
import java from "../../../images/java.png";
import ios from "../../../images/ios.png";
import blackberry from "../../../images/blackberry.png";
import android from "../../../images/andriod.png";
import "./Sub4.css";

function Sub4(props) {
  return (
    <div id="Sub4">
      <div id="b1">
        <div id="b1son">
          <h1>
            D<span id="Sspan">S</span>
            <span id="Ispan">I</span>
          </h1>
          <div id="labal">
            <label id="onee">DWIDASA</label>
            <label id="tww">SAMSARA</label>
            <label id="thre">INDONESIA</label>
          </div>
        </div>

        <div id="b2">PT Dwidasa Samsara Indonesia</div>
        <div id="b3">
          Ruko Jalur Sutera 29A No. 53 Alam Sutera Serpong, Tangerang 15323
        </div>
      </div>

      <div id="c2">
        <h3>Contact</h3>
        <div>Phone : +62.21.5314.1135</div>
        <div>Fax : +62.21.5314.1135</div>
        <div>Email : community@dwidasa.com</div>
      </div>
      <div id="c3">
        <img class="c3img" src={silverlight} />
        <img class="c3img" src={net} />
        <img class="c3img" src={java} />
        <img class="c3img" src={ios} />
        <img class="c3img" src={android} />
        <img class="c3img" src={blackberry} />
      </div>
    </div>
  );
}

export default Sub4;
