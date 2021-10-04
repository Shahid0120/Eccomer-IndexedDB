import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
function Nav() {
  return (
    <React.Fragment>
      <div id="logo"></div>
      <div id="nav-items">
        <ShoppingCartIcon></ShoppingCartIcon>
      </div>
    </React.Fragment>
  );
}

export default Nav;
