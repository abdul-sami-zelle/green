"use client";

import { useContext, useState } from "react";
import Footer from "../components/Footer/Footer";
import Products from "../components/Products/Products";
import SideCart from "../components/SideCart/SideCart";
import { CartContext } from "../../context/addToCart";
import Sidebar from "../components/Sidebar/Sidebar";
import CategoryTopbar from "../components/CategoryTopbar/CategoryTopbar";

export default function CategoryPage() {
  const { showSideCart, setShowSideCart } = useContext(CartContext);
  const handleShowSideCart = () => setShowSideCart(true);

  const [activeSubcategory, setActiveSubcategory] = useState("All categories");

  const mainSubcategories = [
    "All categories",
    "Fresh Dates",
    "Fresh Cut Fruit & Vegetables",
    "Fresh Pressed Juice",
    "Fresh Vegetables",
    "Fresh Fruits",
    "Packaged Vegetables & Fruits",
    "Fresh Herbs",
  ];

  const organicSubcategories = ["Non-GMO", "Organic"];

  return (
    <>
      <CategoryTopbar />

      <div className="main-category-page-container">
        <aside className="sidebar-section">
          <Sidebar />
        </aside>

        <main className="products-section">
          <div className="subcategories">
            <ul>
              {mainSubcategories.map((sub, idx) => (
                <li
                  key={idx}
                  className={activeSubcategory === sub ? "active" : ""}
                  onClick={() => setActiveSubcategory(sub)}
                >
                  {sub}
                </li>
              ))}
            </ul>
          </div>

          <div className="subcategories">Organic Fruits & Vegetables</div>
          <div className="subcategories">
            <ul>
              {organicSubcategories.map((sub, idx) => (
                <span
                  key={idx}
                  className={activeSubcategory === sub ? "active" : ""}
                  onClick={() => setActiveSubcategory(sub)}
                >
                  {sub}
                </span>
              ))}
            </ul>
          </div>

          <Products />
          <Products />
          <Products />
          <Products />
          <Products />
        </main>
      </div>

      <Footer />
      <SideCart showSideCart={showSideCart} setShowSideCart={setShowSideCart} />
    </>
  );
}

