"use client";

import { useContext, useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Products from "../../components/Products/Products";
import SideCart from "../../components/SideCart/SideCart";
import { CartContext } from "../../context/addToCart";
import Sidebar from "../../components/Sidebar/Sidebar";
import CategoryTopbar from "../../components/CategoryTopbar/CategoryTopbar";
import MobileSubHeader from "../../components/MobileSubHeader/MobileSubHeader";
import BottomBar from "../../components/BottomBar/BottomBar";
import { useRouter } from "next/navigation";

export default function Search() {
  const { showSideCart, setShowSideCart } = useContext(CartContext);
  const handleShowSideCart = () => setShowSideCart(true);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        router.push("/category");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [router]);

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
      <MobileSubHeader title="Search Products" showBack={false} />

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

          <div className="subcategories-selected">
            Organic Fruits & Vegetables
          </div>
          <div className="subcategories-buttons">
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
      <BottomBar />
      <SideCart showSideCart={showSideCart} setShowSideCart={setShowSideCart} />
    </>
  );
}
