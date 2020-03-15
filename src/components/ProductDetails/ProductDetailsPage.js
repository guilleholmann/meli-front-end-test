import React, { useState, useEffect } from "react";
import "./ProductDetailsPage.scss";
import { showProductDetails } from "../../services/product-service";

function ProductDetail({ match }) {
  const [item, setItem] = useState({});

  useEffect(() => {
    const itemUrl = match.params.id;
    fetchItem(itemUrl);
  }, []);

  const fetchItem = query => {
    showProductDetails(query).then(productId => {
      setItem(productId);
    });
  };
  return (
    <div className="app__container section__listing-products">
      <h1>{console.log(item)}</h1>
    </div>
  );
}

export default ProductDetail;
