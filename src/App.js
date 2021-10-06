import * as React from "react";
import Nav from "./components/nav/Nav";
import HomeSlider from "./components/homepage/slider/HomeSlider";
import Footer from "./components/footer-home/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Electronics from "./components/electronics/Electronics";
import Woman from "./components/woman/Woman";
import Men from "./components/men/Men";
import Jewelery from "./components/jewelery/Jewelery";
function App() {
  return (
    <Router>
      <Switch>
        <Route path={["/", "/home"]} exact>
          {/* this is all home section */}
          <Nav />
          <HomeSlider />
          <Footer />
        </Route>
        <Route path="/jewelery" componet={Jewelery}></Route>
        <Route path="/men" component={Men}></Route>
        <Route path="/woman" component={Woman}></Route>
        <Route path="/electronics" componet={Electronics}></Route>
        <Route path="/cart" component={Cart}></Route>
      </Switch>
    </Router>
  );
}

export default App;
