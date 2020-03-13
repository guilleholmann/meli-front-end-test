import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";
import { searchProducts } from "../../services/product-service";
import "./SearchResultsPage.scss";
import Spinner from "../Spinner";

const SearchResults = ({ location }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const urlPath = queryString.parse(location.search);
    fetchItems(urlPath.search);
  }, []);

  const fetchItems = query => {
    setLoading(true);
    searchProducts(query).then(({ categories, items }) => {
      setResults(items);
      setLoading(false);
    });
  };

  return (
    <React.Fragment>
      {!loading ? (
        <div className="app__container section__listing-products">
          {!loading &&
            results.map(item => (
              <div className="product__item" key={item.id}>
                <Link to={`/items/${item.id}`}>
                  <div>
                    <img src={item.picture} alt="" />
                    <span>{item.price.amount}</span>
                    <h1> {item.id}</h1>
                    <h3> {item.title}</h3>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      ) : (
        <Spinner />
      )}
    </React.Fragment>
  );
};

export default SearchResults;
