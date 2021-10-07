import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
function Footer() {
  return (
    <div id="footer--container">
      <div id="mens">
        <Link to="/men">Mens</Link>
      </div>
      <div id="womans">
        <Link to="/woman">Womans</Link>
      </div>
      <div id="jewelery">
        <Link to="/jewelery">Jewelery</Link>
      </div>
      <div id="electronics">
        <Link to="electronics">Electronics</Link>
      </div>
      <div id="memebership--container">
        <Link to="membership">Membership</Link>
      </div>
      <div id="accessbility--container">
        <Link to="accessbility">Accessbility</Link>
      </div>
      <div id="storelocator--container">
        <Link to="store-locator">Store Locator</Link>
      </div>
      <div id="faq--container">
        <Link to="/faq">Faq</Link>
      </div>
      <div id="careers--container">
        <Link to="/careers">Careers</Link>
      </div>
      <div id="termOfUse--container">
        <Link to="/term-of-use">Term of Use</Link>
      </div>
      <div id="privacyPolicy--container">
        <Link to="/privacy-policy">Privacy Policy</Link>
      </div>
    </div>
  );
}

export default Footer;
