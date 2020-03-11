import React, {useState, useEffect} from 'react';
import './SearchResultsPage.scss';
import {Link} from 'react-router-dom';

function SearchResults() {
  
  //use fetchItems when component mounts
  useEffect ( () => {
    fetchItems ();
  }, []);

  const [results,setResults] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=iphone');
    const items = await data.json();
    console.log(items.results);
    setResults(items.results);
  }

  

  return (
     <div className="app__container section__listing-products">
       {results.slice(0, 4).map( item => (
       <div className="product__item" key={item.id}>
          <Link to={`/items/${item.id}`}>
            <div>
              <img src={item.thumbnail} alt=""/>
              <span>{item.price}</span>
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
