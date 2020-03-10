import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './ProductDetailsPage.scss';



 // match is to get access to the prop of the links
function ProductDetailsPage({match}) {
  
  //use fetchItems when component mounts
 
  useEffect ( ( ) => {
    fetchItem ();
    console.log(match);
  });

  const [item,setItem] = useState();
  //https://api.mercadolibre.com/items/
  //{`/item/${item.id}`}
  const fetchItem = async () => {
    const fetchItem = await fetch(`https://api.mercadolibre.com/items/${match.params.id}`);
    const item = await fetchItem.json();
    setItem(item);
    console.log(item);
  }

  

  return (
     <div className="app__container section__listing-products">
        <h1>item</h1>
       
     </div>
  );
}

export default ProductDetailsPage;
