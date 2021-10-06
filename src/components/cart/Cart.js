import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function Cart() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/cart"></Route>
        </Switch>
      </Router>
      <h2>This is the kart page!</h2>
    </div>
  );
}

export default Cart;
