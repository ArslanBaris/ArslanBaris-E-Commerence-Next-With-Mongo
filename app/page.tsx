import Image from "next/image";
import Category from "./components/home/Category";
import Banner from "./components/home/Banner";
import Products from "./components/home/Products";

export default function Home() {
  return (
    <>
      <Category />
      <Banner />
      <Products />
    </>
  );
}
