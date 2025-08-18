import CenterBanner from "./components/CenterBanner/CenterBanner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProductCategories from "./components/ProductCategories/ProductCategories";
import Products from "./components/Products/Products";

export default function Home() {
  return (
    <>
      <Header />
      <Products />
      <CenterBanner />
      <Products />
      <Products />
      <Products />
      <Products />
      <Products />
      <ProductCategories />
      <Footer/>
    </>
  );
}
