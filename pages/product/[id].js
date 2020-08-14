import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import styles from "../../styles/Product.module.css";
import Button from "react-bootstrap/Button";

const Single = ({ product }) => {
  return (
    <>
      <Row>
        <Col>
          <img src={product.image} width="200" />
        </Col>
        <Col>
          <h1>{product.title}</h1>
          <h3>${product.price}</h3>
          <Link href="/category/[name]" as={`/category/${product.category}`}>
            <a>{product.category}</a>
          </Link>
          <Button className={styles.atc} variant="dark">
            Add To Cart
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          {/* <div dangerouslySetInnerHTML={{__html:product.description}}/> */}
          <p className={styles.description}>{product.description}</p>
        </Col>
      </Row>
    </>
  );
};

export default Single;

Single.getInitialProps = async (ctx) => {
  const id = ctx.query.id;
  const fetched = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await fetched.json();
  return { product };
};
