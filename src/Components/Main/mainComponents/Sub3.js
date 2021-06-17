import React from "react";
import "./Sub3.css";
import cogwheel from "../../../images/cogwheel.png";
import product from "../../../images/product.png";
import Service from "../../../images/Service.png";

function Sub3(props) {
  return (
    <div id="Sub3">
      <h1>Product and Service</h1>
      <div id="card-container">
        <div class="card">
          <img src={product} />
          <h2>Our Product</h2>
          <article>
            Our product is made on the base of our team’s careful research and
            analyses, ranging from internet based application.
          </article>
          <button class="btn pw">Read More</button>
        </div>
        <div class="card">
          <img src={Service} />
          <h2>Our Service</h2>
          <article>
            Our product is made on the base of our team’s careful research and
            analyses, ranging from internet based application.
          </article>
          <button class="btn pw">Read More</button>
        </div>
        <div class="card">
          <img src={cogwheel} />
          <h2>Our Technology</h2>
          <article>
            Our product is made on the base of our team’s careful research and
            analyses, ranging from internet based application.
          </article>
          <button class="btn pw">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Sub3;
<h1>Hello</h1>;
