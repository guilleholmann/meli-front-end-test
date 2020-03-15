import React, { useState, useEffect } from "react";
import Spinner from "../Spinner";
import { showProductDetails } from "../../services/product-service";
import "./styles.scss";

function ProductDetail({ match }) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const itemUrl = match.params.id;
    fetchProduct(itemUrl);
  }, []);

  const fetchProduct = query => {
    setLoading(true);
    showProductDetails(query).then(product => {
      
      setProduct(product);
      setLoading(false);
    });
  };

  return (
    <React.Fragment>
      {(!loading && product.item )  ? (
        <div className="app__container ">
           <h1>{product.item.title}</h1>
        </div>
      ) : (
        <Spinner />
      )}
    </React.Fragment>
  );
}

export default ProductDetail;
