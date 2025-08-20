"use client";
import React, { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./style.css";
import ProductCard from "../ProductCard/ProductCard";
import ProductDetailModal from "../ProductDetailModal/ProductDetailModal";
import { useRouter } from "next/navigation";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const products = [
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

export default function Products() {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const cardWidth = 283;

  const updateScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, offsetWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + offsetWidth < scrollWidth - 5);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      const visibleCards = Math.floor(
        carouselRef.current.offsetWidth / cardWidth
      );
      carouselRef.current.scrollBy({
        left: -(cardWidth * visibleCards),
        behavior: "smooth",
      });
      setTimeout(updateScrollButtons, 400);
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const visibleCards = Math.floor(
        carouselRef.current.offsetWidth / cardWidth
      );
      carouselRef.current.scrollBy({
        left: cardWidth * visibleCards,
        behavior: "smooth",
      });
      setTimeout(updateScrollButtons, 400);
    }
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);
    updateScrollButtons();

    return () => {
      el.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    });
  }, []);

  const [showDetailModal, setShowDetailodal] = useState(false);
  const [detailProduct, setDetailProduct] = useState({});
  const [filteredProducts, setFilteredProducts] = useState([]);
  const handleShowDetailModal = (item) => {
    setShowDetailodal(true);
    setDetailProduct(item);
    const filtered = products.filter((itm) => itm.id !== item.id).slice(0, 4);
    setFilteredProducts(filtered);
    console.log("detail Product ", item);
  };

  useEffect(() => {
    if (showDetailModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showDetailModal]);

  return (
    <div className="main-product-container">
      <div className="carousel-container">
        <div className="carousel-header">
          <div className="products-main-card-header">
            <div className="icons-with-text">
            <img
              src="/assets/Icons/icon5.svg"
              alt="meat icon"
              className="heading-icon"
            />
            <h3>
              Popular Halal Meats{" "}
              <span className="item-count">
                ({products?.length || 0} items)
              </span>
            </h3>
            </div>
            <a
              onClick={(e) => {
                e.preventDefault();
                router.push("/category?section=popular-halal-meats");
              }}
              className="view-all"
              style={{ cursor: "pointer" }}
            >
              View All{" "}
              <span>
                <FaChevronRight />
              </span>
            </a>
          </div>

          <div className="header-right">
            <button
              className={`nav-btn small ${!canScrollLeft ? "disabled" : ""}`}
              onClick={scrollLeft}
              disabled={!canScrollLeft}
            >
           <MdArrowBackIosNew />
            </button>
            <button
              className={`nav-btn small ${!canScrollRight ? "disabled" : ""}`}
              onClick={scrollRight}
              disabled={!canScrollRight}
            >
              <MdArrowForwardIos />
            </button>
          </div>
        </div>

        {loading ? (
          <div className="products-shimmer-main-container">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="product-shimmer-card-container">
                <div className="product-shimmer-card-image"></div>
                <div className="product-shimmer-detail-container">
                  <div className="product-price-shimmer" />
                  <div className="product-name-shimmer" />
                  <div className="product-weight-shimmer" />
                </div>
                <div className="product-shimmer-btn"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="carousel" ref={carouselRef}>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={handleShowDetailModal}
              />
            ))}
          </div>
        )}
      </div>

      <ProductDetailModal
        showModal={showDetailModal}
        setShowModal={setShowDetailodal}
        productData={detailProduct}
        otherProducts={filteredProducts}
      />
    </div>
  );
}
