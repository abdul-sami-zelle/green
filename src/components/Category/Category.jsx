// "use client";
// import { useContext, useState, useEffect } from "react";
// import { useSearchParams } from "next/navigation";
// import Footer from "../../components/Footer/Footer";
// import Products from "../../components/Products/Products";
// import SideCart from "../../components/SideCart/SideCart";
// import { CartContext } from "../../context/addToCart";
// import Sidebar from "../../components/Sidebar/Sidebar";
// import CategoryTopbar from "../../components/CategoryTopbar/CategoryTopbar";
// import MobileSubHeader from "../../components/MobileSubHeader/MobileSubHeader";
// import BottomBar from "../../components/BottomBar/BottomBar";
// import ProductCard from "../../components/ProductCard/ProductCard";
// export default function CategoryPage() {
//   const { showSideCart, setShowSideCart } = useContext(CartContext);
//   const handleShowSideCart = () => setShowSideCart(true);

//   const [activeSubcategory, setActiveSubcategory] = useState("All categories");

//   const searchParams = useSearchParams();
//   const section = searchParams.get("section");
//   const mainSubcategories = [
//     "All categories",
//     "Fresh Dates",
//     "Fresh Cut Fruit & Vegetables",
//     "Fresh Pressed Juice",
//     "Fresh Vegetables",
//     "Fresh Fruits",
//     "Packaged Vegetables & Fruits",
//     "Fresh Herbs",
//   ];
//   const organicSubcategories = ["Non-GMO", "Organic"];
//   const dummyProducts = [
//     {
//       id: 1,
//       name: "Halal Ground Beef 90/10",
//       price: "$6.99",
//       lb: "/ lb",
//       weight: "1 lb",
//       image: "/assets/Images/beef1.jpg",
//       description:
//         "Premium halal ground beef with 90% lean meat and 10% fat. Perfect for healthy meals, tacos, and stir-fry.",
//     },
//     {
//       id: 2,
//       name: "Halal Ground Beef 80/20",
//       price: "$5.99",
//       lb: "/ lb",
//       weight: "1 lb",
//       image: "/assets/Images/beef2.jpg",
//       description:
//         "Juicy and flavorful halal ground beef with 80% lean and 20% fat, ideal for burgers and meatballs.",
//     },
//     {
//       id: 3,
//       name: "Halal Black Angus Beef Patty 8oz",
//       price: "$6.49",
//       lb: "/ lb",
//       weight: "1 lb",
//       image: "/assets/Images/beef3.jpg",
//       description:
//         "Thick, juicy halal Black Angus patties (8oz each) for restaurant-style gourmet burgers at home.",
//     },
//     {
//       id: 4,
//       name: "Halal Ground Chili Meat",
//       price: "$6.99",
//       lb: "/ lb",
//       weight: "1 lb",
//       image: "/assets/Images/beef4.jpg",
//       description:
//         "Specially ground halal beef perfect for making chili, curries, and hearty stews.",
//     },
//     {
//       id: 5,
//       name: "Halal Black Angus Country Style Rib",
//       price: "$8.99",
//       lb: "/ lb",
//       weight: "1 lb",
//       image: "/assets/Images/beef5.jpg",
//       description:
//         "Tender and flavorful country-style ribs from halal Black Angus beef, ideal for grilling or slow cooking.",
//     },
//     {
//       id: 6,
//       name: "Halal Ground Beef 90/10 Pack",
//       price: "$12.99",
//       lb: "/ 2 lb",
//       weight: "2 lb",
//       image: "/assets/Images/beef6.jpg",
//       description:
//         "Family pack of lean halal ground beef (90/10) for meal prep, pasta dishes, and healthy recipes.",
//     },
//     {
//       id: 7,
//       name: "Halal Ground Beef 80/20 Family Pack",
//       price: "$10.99",
//       lb: "/ 2 lb",
//       weight: "2 lb",
//       image: "/assets/Images/beef7.jpg",
//       description:
//         "Value family pack of halal ground beef (80/20) with rich flavor, perfect for large meals and BBQs.",
//     },
//     {
//       id: 8,
//       name: "Halal Angus Beef Patty 4 Pack",
//       price: "$11.49",
//       lb: "/ pack",
//       weight: "4 x 8oz",
//       image: "/assets/Images/beef8.jpg",
//       description:
//         "Pack of 4 halal Angus beef patties (8oz each), perfect for quick and delicious homemade burgers.",
//     },
//     {
//       id: 9,
//       name: "Halal Chili Meat Value Pack",
//       price: "$12.99",
//       lb: "/ 2 lb",
//       weight: "2 lb",
//       image: "/assets/Images/beef9.jpg",
//       description:
//         "Large pack of halal chili meat, ground with the right texture for spicy chili and curries.",
//     },
//     {
//       id: 10,
//       name: "Halal Angus Country Rib Large Cut",
//       price: "$16.99",
//       lb: "/ 2 lb",
//       weight: "2 lb",
//       image: "/assets/Images/beef10.jpg",
//       description:
//         "Large cut halal Angus ribs, meaty and juicy, perfect for BBQ or oven roasting.",
//     },
//     {
//       id: 11,
//       name: "Halal Steak Cut Ribeye",
//       price: "$14.99",
//       lb: "/ lb",
//       weight: "1 lb",
//       image: "/assets/Images/beef5.jpg",
//       description:
//         "Juicy halal ribeye steak cut, marbled to perfection for a rich, tender flavor.",
//     },
//     {
//       id: 12,
//       name: "Halal Lean Ground Beef 93/7",
//       price: "$7.49",
//       lb: "/ lb",
//       weight: "1 lb",
//       image: "/assets/Images/beef1.jpg",
//       description:
//         "Extra lean halal ground beef (93/7) for those who prefer healthier, lighter dishes.",
//     },
//     {
//       id: 13,
//       name: "Halal Angus Chuck Roast",
//       price: "$13.99",
//       lb: "/ lb",
//       weight: "1 lb",
//       image: "/assets/Images/beef2.jpg",
//       description:
//         "Slow-cook this halal Angus chuck roast for tender, flavorful pot roast or stews.",
//     },
//     {
//       id: 14,
//       name: "Halal Beef Short Ribs",
//       price: "$15.99",
//       lb: "/ lb",
//       weight: "1 lb",
//       image: "/assets/Images/beef3.jpg",
//       description:
//         "Rich and meaty halal beef short ribs, perfect for braising, BBQ, or slow cooking.",
//     },
//     {
//       id: 15,
//       name: "Halal Boneless Beef Cubes",
//       price: "$9.99",
//       lb: "/ lb",
//       weight: "1 lb",
//       image: "/assets/Images/beef4.jpg",
//       description:
//         "Convenient halal beef cubes, ideal for curries, kebabs, stews, and stir-fry dishes.",
//     },
//     {
//       id: 16,
//       name: "Halal Angus Sirloin Steak",
//       price: "$18.99",
//       lb: "/ lb",
//       weight: "1 lb",
//       image: "/assets/Images/beef6.jpg",
//       description:
//         "Premium halal Angus sirloin steak with bold flavor and tenderness, great for grilling.",
//     },
//     {
//       id: 17,
//       name: "Halal Beef Brisket",
//       price: "$19.99",
//       lb: "/ lb",
//       weight: "1 lb",
//       image: "/assets/Images/beef7.jpg",
//       description:
//         "Tender and juicy halal beef brisket, ideal for slow cooking, smoking, or roasting.",
//     },
//     {
//       id: 18,
//       name: "Halal Angus Flank Steak",
//       price: "$17.49",
//       lb: "/ lb",
//       weight: "1 lb",
//       image: "/assets/Images/beef8.jpg",
//       description:
//         "Lean and flavorful halal Angus flank steak, perfect for fajitas and stir-fry.",
//     },
//     {
//       id: 19,
//       name: "Halal Beef Tenderloin",
//       price: "$24.99",
//       lb: "/ lb",
//       weight: "1 lb",
//       image: "/assets/Images/beef9.jpg",
//       description:
//         "Luxury cut halal beef tenderloin, exceptionally tender and juicy, ideal for fine dining recipes.",
//     },
//     {
//       id: 20,
//       name: "Halal Ribeye Steak Large Cut",
//       price: "$28.99",
//       lb: "/ 2 lb",
//       weight: "2 lb",
//       image: "/assets/Images/beef10.jpg",
//       description:
//         "Thick and juicy large-cut halal ribeye steak, marbled for premium flavor and tenderness.",
//     },
//   ];

