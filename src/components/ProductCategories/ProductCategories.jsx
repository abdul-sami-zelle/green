"use client";
import React from "react";
import { useRouter } from "next/navigation";
import "./style.css";

const categories = [
  { name: "Today's Deals", image: "/assets/Images/category1.jpg" },
  { name: "Produce", image: "/assets/Images/category2.png" },
  { name: "Deli", image: "/assets/Images/category3.png" },
  { name: "Bread & Bakery", image: "/assets/Images/category4.png" },
  { name: "Dairy & Eggs", image: "/assets/Images/category5.png" },
  { name: "Meat & Seafood", image: "/assets/Images/category6.png" },
  { name: "Pantry", image: "/assets/Images/category7.png" },
  { name: "Beverages", image: "/assets/Images/category8.png" },
  { name: "Canned & Jarred Goods", image: "/assets/Images/category9.png" },
  { name: "Frozen", image: "/assets/Images/category10.png" },
  { name: "Snacks & Chips", image: "/assets/Images/category7.png" },
  { name: "Breakfast & Cereal", image: "/assets/Images/category4.png" },
  { name: "Condiments & Sauces", image: "/assets/Images/category9.png" },
  { name: "Pasta & Rice", image: "/assets/Images/category7.png" },
  { name: "Personal Care", image: "/assets/Images/category3.png" },
  { name: "Household Essentials", image: "/assets/Images/category1.jpg" },
  { name: "Baby Products", image: "/assets/Images/category5.png" },
  { name: "Pet Supplies", image: "/assets/Images/category6.png" },
  { name: "Organic Foods", image: "/assets/Images/category2.png" },
  { name: "Bakery Specials", image: "/assets/Images/category4.png" },
];

const ProductCategories = () => {
  const router = useRouter();

  const handleNavigate = (category) => {
    router.push(`/category`);
  };

  return (
    <div className="product-categories-main">
      <div className="product-categories-first">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="product-categories-second"
            onClick={() => handleNavigate(cat.name)}
            style={{ cursor: "pointer" }}
          >
            <div className="image-wrapper">
              <img src={cat.image} alt={cat.name} className="category-image" />
            </div>
            <div className="category-text-container">
              <span className="category-text">{cat.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
