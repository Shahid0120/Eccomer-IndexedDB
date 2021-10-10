import React from "react";
import "./AssortedProducts.css";
import axios from "axios";
// make setup a api request using axios
// print 4 images on this
// length is 20
// make 4 randon choices from the get request
axios.get("https://fakestoreapi.com/products").then((res) => {
  // this is a object of arrays of 20
  let reqData = res.data;
  let ImageSliderImages = [];
  let randomNumber = 0;
  let ImageSliderChoice = [];
  let data = " ";
  console.log(reqData);
  console.log(reqData[0].image);
  // Psudo Code
  // goal: get 4 random objects from reqData and display that
  // find length of reqData
  // geenrat rnadom index number based on lenght
  // then take objects from reqData and place into new array
  // display that array
  let x = 0;
  while (x < 4) {
    // find length of reqData
    // randomnumber length between reqData.length and 1
    randomNumber = Math.random() * (10 - 1) + 1;
    console.log(randomNumber);
    // randomNumber = 2;
    // data = reqData[randomNumber].image;
    // // -1 based on index
    // ImageSliderImages.push(data);
    // x++;
  }
  // console.log(ImageSliderImages);
});
function AssortedProducts() {
  return (
    <div id="assorted-images--container">
      <h1 id="assorted-images">Assorted Images</h1>
    </div>
  );
}

export default AssortedProducts;
