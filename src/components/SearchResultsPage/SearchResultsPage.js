import React, {useState, useEffect} from 'react';
import './SearchResultsPage.scss';

function SearchResults() {
  
  //use fetchItems when component mounts
  useEffect ( () => {
    fetchItems ();
  }, []);

  const [results,setResults] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=iphone');
    const results = await data.json();
    console.log(results.results);
    setResults(results.results);
  }

  

  return (
     <div>
       {results.slice(0, 4).map( results => (
        <h1 key={results.id}> {results.id}</h1>
       ))}
       
     </div>
  );
}

export default SearchResults;
