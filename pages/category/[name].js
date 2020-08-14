import React from "react";
import Row from "react-bootstrap/Row";
import ProductCard from "../../components/ProductCard";

const Category = ({ products }) => {
  return (
    <Row>
      {products.map((n) => {
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
  );
};

export default Category;
Category.getInitialProps = async (ctx) => {
  const name = ctx.query.name;
  const fetched = await fetch(
    `https://fakestoreapi.com/products/category/${name}`
  );
  const products = await fetched.json();
  return { products };
};
