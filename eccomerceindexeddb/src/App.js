import * as React from "react";
import Nav from "./components/nav/Nav";
import HomeSlider from "./components/homepage/slider/HomeSlider";
import Footer from "./components/footer-home/Footer";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <HomeSlider />
      <Footer />
    </React.Fragment>
  );
}

export default App;
