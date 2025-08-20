"use client";
import React, { useState } from "react";
import "./style.css";

const departments = [
  { name: "Produce", icon: "/assets/Icons/icon1.svg" },
  { name: "Deli", icon: "/assets/Icons/icon2.svg" },
  { name: "Bread & Bakery", icon: "/assets/Icons/icon3.svg" },
  { name: "Dairy & Eggs", icon: "/assets/Icons/icon4.svg" },
  { name: "Meat & Seafood", icon: "/assets/Icons/icon5.svg" },
  { name: "Pantry", icon: "/assets/Icons/icon6.svg" },
  { name: "Beverages", icon: "/assets/Icons/icon7.svg" },
  { name: "Canned & Jarred Goods", icon: "/assets/Icons/icon8.svg" },
  { name: "Frozen", icon: "/assets/Icons/icon9.svg" },
  { name: "Snacks, Candy, Nuts, Seeds", icon: "/assets/Icons/icon10.svg" },
  { name: "Baby", icon: "/assets/Icons/icon11.svg" },
  { name: "Beauty & Personal Care", icon: "/assets/Icons/icon12.svg" },
  { name: "Bulk Goods", icon: "/assets/Icons/icon13.svg" },
  // { name: "Coffee Bar", icon: "/assets/Icons/icon14.svg" },
  { name: "Health & Nutrition", icon: "/assets/Icons/icon15.svg" },
  { name: "Home, Kitchen & Dine", icon: "/assets/Icons/icon16.svg" },
  { name: "Household Essentials", icon: "/assets/Icons/icon17.svg" },
  { name: "Kitchen", icon: "/assets/Icons/icon18.svg" },
  { name: "Pets", icon: "/assets/Icons/icon19.svg" },
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="sidebar-container">
      <h3 className="sidebar-title">Departments</h3>
      <ul className="sidebar-list">
        {departments.map((dept, index) => (
          <li
            key={index}
            className={`sidebar-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <img src={dept.icon} alt={dept.name} className="sidebar-icon" />
            <span>{dept.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
