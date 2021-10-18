import React from "react";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
/*
Checklist 
1. Api request (promise so its async) (done)
2. newState => AllMensProducts =>  all products for mens (done)
3. Components (mens page):
  1. Title => mens clothing
  2. Results => Length of AllmensProducts
  3. Render Each items in a colum
  4. Filters => onClick => open new container showing 
    - Price (high to low) + (low to high)
    - title (alpahbetical)
    - Popular (assorted random items)
4. new Components => reusable => onClick => title or image => directs to items 
  - title 
  - Decription 
  - image
  - Colours 
  - Size
  - price 
  - Quantity 
  - Add to kart 


  Problems 
  -- keep loaging the axios reqeust 

  Current 
  Filter for clothing
    ---render Buttons statically 
    -- onClick => state Changes from default of filter 
    -- Change of State cause re-rednering of items 
    -- change based on change 
*/

function Men() {
  const [allProducts, setAllProducts] = useState([{}]);
  const [allMensProducts, setAllMensProducts] = useState([{}]);
  const [filters, setFilters] = useState("Random");
  const filtersButton = [
    "Random",
    "Decending Price",
    "Acending Price",
    "Alphabetically",
  ];
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      let item = res.data;
      setAllProducts(item);
      // get only mens products
      // res is an objects
      // check if item is mens clothing
      // console.log(item);
      const mensClothingArray = [];
      allProducts.map((product) => {
        if (product.category == "men's clothing") {
          mensClothingArray.push(product);
        }
      });
      setAllMensProducts(mensClothingArray);
    }, []);
  }, []);

  const rederAllMensProducts = allMensProducts.map((garment, index) => {
    return (
      <>
        <div className={garment.title}>
          <h1>{garment.title}</h1>
          <h2 className={garment.description}>{garment.description}</h2>
          <img src={garment.image} />
        </div>
      </>
    );
  });

  // const filter = filtersButton.map((button) => {
  //   return (
  //     <>
  //       <button className={button}>{button}</button>
  //     </>
  //   );
  // });
  const filterClick = (button) => {
    console.log(button);
  };
  return (
    <div>
      <Nav />
      <h3>This is show the current page path </h3>
      <h1>TiTLE</h1>
      <div id="filers--container">
        <div id="filters--options">
          {filtersButton.map((button) => {
            return (
              <>
                <button className={button} onChange={console.log(button)}>
                  {button}
                </button>
              </>
            );
          })}
        </div>
      </div>
      <h1>Products</h1>
      <h1>-----------</h1>
      {rederAllMensProducts}

      <Footer />
    </div>
  );
}

export default Men;
