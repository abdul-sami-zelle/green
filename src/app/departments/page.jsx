"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import ProductCategories from "../../components/ProductCategories/ProductCategories";
import BottomBar from "../../components/BottomBar/BottomBar";
import MobileSubHeader from "../../components/MobileSubHeader/MobileSubHeader";

const Page = () => {
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

  return (
    <div>
      <MobileSubHeader title="Departments" showBack={false} />

      <ProductCategories />
      <BottomBar />
    </div>
  );
};

export default Page;
