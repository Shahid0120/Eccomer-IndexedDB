import React from "react";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import axios from "axios";
import { useEffect, useState, useReducer } from "react";
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
    -- Change of State cause re-rednering of items 
    -- change based on change 
*/

function Men() {
  const [allProducts, setAllProducts] = useState([{}]);
  const [allMensProducts, setAllMensProducts] = useState([{}]);
  const [individualProduct, setIndividualProduct] = useState({});
  const [indexNumber, setIndexNumber] = useState(0);
  const [filters, setFilters] = useState("Random");
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);

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

  // if filters changes
  const renderAllMensProducts = allMensProducts.map((garment, index) => {
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

  const filterClick = (event) => {
    setFilters(event.target.innerText);
    forceUpdate();
  };

  const buttonFilterProducts = () => {
    // take current filters state
    // switch case
    // price assending
    // assorte products by price
    // change state of allMensProducts
    // price dessending
    // assort product by decending price
    // change state of allMensProducts
    // alphbetical
    //assort by alphabetical
    // change state of allMensProducts

    // how to change state of
    let newCurrentMensArrangementBasedOnFilter = [];
    let currentStateOfAllMensProducts = [...allMensProducts];
    let currentFilter = filters;

    switch (currentFilter) {
      case "Acending Price":
        //setAllMensProducts
        // new newCurrentMensArrangementBasedOnFilter push all mens products in order of price assending into the array
        while (
          newCurrentMensArrangementBasedOnFilter <=
          currentStateOfAllMensProducts.length
        ) {
          // find lowest price
          let currentLowestPrice = 100000;
          let indexCount = 0;
          currentStateOfAllMensProducts.map((mensProducts, index) => {
            // filer by price
            // finds lowest
            // find the lowest price
            if (mensProducts.price <= currentLowestPrice) {
              currentLowestPrice = mensProducts.price;
              setIndividualProduct(mensProducts);
              setIndexNumber(indexCount);
            }
            indexCount += 1;
          });
          newCurrentMensArrangementBasedOnFilter.push(individualProduct);
          currentStateOfAllMensProducts.splice(indexNumber, 1);
        }
        setAllMensProducts(newCurrentMensArrangementBasedOnFilter);
        break;
      case "Decending Price":
        break;
      case "Alphabetically":
        break;
      default:
        break;
    }
    return <>{renderAllMensProducts}</>;
  };

  return (
    <div>
      <Nav />
      <h3>This is show the current page path </h3>
      <h1>Title</h1>
      <div id="filers--container">
        <div id="filters--options">
          {filtersButton.map((button) => {
            return (
              <>
                <button className={button} onClick={filterClick}>
                  {button}
                </button>
              </>
            );
          })}
        </div>
      </div>
      <h1>Products</h1>
      <h1>-----------</h1>
      {filters === "Random" ? renderAllMensProducts : buttonFilterProducts}
      <Footer />
    </div>
  );
}

export default Men;
