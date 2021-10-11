import React from "react";
import "./AssortedProducts.css";
import axios from "axios";
import { useEffect, useState } from "react";

function AssortedProducts() {
  const [assortedProduct, setAssortedProduct] = useState([]);
  const [data, setData] = useState([]);
  const [fiveProduct, setFiveProduct] = useState([]);
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      // this is a object of arrays of 20
      let reqData = res.data;
      setData(reqData);
      // gets 5 random items from data set
      // random number between 1 and 20 and takes only 5 products
      // not random rn
      const counterFiveProducts = 0;
      data.map((item) => {
        if (counterFiveProducts < 5) {
          setFiveProduct(item);
          counterFiveProducts++;
        }
      });
      console.log(fiveProduct);
    });
    // show one product
  }, []);

  // maps all the items
  // const showProducts = assortedProduct.map((product) => {
  //   return (
  //     <>
  //       <h1>{product[0]}</h1>
  //       <img src={product[2]} />
  //       <h2>{product[1]}</h2>
  //     </>
  //   );
  // });

  //   return (
  //     <div>
  //       {/* //   <h1>{product[0]}</h1>
  //     //   <img src={product[2]} />
  //     //   <h2>{product[1]}</h2> */}
  //       {console.log(element)}
  //     </div>
  //   );
  // });

  const showFirstItem = data.map((product, index) => {
    return (
      <div className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
        <h1>{product.title}</h1>
        <img id="assorted--image" src={product.image} />
        <h2>{product.price}</h2>
      </div>
    );
  });

  const nextProduct = () => {
    console.log("next product");
    if (slideIndex == 5) {
      setSlideIndex(1);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  const previousProduct = () => {
    console.log("previous product");
    if (slideIndex == 0) {
      setSlideIndex(5);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  // const buttonSlider = fiveProduct.map((product) => {
  //   console.log(product);
  // });

  return (
    <div id="assorted-images--container">
      <h1>hi</h1>
      <button onClick={nextProduct}>NEXT</button>
      <button onClick={previousProduct}>PREVIOUS</button>
      {/* {console.log(fiveProduct)} */}
      {showFirstItem}
    </div>
  );
}

export default AssortedProducts;