//   return (
//     <>
//       <MobileSubHeader
//         title="Produce"
//         showBack={true}
//         onCartClick={handleShowSideCart}
//       />
//       <CategoryTopbar />

//       <div className="main-category-page-container">
//         <aside className="sidebar-section">
//           <Sidebar />
//         </aside>

//         <main className="products-section">
//           {section === "popular-halal-meats" ? (
//             <div className="view-all-products">
//               <div className="subcategories">
//                 <ul>
//                   {mainSubcategories.map((sub, idx) => (
//                     <li
//                       key={idx}
//                       className={activeSubcategory === sub ? "active" : ""}
//                       onClick={() => setActiveSubcategory(sub)}
//                     >
//                       {sub}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="subcategories-selected">
//                 Organic Fruits & Vegetables
//               </div>
//               <div className="subcategories-buttons">
//                 <ul>
//                   {organicSubcategories.map((sub, idx) => (
//                     <span
//                       key={idx}
//                       className={activeSubcategory === sub ? "active" : ""}
//                       onClick={() => setActiveSubcategory(sub)}
//                     >
//                       {sub}
//                     </span>
//                   ))}
//                 </ul>
//               </div>
//               <div className="product-grid">
//                 {dummyProducts.map((product) => (
//                   <>
//                     <div style={{border:"1px solid rgb(248, 248, 248);"}}>
//                       <ProductCard
//                         key={product.id}
//                         product={product}
//                         onClick={() => {}}
//                       />
//                     </div>
//                   </>
//                 ))}
//               </div>
//             </div>
//           ) : (
//             <>
//               <div className="subcategories">
//                 <ul>
//                   {mainSubcategories.map((sub, idx) => (
//                     <li
//                       key={idx}
//                       className={activeSubcategory === sub ? "active" : ""}
//                       onClick={() => setActiveSubcategory(sub)}
//                     >
//                       {sub}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <div className="subcategories-buttons">
//                 <ul>
//                   {organicSubcategories.map((sub, idx) => (
//                     <span
//                       key={idx}
//                       className={activeSubcategory === sub ? "active" : ""}
//                       onClick={() => setActiveSubcategory(sub)}
//                     >
//                       {sub}
//                     </span>
//                   ))}
//                 </ul>
//               </div>

