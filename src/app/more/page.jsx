"use client";
import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaGlobe, FaInfoCircle } from "react-icons/fa";
import BottomBar from "../../components/BottomBar/BottomBar";

export default function More() {
  const [showInfo, setShowInfo] = useState(true);

  if (!showInfo) return null;

  return (
    <div className="info-overlay" onClick={() => setShowInfo(false)}>
      <div className="info-container" onClick={(e) => e.stopPropagation()}>
        <div className="info-header">
          <img src="/assets/Images/logo.png" alt="logo" className="info-logo" />
          <h2 className="info-title">Delco Farmers Market</h2>
        </div>

        <div className="info-links">
          <div className="info-link">
            <span className="info-icon"><FaGlobe /></span>
            <span className="info-text">Language</span>
            <span className="info-arrow"><MdKeyboardArrowRight /></span>
          </div>
          <hr />
          <div className="info-link">
            <span className="info-icon"><FaInfoCircle /></span>
            <span className="info-text">About Us</span>
            <span className="info-arrow"><MdKeyboardArrowRight /></span>
          </div>
          <hr />
        </div>

        <div className="info-actions">
          <button className="info-btn">Sign In</button>
        </div>
      </div>

      <BottomBar />
    </div>
  );
}
