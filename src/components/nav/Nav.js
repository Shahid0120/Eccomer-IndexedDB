import React from "react";
import "./Nav.css";
import { useHistory } from "react-router-dom";
function Nav() {
  // logo is click
  let history = useHistory();
  const logoClick = () => {
    console.log("user clicked on logo");
    history.push("/home");
  };

  const cartClick = () => {
    console.log("user clicked on cart");
    history.push("/cart");
  };

  const searchBarClick = () => {
    console.log("user clicked on searchbar");
  };

  const hamburgMenuClick = () => {
    console.log("user clicked on menu");
  };

  return (
    // make onclick for logo
    // make onclick for kart directs to kart
    // make onclick for search bar open search bar
    // menuitem
    <div id="nav">
      <div id="logo">
        <img
          src="/Users/shahidhussain/Documents/Eccomerce-IndexedDB/public/assest/images/logo/uniqlo-logo-vector.svg"
          alt="logo"
          onClick={logoClick}
        />
      </div>
      <div id="nav-items">
        <img
          id="cart"
          src="/Users/shahidhussain/Documents/Eccomerce-IndexedDB/public/assest/images/nav-utils/basket.png"
          alt="kart"
          onClick={cartClick}
        />
        <img
          id="search--bar"
          src="/Users/shahidhussain/Documents/Eccomerce-IndexedDB/public/assest/images/nav-utils/menuhamburg.png"
          alt="searchBar"
          onClick={searchBarClick}
        />
        <img
          id="hamburg-menu"
          src="/Users/shahidhussain/Documents/Eccomerce-IndexedDB/public/assest/images/nav-utils/menuhamburg.png/"
          alt="menu"
          onClick={hamburgMenuClick}
        />
      </div>
    </div>
  );
}

export default Nav;
