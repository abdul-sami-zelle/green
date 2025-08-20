"use client";
import React, { useRef, useState, useEffect, useContext } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./style.css";
import ProductDetailModal from "../ProductDetailModal/ProductDetailModal";
import { CartContext } from "@/context/addToCart";

const products = [
  {
    id: 1,
    name: "Halal Ground Beef 90/10",
    price: "$6.99",
    lb: "/ lb",
    weight: "1 lb",
    image: "/assets/Images/beef1.jpg",
  },
  {
    id: 2,
    name: "Halal Ground Beef 80/20",
    price: "$5.99",
    lb: "/ lb",
    weight: "1 lb",
    image: "/assets/Images/beef2.jpg",
  },
  {
    id: 3,
    name: "Halal Black Angus Beef Patty 8oz",
    price: "$6.49",
    lb: "/ lb",
    weight: "1 lb",
    image: "/assets/Images/beef3.jpg",
  },
  {
    id: 4,
    name: "Halal Ground Chili Meat",
    price: "$6.99",
    lb: "/ lb",
    weight: "1 lb",
    image: "/assets/Images/beef4.jpg",
  },
  {
    id: 5,
    name: "Halal Black Angus Country Style Rib",
    price: "$8.99",
    lb: "/ lb",
    weight: "1 lb",
    image: "/assets/Images/beef5.jpg",
  },
  {
    id: 6,
    name: "Halal Ground Beef 90/10 Pack",
    price: "$12.99",
    lb: "/ 2 lb",
    weight: "2 lb",
    image: "/assets/Images/beef6.jpg",
  },
  {
    id: 7,
    name: "Halal Ground Beef 80/20 Family Pack",
    price: "$10.99",
    lb: "/ 2 lb",
    weight: "2 lb",
    image: "/assets/Images/beef7.jpg",
  },
  {
    id: 8,
    name: "Halal Angus Beef Patty 4 Pack",
    price: "$11.49",
    lb: "/ pack",
    weight: "4 x 8oz",
    image: "/assets/Images/beef8.jpg",
  },
  {
    id: 9,
    name: "Halal Chili Meat Value Pack",
    price: "$12.99",
    lb: "/ 2 lb",
    weight: "2 lb",
    image: "/assets/Images/beef9.jpg",
  },
  {
    id: 10,
    name: "Halal Angus Country Rib Large Cut",
    price: "$16.99",
    lb: "/ 2 lb",
    weight: "2 lb",
    image: "/assets/Images/beef10.jpg",
  },
  {
    id: 11,
    name: "Halal Steak Cut Ribeye",
    price: "$14.99",
    lb: "/ lb",
    weight: "1 lb",
    image: "/assets/Images/beef5.jpg",
  },
  {
    id: 12,
    name: "Halal Lean Ground Beef 93/7",
    price: "$7.49",
    lb: "/ lb",
    weight: "1 lb",
    image: "/assets/Images/beef1.jpg",
  },
  {
    id: 13,
    name: "Halal Angus Chuck Roast",
    price: "$13.99",
    lb: "/ lb",
    weight: "1 lb",
    image: "/assets/Images/beef2.jpg",
  },
  {
    id: 14,
    name: "Halal Beef Short Ribs",
    price: "$15.99",
    lb: "/ lb",
    weight: "1 lb",
    image: "/assets/Images/beef3.jpg",
  },
  {
    id: 15,
    name: "Halal Boneless Beef Cubes",
    price: "$9.99",
    lb: "/ lb",
    weight: "1 lb",
    image: "/assets/Images/beef4.jpg",
  },
  {
    id: 16,
    name: "Halal Angus Sirloin Steak",
    price: "$18.99",
    lb: "/ lb",
    weight: "1 lb",
    image: "/assets/Images/beef6.jpg",
  },
  {
    id: 17,
    name: "Halal Beef Brisket",
    price: "$19.99",
    lb: "/ lb",
    weight: "1 lb",
    image: "/assets/Images/beef7.jpg",
  },
  {
    id: 18,
    name: "Halal Angus Flank Steak",
    price: "$17.49",
    lb: "/ lb",
    weight: "1 lb",
    image: "/assets/Images/beef8.jpg",
  },
  {
    id: 19,
    name: "Halal Beef Tenderloin",
    price: "$24.99",
    lb: "/ lb",
    weight: "1 lb",
    image: "/assets/Images/beef9.jpg",
  },
  {
    id: 20,
    name: "Halal Ribeye Steak Large Cut",
    price: "$28.99",
    lb: "/ 2 lb",
    weight: "2 lb",
    image: "/assets/Images/beef10.jpg",
  },
];

export default function Products() {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  

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
    }
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateScrollButtons);
    updateScrollButtons();

    return () => el.removeEventListener("scroll", updateScrollButtons);
  }, []);


  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  const [showDetailModal, setShowDetailodal] = useState(false);
  const [detailProduct, setDetailProduct] = useState({})
  const [filteredProducts, setFilteredProducts] = useState([])
  const handleShowDetailModal = (item) => {
    setShowDetailodal(true);
    setDetailProduct(item)
    const filtered = products.filter((itm) => itm.id !== item.id).slice(0,4);
    setFilteredProducts(filtered)
    console.log("detail Product ", item)
  }

  

  useEffect(() => {
    if(showDetailModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [showDetailModal])

  return (
    <div className="main-product-container">
      <div className="carousel-container">
        <div className="carousel-header">
          <div style={{ display: "flex", alignItems: "center" }}>
            <h3>Popular Halal Meats</h3>
            <a href="" className="view-all">
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
              <FaChevronLeft />
            </button>
            <button
              className={`nav-btn small ${!canScrollRight ? "disabled" : ""}`}
              onClick={scrollRight}
              disabled={!canScrollRight}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {loading ? (
          <div className="products-shimmer-main-container">
            {Array.from({length: 4}).map((_, index) => (
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
            <div className="product-card-container" key={product.id} onClick={() => handleShowDetailModal(product)}>
              <div className="product-card">
                <img src={product.image} alt={product.name} />
                <div className="product-info">
                  <p className="price">
                    {product.price} <span className="lb">{product.lb}</span>
                  </p>
                  <h4 className="name">{product.name}</h4>
                  <p className="weight">{product.weight}</p>
                  <div className="add-to-cart-container"></div>
                  <button className="add-to-cart" onClick={(e) => { e.stopPropagation(); addToCart(product, 1)}}>Add to cart</button>
                </div>
              </div>
            </div>
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
