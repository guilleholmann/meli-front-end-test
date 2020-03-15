import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";
import { searchProducts } from "../../services/product-service";
import "./styles.scss";
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
        <main className="app__container results__section">
          <ol className="results__list">
            {results.map(item => (
              <li className="results__list-item" key={item.id}>
                  <div class="item__image-container">
                    <Link  to={`/items/${item.id}`}>
                      <img className="item__image" src={item.picture} alt={item.title} />
                    </Link>
                  </div>
                  <div className="item__info-container">
                    <span>{item.price.amount}</span>
                    <h1>{item.id}</h1>
                    <h3>{item.title}</h3>
                  </div>
              </li>
            ))}
          </ol>
        </main>
      ) : (
        <Spinner />
      )}
    </React.Fragment>
  );
};

export default SearchResults;
