import All_logo from "../../assets/icon/All.svg";
import Bundles_logo from "../../assets/icon/layer1.svg";
import Plants from "../../assets/icon/layer2.svg";

import { Link, useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import ProductCard from "../../Components/Product_card/Product_card";

import "./Products.css";
import Footer from "../../Components/Footer/Footer";
import { useSelector } from "react-redux";
import { selectAllProduct } from "../../features/product/ProductSlice";

const category = [
  {
    id: 1,
    name: "Plants",
    icon: Plants,
    subCategory: [
      "Indoor Plants",
      "Flowering Plants",
      "Air Purifing PLants",
      "Hanging Plants",
      "Low Maintainence Plants",
      "Oxygen Plants",
      "Lucky Plants",
      "Fruit Plants",
      "Bonsai Plants",
      "Cacti & Succulents",
      "Aromatic Plants",
      "Combo Plants",
    ],
  },
  {
    id: 2,
    name: "Seeds",
    icon: Bundles_logo,
    subCategory: [
      "Flower Seeds",
      "Vegetable Seeds",
      "Microgreen Seeds",
      "Fruit Seeds",
      "Herb Seeds",
      "Tree & Grass Seeds",
    ],
  },
  {
    id: 3,
    name: "Planters",
    icon: Bundles_logo,
    subCategory: [
      "Plastic Planters",
      "Ceramic Planters",
      "Plant Stands",
      "Seeding Tray",
    ],
  },
  {
    id: 4,
    name: "Plants Care",
    icon: Plants,
    subCategory: ["Garden Tools", "Gurder Stones", "Soil & Fertilizer"],
  },
  {
    id: 5,
    name: "Subscription",
    icon: Bundles_logo,
    subCategory: [
      "Marigold",
      "Rose",
      "Chamanthi",
      "Jasmine",
      "Lotus",
      "Mix Flowers",
    ],
  },
];

const Products = () => {
  const {product_group, product_type } = useParams();
  const Products = useSelector(selectAllProduct);

  // sorting the products acouding to category
  let allProduct = null;
  if( Products ){
    allProduct = Products.filter((obj) => obj.Category === product_group)
  }



  //Sorting Products by Product Type
  let sortedProduct = allProduct;

  if (allProduct && product_type !== "All") {
    sortedProduct = allProduct.filter(
      (obj) => obj.SubCategory === product_type
    );
  }

  return (
    <>
      <Navbar />

      <section className="products-top p1">
        <h3>
          Home <strong>{">"}</strong>
          <span>{product_group}</span>
        </h3>
        <h2>{product_type}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vero
          ea dolor pariatur iusto eum modi voluptatum, nesciunt sint, suscipit
          tempora impedit repellendus aliquam voluptatibus saepe maiores
          accusantium! Totam, illum. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Debitis rem corrupti voluptates odit quisquam rerum
          cupiditate nobis reprehenderit velit, quia facere impedit optio nam
          dolorem delectus, aspernatur porro voluptatum. Eaque?
        </p>
      </section>

      <section className="products-main p1">
        <div className="filter">
          <p>{allProduct && sortedProduct.length} Product Found</p>
          {/* <select name="" id="">
            <option value="">Sort By</option>
            <option value="">Sort By Price</option>
            <option value="">Sort By Item</option>
          </select> */}
        </div>
        <div className="body">
          <div className="left">
            <ul>
              <Link to={`/products/${product_group}/All`}>
                <li className={product_type === "All" ? "active" : ""}>
                  <div>
                    <img src={All_logo} alt="" />
                  </div>
                  <p style={{ color: "black", fontWeight: "600" }}>
                    All Product
                  </p>
                </li>
              </Link>
              {category.map((obj) =>
                
                (obj.name === product_group) && obj.subCategory.map((ele) => (
                  <Link to={`/products/${product_group}/${ele}`} key={ele.id}>
                    <li
                      className={product_type === ele ? "active" : ""}
                    >
                      <div>
                        <img src={obj.icon} alt="" />
                      </div>
                      <p style={{ color: "black", fontWeight: "600" }}>{ele}</p>
                    </li>
                  </Link>
                ))
              )}
            </ul>
          </div>
          <div className="right">
            {allProduct && sortedProduct.length === 0 && <p style={{color: "red", fontSize: "1.2rem"}}>No Items Found on this Category</p>}
            {sortedProduct && sortedProduct.map((ele) => (
              < ProductCard id={ele._id} salePrice={ele.SalePrice} discount={ele.PriceDiscountPercentage} rating={ele.Rating} price={ele.Price} image={ele.ProductImage1} name={ele.ProductName} category={ele.Category} clr="var(--main-green)" />
            ))}
          </div>
        </div>
      </section>

      <section className="products-content p1">
        <div>
          <h3>Plants for Sale: Enhance Your Space with Lush Greenery</h3>
          <p>
            Looking to add a touch of nature to your home or office? Our online
            nursery offers an impressive selection of plants for sale online.
            Whether you're a seasoned plant enthusiast or just starting your
            green journey, we have something for everyone.
          </p>
        </div>
        <div>
          <h3>Plants for Sale: Enhance Your Space with Lush Greenery</h3>
          <p>
            Looking to add a touch of nature to your home or office? Our online
            nursery offers an impressive selection of plants for sale online.
            Whether you're a seasoned plant enthusiast or just starting your
            green journey, we have something for everyone.
          </p>
        </div>
        <div>
          <h3>Plants for Sale: Enhance Your Space with Lush Greenery</h3>
          <p>
            Looking to add a touch of nature to your home or office? Our online
            nursery offers an impressive selection of plants for sale online.
            Whether you're a seasoned plant enthusiast or just starting your
            green journey, we have something for everyone.
          </p>
        </div>
        <div>
          <h3>Plants for Sale: Enhance Your Space with Lush Greenery</h3>
          <p>
            Looking to add a touch of nature to your home or office? Our online
            nursery offers an impressive selection of plants for sale online.
            Whether you're a seasoned plant enthusiast or just starting your
            green journey, we have something for everyone.
          </p>
        </div>
        <div>
          <h3>Plants for Sale: Enhance Your Space with Lush Greenery</h3>
          <p>
            Looking to add a touch of nature to your home or office? Our online
            nursery offers an impressive selection of plants for sale online.
            Whether you're a seasoned plant enthusiast or just starting your
            green journey, we have something for everyone.
          </p>
        </div>
        <div>
          <h3>Plants for Sale: Enhance Your Space with Lush Greenery</h3>
          <p>
            Looking to add a touch of nature to your home or office? Our online
            nursery offers an impressive selection of plants for sale online.
            Whether you're a seasoned plant enthusiast or just starting your
            green journey, we have something for everyone.
          </p>
        </div>
        <div>
          <h3>Plants for Sale: Enhance Your Space with Lush Greenery</h3>
          <p>
            Looking to add a touch of nature to your home or office? Our online
            nursery offers an impressive selection of plants for sale online.
            Whether you're a seasoned plant enthusiast or just starting your
            green journey, we have something for everyone.
          </p>
        </div>
        <div>
          <h3>Plants for Sale: Enhance Your Space with Lush Greenery</h3>
          <p>
            Looking to add a touch of nature to your home or office? Our online
            nursery offers an impressive selection of plants for sale online.
            Whether you're a seasoned plant enthusiast or just starting your
            green journey, we have something for everyone.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Products;
