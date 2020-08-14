import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Link from "next/link";

const ProductCard = (props) => {
  return (
    <Col sm={4}>
      <Card>
        <Card.Img variant="top" src={props.img} className="img" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>${props.price}</Card.Text>
          <Link href="/product/[id]" as={`/product/${props.id}`}>
            <a className="btn btn-dark" title={props.title}>
              more...
            </a>
          </Link>
        </Card.Body>
      </Card>
      <style jsx global>{`
        .img {
          width: 100px;
        }
        .card {
          margin-bottom: 30px;
        }
      `}</style>
    </Col>
  );
};

export default ProductCard;
