import React from "react";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
function Men() {
  return (
    <div>
      <Nav />
      <h3>This is show the current page path </h3>
      <h1>TiTLE</h1>
      <div id="filers--container">
        <div id="filters--result">Results</div>
        <div id="filters--options">Size filter</div>
      </div>
      <h1>Products</h1>
      <Footer />
    </div>
  );
}

export default Men;
