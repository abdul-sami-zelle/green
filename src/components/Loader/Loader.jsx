"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import "./Loader.css";

export default function PageLoader({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {loading && (
        <div className="page-loader">
          <div className="loader-dots">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      {children}
    </>
  );
}
