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
          {results.length > 0 &&
          <ol className="results__list">
            {results.map(item => (
              <li className="results__list-item" key={item.id}>
                  <div className="item__image-container">
                    <Link  to={`/items/${item.id}`}>
                      <img className="item__image" src={item.picture} alt={item.title} />
                    </Link>
                  </div>
                  <div className="item__info-container">
                    <span className="item__price">$ {item.price.amount}</span>
                    <h2>{item.title}</h2>
                  </div>
                  <div className="item__city-container">
                    <span>{item.address}</span>
            
                  </div>
              </li>
            ))}
          </ol>
        }
         {results.length === 0 &&
          <div className="no-results-container">
            <div className="help-data">
              <span className="title">No hay publicaciones que coincidan con tu búsqueda.</span>
              <ul className="tips-list">
                <li>Revisá la ortografía de la palabra.</li>
                <li>Utilizá palabras más genéricas o menos palabras.</li>
              </ul>
            </div>
          </div>
        }
        </main>
      ) : (
        <Spinner />
      )}
    </React.Fragment>
  );
};

export default SearchResults;
