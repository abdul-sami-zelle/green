// "use client";
// import React, { useState } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import "./style.css";
// import ProductCard from "../ProductCard/ProductCard";

// const alsoBoughtProducts = [
//   {
//     id: 101,
//     name: "Halal Beef Kabab",
//     price: "$7.99",
//     lb: "/ pack",
//     weight: "6 pcs",
//     image: "/assets/Images/beef1.jpg",
//     description:
//       "Delicious ready-to-cook halal beef kababs, perfect for grilling or pan-frying.",
//   },
//   {
//     id: 102,
//     name: "Halal Chicken Seekh Kabab",
//     price: "$9.49",
//     lb: "/ pack",
//     weight: "10 pcs",
//     image: "/assets/Images/beef2.jpg",
//     description: "Juicy halal chicken seekh kababs packed with spices and flavor.",
//   },
//   {
//     id: 103,
//     name: "Halal Beef Sausages",
//     price: "$11.99",
//     lb: "/ pack",
//     weight: "12 pcs",
//     image: "/assets/Images/beef3.jpg",
//     description:
//       "Smoky and savory halal beef sausages, great for breakfast or BBQ.",
//   },
//   {
//     id: 104,
//     name: "Halal Chicken Tikka",
//     price: "$8.49",
//     lb: "/ pack",
//     weight: "8 pcs",
//     image: "/assets/Images/beef4.jpg",
//     description: "Tender halal chicken tikka, ready for the grill.",
//   },
//   {
//     id: 105,
//     name: "Halal Beef Mince",
//     price: "$12.99",
//     lb: "/ lb",
//     weight: "2 lb",
//     image: "/assets/Images/beef5.jpg",
//     description: "Fresh halal beef mince, perfect for curries or kababs.",
//   },
// ];

// export default function AlsoBought() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const visibleCards = 3; 
//   const prevSlide = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex((prev) => prev - 1);
//     }
//   };

//   const nextSlide = () => {
//     if (currentIndex < alsoBoughtProducts.length - visibleCards) {
//       setCurrentIndex((prev) => prev + 1);
//     }
//   };

//   return (
//     <div className="alsoBought-main-container">
//       <div className="alsoBought-carousel-container">
//         {/* Header */}
//         <div className="alsoBought-carousel-header">
//           <h3>Also Bought</h3>
//           <div className="alsoBought-header-right">
//             <button
//               className="alsoBought-nav-btn small"
//               onClick={prevSlide}
//               disabled={currentIndex === 0}
//             >
//               <FaChevronLeft />
//             </button>
//             <button
//               className="alsoBought-nav-btn small"
//               onClick={nextSlide}
//               disabled={currentIndex >= alsoBoughtProducts.length - visibleCards}
//             >
//               <FaChevronRight />
//             </button>
//           </div>
//         </div>

//         {/* Carousel (Multiple cards) */}
//         <div className="alsoBought-carousel-multi">
//           {alsoBoughtProducts
//             .slice(currentIndex, currentIndex + visibleCards)
//             .map((product) => (
//               <ProductCard key={product.id} product={product} onClick={() => {}} />
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./style.css";
import ProductCard from "../ProductCard/ProductCard";

const alsoBoughtProducts = [
  {
    id: 101,
    name: "Halal Beef Kabab",
    price: "$7.99",
    lb: "/ pack",
    weight: "6 pcs",
    image: "/assets/Images/beef1.jpg",
    description:
      "Delicious ready-to-cook halal beef kababs, perfect for grilling or pan-frying.",
  },
  {
    id: 102,
    name: "Halal Chicken Seekh Kabab",
    price: "$9.49",
    lb: "/ pack",
    weight: "10 pcs",
    image: "/assets/Images/beef2.jpg",
    description: "Juicy halal chicken seekh kababs packed with spices and flavor.",
  },
  {
    id: 103,
    name: "Halal Beef Sausages",
    price: "$11.99",
    lb: "/ pack",
    weight: "12 pcs",
    image: "/assets/Images/beef3.jpg",
    description:
      "Smoky and savory halal beef sausages, great for breakfast or BBQ.",
  },
  {
    id: 104,
    name: "Halal Chicken Tikka",
    price: "$8.49",
    lb: "/ pack",
    weight: "8 pcs",
    image: "/assets/Images/beef4.jpg",
    description: "Tender halal chicken tikka, ready for the grill.",
  },
  {
    id: 105,
    name: "Halal Beef Mince",
    price: "$12.99",
    lb: "/ lb",
    weight: "2 lb",
    image: "/assets/Images/beef5.jpg",
    description: "Fresh halal beef mince, perfect for curries or kababs.",
  },
];

export default function AlsoBought() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const nextSlide = () => {
    if (currentIndex < alsoBoughtProducts.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="alsoBought-main-container">
      <div className="alsoBought-carousel-container">
        {/* Header */}
        <div className="alsoBought-carousel-header">
          <h3>Also Bought</h3>
          <div className="alsoBought-header-right">
            <button
              className="alsoBought-nav-btn small"
              onClick={prevSlide}
              disabled={currentIndex === 0}
            >
              <FaChevronLeft />
            </button>
            <button
              className="alsoBought-nav-btn small"
              onClick={nextSlide}
              disabled={currentIndex >= alsoBoughtProducts.length - 1}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Carousel (one card at a time, sliding) */}
        <div className="alsoBought-carousel-wrapper">
          <div
            className="alsoBought-carousel-track"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {alsoBoughtProducts.map((product) => (
              <div className="alsoBought-slide" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
