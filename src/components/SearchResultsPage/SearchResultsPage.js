import React, { useState, useEffect } from 'react';
import './SearchResultsPage.scss';
import { Link } from 'react-router-dom';
import { searchProducts } from '../../services/product-service';

const SearchResults = () => {
  useEffect ( () => {
    fetchItems ();
  }, []);

  const [results,setResults] = useState([]);

  const fetchItems = () => {
    searchProducts('iphone')
      .then(({ categories, items }) => {
        setResults(items);
      });
  }  

  return (
     <div className="app__container section__listing-products">
       {results.map(item => (
       <div className="product__item" key={item.id}>
          <Link to={`/items/${item.id}`}>
            <div>
              <img src={item.picture} alt=""/>
              <span>{item.price.amount}</span>
              <h1> {item.id}</h1>
              <h3> {item.title}</h3>
            </div>
          </Link>
       </div>
       ))}
     </div>
  );
}

export default SearchResults;
