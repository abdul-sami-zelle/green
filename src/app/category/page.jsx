"use client";

import dynamic from "next/dynamic";

const Category = dynamic(() => import("../../components/Category/Category"), {
  ssr: false,
});

export default function CategoryPage() {
  return <Category />;
}
