"use client";
import React from "react";
import "./style.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomBar = () => {
  const pathname = usePathname();

  const tabs = [
    {
      path: "/",
      label: "Home",
      icon: "/assets/Icons/home.svg",
      activeIcon: "/assets/Icons/home-s.svg",
      matchType: "exact",
    },
    {
      path: "/sale",
      label: "Sale",
      icon: "/assets/Icons/discount.svg",
      activeIcon: "/assets/Icons/discount-s.svg",
      matchPaths: ["/sale"],
    },
    {
      path: "/departments",
      label: "Departments",
      icon: "/assets/Icons/departments.svg",
      activeIcon: "/assets/Icons/departments-s.svg",
      matchPaths: ["/departments", "/category"],
    },
    {
      path: "/search",
      label: "Search",
      icon: "/assets/Icons/search.svg",
      activeIcon: "/assets/Icons/search-s.svg",
      matchPaths: ["/search"],
    },
    {
      path: "/more",
      label: "More",
      icon: "/assets/Icons/more.svg",
      activeIcon: "/assets/Icons/more-s.svg",
      matchPaths: ["/more"],
    },
  ];

  return (
    <div className="bottom-bar-main">
      {tabs.map((tab) => {
        let isActive = false;

        if (tab.matchType === "exact") {
          isActive = pathname === tab.path;
        } else if (tab.matchPaths) {
          isActive = tab.matchPaths.some((p) => pathname.startsWith(p));
        }

        return (
          <Link key={tab.path} href={tab.path} className="bottom-bar-tabs">
            <div
              className={`bottom-tabs-icons ${isActive ? "active-tab" : ""}`}
            >
              <img
                src={isActive ? tab.activeIcon : tab.icon}
                alt={tab.label}
                className="bottom-bar-icon"
              />
            </div>
            <p className={isActive ? "active-tab" : ""}>{tab.label}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomBar;