//               <Products />
//               <Products />
//               <Products />
//               <Products />
//               <Products />
//               <Products />
//             </>
//           )}
//         </main>
//       </div>

//       <Footer />
//       <BottomBar />
//       <SideCart showSideCart={showSideCart} setShowSideCart={setShowSideCart} />
//     </>
//   );
// }

"use client";

import { useSearchParams } from "next/navigation";
import { useState, useContext } from "react";
import ProductCard from "../ProductCard/ProductCard";
import Products from "../Products/Products";
import Sidebar from "../Sidebar/Sidebar";
import CategoryTopbar from "../CategoryTopbar/CategoryTopbar";
import MobileSubHeader from "../MobileSubHeader/MobileSubHeader";
import Footer from "../Footer/Footer";
import BottomBar from "../BottomBar/BottomBar";
import SideCart from "../SideCart/SideCart";
import { CartContext } from "../../context/addToCart";

export default function Category() {
  const { showSideCart, setShowSideCart } = useContext(CartContext);
  const handleShowSideCart = () => setShowSideCart(true);

  const [activeSubcategory, setActiveSubcategory] = useState("All categories");

  const searchParams = useSearchParams();
  const section = searchParams.get("section");

  const mainSubcategories = ["All categories", "Fresh Dates", "Fresh Cut Fruit & Vegetables", "Fresh Pressed Juice", "Fresh Vegetables", "Fresh Fruits", "Packaged Vegetables & Fruits", "Fresh Herbs"];
  const organicSubcategories = ["Non-GMO", "Organic"];

   const dummyProducts = [
    {
      id: 1,
      name: "Halal Ground Beef 90/10",
      price: "$6.99",
      lb: "/ lb",
      weight: "1 lb",
      image: "/assets/Images/beef1.jpg",
      description:
        "Premium halal ground beef with 90% lean meat and 10% fat. Perfect for healthy meals, tacos, and stir-fry.",
    },
    {
      id: 2,
      name: "Halal Ground Beef 80/20",
      price: "$5.99",
      lb: "/ lb",
      weight: "1 lb",
      image: "/assets/Images/beef2.jpg",
      description:
        "Juicy and flavorful halal ground beef with 80% lean and 20% fat, ideal for burgers and meatballs.",
    },
    {
      id: 3,
      name: "Halal Black Angus Beef Patty 8oz",
      price: "$6.49",
      lb: "/ lb",
      weight: "1 lb",
      image: "/assets/Images/beef3.jpg",
      description:
        "Thick, juicy halal Black Angus patties (8oz each) for restaurant-style gourmet burgers at home.",
    },
    {
      id: 4,
      name: "Halal Ground Chili Meat",
      price: "$6.99",
      lb: "/ lb",
      weight: "1 lb",
      image: "/assets/Images/beef4.jpg",
      description:
        "Specially ground halal beef perfect for making chili, curries, and hearty stews.",
    },
    {
      id: 5,
      name: "Halal Black Angus Country Style Rib",
      price: "$8.99",
      lb: "/ lb",
      weight: "1 lb",
      image: "/assets/Images/beef5.jpg",
      description:
        "Tender and flavorful country-style ribs from halal Black Angus beef, ideal for grilling or slow cooking.",
    },
    {
      id: 6,
      name: "Halal Ground Beef 90/10 Pack",
      price: "$12.99",
      lb: "/ 2 lb",
      weight: "2 lb",
      image: "/assets/Images/beef6.jpg",
      description:
        "Family pack of lean halal ground beef (90/10) for meal prep, pasta dishes, and healthy recipes.",
    },
    {
      id: 7,
      name: "Halal Ground Beef 80/20 Family Pack",
      price: "$10.99",
      lb: "/ 2 lb",
      weight: "2 lb",
      image: "/assets/Images/beef7.jpg",
      description:
        "Value family pack of halal ground beef (80/20) with rich flavor, perfect for large meals and BBQs.",
    },
    {
      id: 8,
      name: "Halal Angus Beef Patty 4 Pack",
      price: "$11.49",
      lb: "/ pack",
      weight: "4 x 8oz",
      image: "/assets/Images/beef8.jpg",
      description:
        "Pack of 4 halal Angus beef patties (8oz each), perfect for quick and delicious homemade burgers.",
    },
    {
      id: 9,
      name: "Halal Chili Meat Value Pack",
      price: "$12.99",
      lb: "/ 2 lb",
      weight: "2 lb",
      image: "/assets/Images/beef9.jpg",
      description:
        "Large pack of halal chili meat, ground with the right texture for spicy chili and curries.",
    },
    {
      id: 10,
      name: "Halal Angus Country Rib Large Cut",
      price: "$16.99",
      lb: "/ 2 lb",
      weight: "2 lb",
      image: "/assets/Images/beef10.jpg",
      description:
        "Large cut halal Angus ribs, meaty and juicy, perfect for BBQ or oven roasting.",
    },
    {
      id: 11,
      name: "Halal Steak Cut Ribeye",
      price: "$14.99",
      lb: "/ lb",
      weight: "1 lb",
      image: "/assets/Images/beef5.jpg",
      description:
        "Juicy halal ribeye steak cut, marbled to perfection for a rich, tender flavor.",
    },
    {
      id: 12,
      name: "Halal Lean Ground Beef 93/7",
      price: "$7.49",
      lb: "/ lb",
      weight: "1 lb",
      image: "/assets/Images/beef1.jpg",
      description:
        "Extra lean halal ground beef (93/7) for those who prefer healthier, lighter dishes.",
    },
    {
      id: 13,
      name: "Halal Angus Chuck Roast",
      price: "$13.99",
      lb: "/ lb",
      weight: "1 lb",
      image: "/assets/Images/beef2.jpg",
      description:
        "Slow-cook this halal Angus chuck roast for tender, flavorful pot roast or stews.",
    },
    {
      id: 14,
      name: "Halal Beef Short Ribs",
      price: "$15.99",
      lb: "/ lb",
      weight: "1 lb",
      image: "/assets/Images/beef3.jpg",
      description:
        "Rich and meaty halal beef short ribs, perfect for braising, BBQ, or slow cooking.",
    },
    {
      id: 15,
      name: "Halal Boneless Beef Cubes",
      price: "$9.99",
      lb: "/ lb",
      weight: "1 lb",
      image: "/assets/Images/beef4.jpg",
      description:
        "Convenient halal beef cubes, ideal for curries, kebabs, stews, and stir-fry dishes.",
    },
    {
      id: 16,
      name: "Halal Angus Sirloin Steak",
      price: "$18.99",
      lb: "/ lb",
      weight: "1 lb",
      image: "/assets/Images/beef6.jpg",
      description:
        "Premium halal Angus sirloin steak with bold flavor and tenderness, great for grilling.",
    },
    {
      id: 17,
      name: "Halal Beef Brisket",
      price: "$19.99",
      lb: "/ lb",
      weight: "1 lb",
      image: "/assets/Images/beef7.jpg",
      description:
        "Tender and juicy halal beef brisket, ideal for slow cooking, smoking, or roasting.",
    },
    {
      id: 18,
      name: "Halal Angus Flank Steak",
      price: "$17.49",
      lb: "/ lb",
      weight: "1 lb",
      image: "/assets/Images/beef8.jpg",
      description:
        "Lean and flavorful halal Angus flank steak, perfect for fajitas and stir-fry.",
    },
    {
      id: 19,
      name: "Halal Beef Tenderloin",
      price: "$24.99",
      lb: "/ lb",
      weight: "1 lb",
      image: "/assets/Images/beef9.jpg",
      description:
        "Luxury cut halal beef tenderloin, exceptionally tender and juicy, ideal for fine dining recipes.",
    },
    {
      id: 20,
      name: "Halal Ribeye Steak Large Cut",
      price: "$28.99",
      lb: "/ 2 lb",
      weight: "2 lb",
      image: "/assets/Images/beef10.jpg",
      description:
        "Thick and juicy large-cut halal ribeye steak, marbled for premium flavor and tenderness.",
    },
  ];

  return (
    <>
      <MobileSubHeader title="Produce" showBack={true} onCartClick={handleShowSideCart} />
      <CategoryTopbar />
      <div className="main-category-page-container">
        <aside className="sidebar-section"><Sidebar /></aside>
        <main className="products-section">
          {section === "popular-halal-meats" ? (
            <div className="view-all-products">
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
              <div className="product-grid">
                {dummyProducts.map((product) => (
                  <>
                    <div style={{border:"1px solid rgb(248, 248, 248);"}}>
                      <ProductCard
                        key={product.id}
                        product={product}
                        onClick={() => {}}
                      />
                    </div>
                  </>
                ))}
              </div>
            </div>
          ) : (
            <>
              <Products /><Products /><Products /><Products /><Products /><Products />
            </>
          )}
        </main>
      </div>
      <Footer />
      <BottomBar />
      <SideCart showSideCart={showSideCart} setShowSideCart={setShowSideCart} />
    </>
  );
}
