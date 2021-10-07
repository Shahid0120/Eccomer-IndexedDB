import React from "react";
import AssortedProducts from "./assortedProducts/AssortedProducts";
import ProductSlider from "./productSlider/ProductSlider";
function HomeSlider() {
  return (
    <div>
      <AssortedProducts />
      <ProductSlider />
      <ProductSlider />
    </div>
  );
}

export default HomeSlider;
