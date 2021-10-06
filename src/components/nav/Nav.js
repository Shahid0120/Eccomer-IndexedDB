import React from "react";
import "./Nav.css";
import { useHistory } from "react-router-dom";
import searchImage from "./ImagesNav/searchbar.png";
import Menu from "./ImagesNav/menuhamburg.png";
import Cart from "./ImagesNav/Cart.png";
import LogoImage from "./ImagesNav/LogoPlaceholder.svg";

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
    // for the search bar
    // when in phone vw clicks causing does a blur effect and show popular search terms with aniamation
  };

  const hamburgMenuClick = () => {
    console.log("user clicked on menu");
  };

  return (
    // make onclick for logo
    // make onclick for search bar open search bar
    // menuitem
    <div id="nav">
      <div id="logo">
        <img id="logo--image" src={LogoImage} alt="logo" onClick={logoClick} />
      </div>
      <div id="nav-items">
        <img id="cart" src={Cart} alt="kart" onClick={cartClick} />
        <img
          id="search--bar"
          src={searchImage}
          alt="searchBar"
          onClick={searchBarClick}
        />
        <img
          id="hamburg-menu"
          src={Menu}
          alt="menu"
          onClick={hamburgMenuClick}
        />
      </div>
    </div>
  );
}

export default Nav;
