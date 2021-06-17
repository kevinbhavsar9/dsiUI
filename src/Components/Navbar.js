import React from "react";
import "./Navbar.css";
import mail from "../images/mail.png";
import Union from "../images/Union.png";
import shuffle from "../images/shuffle.png";
import btn from "../images/text_align_right.png";

function Navbar(props) {
  return (
    <div id="navbar">
      <div id="sub1">
        <h1>
          D<span id="Sspan">S</span>
          <span id="Ispan">I</span>
        </h1>
        <div id="label">
          <label id="one">DWIDASA</label>
          <label id="two">SAMSARA</label>
          <label id="three">INDONESIA</label>
        </div>
      </div>
      {/* <div id="sub2"> */}
      <div id="sub2">
        <div class="btn hw">Services</div>
        <div class="btn hw">Product</div>
        <div class="btn hw">Technology</div>
        <div class="btn hw">About</div>
        <div class="btn hw">Client</div>
        <div class="btn hw">Partner</div>
      </div>
      {/* </div> */}
      <div id="sub3">
        <img id="img1" class="btn" src={Union} alt="Union" />
        <img id="img2 " class="btn" src={mail} alt="mail" />
        <img id="img3" class="btn" src={shuffle} alt="shuffle" />
      </div>
      <img id="bat" class="btn" src={btn} />
    </div>
  );
}

export default Navbar;
