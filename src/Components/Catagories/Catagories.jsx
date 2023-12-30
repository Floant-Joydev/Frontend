import React from "react";
import "./Catagories.css";
import { Link } from "react-router-dom";

const category = [
  {
    id: 1,
    name: "Plants",
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
    subCategory: ["Garden Tools", "Gurder Stones", "Soil & Fertilizer"],
  },
  {
    id: 5,
    name: "Subscription",
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

const Catagories = () => {
  return (
    <>
      <div className="catagories p1">
        <h2>Categories</h2>
        <div className="sets">
          {category &&
            category.map((ele, ind) => (
              <div className="set" key={ind}>
                <h4>{ele.name}</h4>
                <ul>
                    {ele.subCategory.slice(0,4).map((sub, index) => (
                        <Link to={`/products/${ele.name}/${sub}`} key={index}><li>{sub}</li></Link>
                    ))}
                </ul>
              </div>
            ))}
          <div className="set">
            <h4>Festivals</h4>
            <ul>
              <li>Holi</li>
              <li>Diwali</li>
              <li>Marigold</li>
              <li>Environment Day</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catagories;
