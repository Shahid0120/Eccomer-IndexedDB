import * as React from "react";
import Nav from "./components/nav/Nav";
import HomeSlider from "./components/homepage/HomeSlider";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Electronics from "./components/electronics/Electronics";
import Woman from "./components/woman/Woman";
import Men from "./components/men/Men";
import Jewelery from "./components/jewelery/Jewelery";
import Membership from "./components/membership/Membership";
import Accessbility from "./components/accessbility/Accessbility";
import StoreLocator from "./components/storeLocator/StoreLocator";
import Faq from "./components/faq/Faq";
import Careers from "./components/carrers/Carrers";
import TermOfUse from "./components/termOfUse/TermOfUse";
import PrivacyPolicy from "./components/privacyPolicy/PrivacyPolicy";
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
        <Route path="/membership" component={Membership}></Route>
        <Route path="/store-locator" component={StoreLocator}></Route>
        <Route path="/faq" component={Faq}></Route>
        <Route path="/careers" component={Careers}></Route>
        <Route path="/term-of-use" component={TermOfUse}></Route>
        <Route path="/accessbility" component={Accessbility}></Route>
        <Route path="/privacy-policy" component={PrivacyPolicy}></Route>
      </Switch>
    </Router>
  );
}

export default App;
