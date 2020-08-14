import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import Link from "next/link";
const OwlCarousel = dynamic(import("react-owl-carousel"), { ssr: false });

const options = {
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 3,
      nav: true,
    },
    1000: {
      items: 6,
      nav: true,
    },
  },
};

const ProductCarousel = ({ items }) => {
  return (
    <div>
      <OwlCarousel className="owl-theme" loop margin={10} nav {...options}>
        {items.map((x) => {
          return (
            <Link href="/product/[id]" as={`/product/${x.id}`}>
              <a title={x.title}>
                <div key={x.id} className="item">
                  <img src={x.image} />
                  <h4>{x.title}</h4>
                </div>
              </a>
            </Link>
          );
        })}
      </OwlCarousel>
    </div>
  );
};

export default ProductCarousel;
