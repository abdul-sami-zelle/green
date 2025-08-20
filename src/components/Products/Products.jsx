"use client";
import React, { useRef, useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useRouter } from "next/navigation";
import ProductCard from "../ProductCard/ProductCard";
import CenterBanner from "../CenterBanner/CenterBanner";
import { getLandingPageData, apiUrl } from "../../lib/api";
import "./style.css";

export default function Products() {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const carouselRefs = useRef({});
  const [scrollStates, setScrollStates] = useState({});
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getLandingPageData();
        setSections(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const cardWidth = 283;

  const scroll = (sectionId, direction) => {
    const el = carouselRefs.current[sectionId];
    if (!el) return;
    const visibleCards = Math.floor(el.offsetWidth / cardWidth);
    el.scrollBy({
      left:
        direction === "right"
          ? cardWidth * visibleCards
          : -cardWidth * visibleCards,
      behavior: "smooth",
    });
  };

  const updateScrollStates = (sectionId) => {
    const el = carouselRefs.current[sectionId];
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;

    setScrollStates((prev) => ({
      ...prev,
      [sectionId]: {
        left: scrollLeft > 0,
        right: scrollLeft + clientWidth < scrollWidth,
      },
    }));
  };

  useEffect(() => {
    if (!sections.length) return;

    sections.forEach((section) => {
      const el = carouselRefs.current[section._id];
      if (el) {
        updateScrollStates(section._id);

        const onScroll = () => updateScrollStates(section._id);
        el.addEventListener("scroll", onScroll);

        return () => el.removeEventListener("scroll", onScroll);
      }
    });
  }, [sections]);

  return (
    <div className="main-product-container">
      {loading
        ? Array.from({ length: 2 }).map((_, idx) => (
            <div key={idx} className="carousel-container">
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
            </div>
          ))
        : sections.map((section, idx) => (
            <React.Fragment key={section._id}>
              <div className="carousel-container">
                <div className="carousel-header">
                  <div className="products-main-card-header">
                    <div className="icons-with-text">
                      <img
                        src={`${apiUrl}${section?.department?.image}`}
                        alt="icon"
                        className="heading-icon"
                      />
                      <h3>
                        {section.sec_name}{" "}
                        <span className="item-count">
                          ({section.products.length} items)
                        </span>
                      </h3>
                    </div>
                    <a
                      onClick={() =>
                        router.push(
                          `/category?section=${section.department.slug}`
                        )
                      }
                      style={{ cursor: "pointer" }}
                      className="view-all"
                    >
                      View All <FaChevronRight size={12} />
                    </a>
                  </div>

                  <div className="header-right">
                    <button
                      className={`nav-btn small ${
                        !scrollStates[section._id]?.left ? "disabled" : ""
                      }`}
                      onClick={() => scroll(section._id, "left")}
                      disabled={!scrollStates[section._id]?.left}
                    >
                      <MdArrowBackIosNew />
                    </button>
                    <button
                      className={`nav-btn small ${
                        !scrollStates[section._id]?.right ? "disabled" : ""
                      }`}
                      onClick={() => scroll(section._id, "right")}
                      disabled={!scrollStates[section._id]?.right}
                    >
                      <MdArrowForwardIos />
                    </button>
                  </div>
                </div>

                <div
                  className="carousel"
                  ref={(el) => (carouselRefs.current[section._id] = el)}
                >
                  {section.products.map((product) => (
                    <ProductCard
                      key={product._id}
                      product={product}
                      allProducts={section.products}
                    />
                  ))}
                </div>
              </div>

              {idx === 0 && <CenterBanner />}
            </React.Fragment>
          ))}
    </div>
  );
}
