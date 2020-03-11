import React, {useState, useEffect} from 'react';
import './ProductDetailsPage.scss';

function ProductDetail( { match }) {
  
  //use fetchItems when component mounts
  useEffect ( () => {
    fetchItem();
  }, []);

  const [item,setItem] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(`https://api.mercadolibre.com/items/${match.params.id}`);
    const item = await fetchItem.json();
    console.log(item);
    setItem(item);
  }

  return (
     <div className="app__container section__listing-products">
      
          <h1>{item.title}</h1> 
           <img src={item.thumbnail} alt=""/>      
     </div>
  );
}

export default ProductDetail;
