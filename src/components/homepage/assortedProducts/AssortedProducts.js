import React from "react";
import "./AssortedProducts.css";
import axios from "axios";
import { useEffect, useState } from "react";

function AssortedProducts() {
  const [assortedProduct, setAssortedProduct] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      // this is a object of arrays of 20
      let reqData = res.data;
      let randomNumber = 0;
      let image = " ";
      let title = " ";
      let price = " ";
      let mapFourItems = [];
      let x = 0;
      while (x < 4) {
        // find length of reqData
        // randomnumber length between reqData.length and 1
        randomNumber = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
        // -1 for index based
        image = reqData[randomNumber - 1].image;
        price = reqData[randomNumber - 1].price;
        title = reqData[randomNumber - 1].title;
        mapFourItems.push([title, price, image]);
        x++;
      }
      // console.log(mapFourItems);
      setAssortedProduct(mapFourItems);
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

  const rightArrowClick = () => {
    console.log(assortedProduct["0"]["0"]);
    let currentNumberArray = 0;
    return (
      <div>
        <h1>{assortedProduct["currentNumberArray"]["0"]}</h1>
        <img src={assortedProduct["currentNumberArray"]["2"]} />
        <h2>{assortedProduct["currentNumberArray"]["1"]}</h2>
      </div>
    );
  };

  return (
    <div id="assorted-images--container">
      <div className="container">
        <h1>hi</h1>
        {/* {console.log(assortedProduct[0]["0"])} */}
        {rightArrowClick}
        {/* <h1>{assortedProduct[0]["0"]}</h1>
        <img src={assortedProduct[0]["2"]} />
        <h2>{assortedProduct[0]["1"]}</h2> */}
        <button onClick={rightArrowClick}>RIGHT</button>
      </div>
    </div>
  );
}

export default AssortedProducts;
