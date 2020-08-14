import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import ProductCard from "../../components/ProductCard";

const Categories = ({ products }) => {
  const [prods, setProds] = useState([]);

  const handleCategory = (e) => {
    console.log(e.target.name);

    setProds(products.filter((x) => x.category == e.target.name));
  };

  return (
    <>
      <Row>
        <Button variant="dark" name="jewelery" onClick={handleCategory}>
          Jewelery
        </Button>
        <Button variant="dark" name="men clothing" onClick={handleCategory}>
          Men's Clothing
        </Button>
        <Button variant="dark" name="women clothing" onClick={handleCategory}>
          Women's Clothing
        </Button>
        <Button variant="dark" name="electronics" onClick={handleCategory}>
          Electronics
        </Button>
      </Row>
      <Row>
        {prods.map((n) => {
          return (
            <ProductCard
              key={n.id}
              id={n.id}
              title={n.title}
              img={n.image}
              price={n.price}
            />
          );
        })}
      </Row>
    </>
  );
};

export default Categories;

Categories.getInitialProps = async (ctx) => {
  const fetched = await fetch("https://fakestoreapi.com/products");
  const products = await fetched.json();
  return { products };
};
