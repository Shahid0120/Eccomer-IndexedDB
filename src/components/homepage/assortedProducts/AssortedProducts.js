import React from "react";
import "./AssortedProducts.css";
import axios from "axios";
import { useEffect, useState } from "react";
// make setup a api request using axios
// print 4 images on this
// length is 20
// make 4 randon choices from the get request

function AssortedProducts() {
  const [assortedImages, setAssortedImages] = useState(" ");

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      // this is a object of arrays of 20
      let reqData = res.data;
      let randomNumber = 0;
      let data = " ";
      let x = 0;
      while (x < 4) {
        // find length of reqData
        // randomnumber length between reqData.length and 1
        randomNumber = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
        // -1 for index based
        data = reqData[randomNumber - 1].image;
        setAssortedImages(data);
        x++;
      }
    });
  }, []);

  // const showAssortedImages = assortedImages.map((img) => {
  //   return (
  //     <div>
  //       <img href={img} />
  //     </div>
  //   );
  // });

  return (
    <div id="assorted-images--container">
      <div className="container">
        <h1>hi</h1>
        {console.log(assortedImages)}
        <img src={assortedImages} />
        {/* {assortedImages.map((img) => {
          return <img href={img} />;
        })} */}
      </div>
    </div>
  );
}

export default AssortedProducts;
