import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ data }) => {
  return (
    <div className="product__list">
      {data?.map((item, index) => (
        <ProductCard item={item} key={index} />
      ))}
    </div>
  );
};

export default ProductList;
