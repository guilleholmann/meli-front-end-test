import React, { useState, useEffect } from "react";
import "./styles.scss";
import { showProductDetails } from "../../services/product-service";

function ProductDetail({ match }) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const itemUrl = match.params.id;
    fetchProduct(itemUrl);
  }, []);

  const fetchProduct = query => {
    showProductDetails(query).then(productId => {
      setProduct(productId);
    });
  };
  return (
    <div className="app__container section__listing-products">
      <h1>{console.log(product)}</h1>
    </div>
  );
}

export default ProductDetail;
