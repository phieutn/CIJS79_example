import React, { useState } from "react";
import ProductItem from "./ProductItem";

const ProductList = (props) => {
  const { products, handleAddItem } = props;

  return (
    <div className="container mt-3">
      <div className="row row-cols-md-3 g-4">
        {products.map((item) => {
          return <ProductItem key={item.id} product={item} handleAddItem={handleAddItem} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
