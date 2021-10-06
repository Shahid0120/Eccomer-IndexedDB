import React from "react";
import Button from "@mui/material/Button";

function Nav() {
  return (
    <React.Fragment>
      <div id="logo">
        <Button variant="contained">Hello World</Button>
      </div>
      <div id="nav-items"></div>
    </React.Fragment>
  );
}

export default Nav;
