import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import ProductCarousel from "../components/ProductCarousel";

export default function Home({ products }) {
  return (
    <>
      <Search />
      <ProductCarousel items={products} />
    </>
  );
}

Home.getInitialProps = async (ctx) => {
  const fetched = await fetch("https://fakestoreapi.com/products");
  const products = await fetched.json();
  return { products };
};
