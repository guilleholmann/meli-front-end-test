import React, { useState, useEffect } from "react";
import Spinner from "../Spinner";
import { showProductDetails } from "../../services/product-service";
import "./styles.scss";
import { CURRENCY_SYMBOL_MAPPER, CONDITION_MAPPER } from "../../utils";

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
      {!loading && product.item ? (
        <div className="item__section app__container">
          <div className="item__column-container">
            <div className="item__column-left">
              <img
                className="item__picture"
                src={product.item.picture}
                alt={product.item.title}
              />
              <div className="item__description">
                <h2>Descripción del producto</h2>
                <p className="item__description-text">
                  {product.item.description}
                </p>
              </div>
            </div>
            <div className="item__info item__column-right">
              <div className="item__condition">
                <span className="conditions">
                  {`
                    ${CONDITION_MAPPER[product.item.condition]}
                    ${
                      product.item.sold_quantity > 0
                        ? " - " + product.item.sold_quantity + " vendidos"
                        : ""
                    }
                  `}
                </span>
              </div>
              <h1 className="item__title">{product.item.title}</h1>
              <div className="item__price">
                <span>
                  {CURRENCY_SYMBOL_MAPPER[product.item.price.currency]}
                </span>
                <span>
                  {product.item.price.amount}{product.item.price.decimals !== 0 ? '.' : ''}
                </span>
                <span className="decimals">
                    {`${product.item.price.decimals !== 0 ? product.item.price.decimals : '00'} `}
                  </span>
              </div>
              <div className="btn__container">
                <button className="btn__shop">COMPRAR</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </React.Fragment>
  );
}

export default ProductDetail;
