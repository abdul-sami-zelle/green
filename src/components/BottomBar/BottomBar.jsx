"use client";
import React from "react";
import "./style.css";
import { GoHomeFill } from "react-icons/go";
import { BiSearch, BiSolidDashboard } from "react-icons/bi";
import { TbCircleDashedPercentage } from "react-icons/tb";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomBar = () => {
  const pathname = usePathname();

  const tabs = [
    { 
      path: "/", 
      label: "Home", 
      icon: <GoHomeFill size={25} />, 
      matchType: "exact"
    },
    { 
      path: "/sale", 
      label: "Sale", 
      icon: <TbCircleDashedPercentage size={25}/>, 
      matchPaths: ["/sale"] 
    },
    { 
      path: "/departments", 
      label: "Departments", 
      icon: <BiSolidDashboard size={25}/>, 
      matchPaths: ["/departments", "/category"] 
    },
    { 
      path: "/search", 
      label: "Search", 
      icon: <BiSearch size={25}/>, 
      matchPaths: ["/search"] 
    },
    { 
      path: "/more", 
      label: "More", 
      icon: <HiOutlineMenuAlt1 size={25}/>, 
      matchPaths: ["/more"] 
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
            <div className={`bottom-tabs-icons ${isActive ? "active-tab" : ""}`}>
              {tab.icon}
            </div>
            <p className={isActive ? "active-tab" : ""}>{tab.label}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomBar;



