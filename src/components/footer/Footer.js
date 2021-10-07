import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
function Footer() {
  let match = useRouteMatch();
  return (
    <div id="footer--container">
      <div id="mens">
        <Link to={`${match.url}/men`}>Mens</Link>
      </div>
      <div id="womans">
        <Link to={`${match.url}/woman`}>Womans</Link>
      </div>
      <div id="jewelery">
        <Link to={`${match.url}/jewelery`}>Jewelery</Link>
      </div>
      <div id="electronics">
        <Link to={`${match.url}/electronics`}>Electronics</Link>
      </div>
      <div id="memebership--container">
        <Link to={`${match.url}/membership`}>Membership</Link>
      </div>
      <div id="accessbility--container">
        <Link to={`${match.url}/accessbility`}>Accessbility</Link>
      </div>
      <div id="storelocator--container">
        <Link to={`${match.url}/store-locator`}>Store Locator</Link>
      </div>
      <div id="faq--container">
        <Link to={`${match.url}/faq`}>Faq</Link>
      </div>
      <div id="careers--container">
        <Link to={`${match.url}/careers`}>Careers</Link>
      </div>
      <div id="termOfUse--container">
        <Link to={`${match.url}/term-of-use`}>Term of Use</Link>
      </div>
      <div id="privacyPolicy--container">
        <Link to={`${match.url}/privacy-policy`}>Privacy Policy</Link>
      </div>
    </div>
  );
}

export default Footer;
