const express = require('express');
const http = require('http');
const cors = require('cors');
const MELI_BASE_URL = 'https://api.mercadolibre.com';
const axios = require('axios');
const app = express();
app.use(cors());
app.server = http.createServer(app);

app.get('/api/items/:id', (req, res) => {

  const productId = req.params.id;
  if(!productId) {
    res.status(400).send('Must provide a valid (id) param');
  }

  axios.all([
    axios.get(`${MELI_BASE_URL}/items/${productId}`),
    axios.get(`${MELI_BASE_URL}/items/${productId}/description`)
  ])
  .then(axios.spread((product, description) => {
    const response = {};    
    const price = product.data.price;
    const splittedPrice = String(price).split('.');
    const dec = splittedPrice[1];

    response.author = {
      name: 'Guillermo',
      lastname: 'Holmann'
    };

    response.item = {
      id: product.data.id,
      title: product.data.title,
      price: {
        currency: product.data.currency_id,
        amount: Math.trunc(price),
        decimals: dec? (String(dec).length === 1 ? String(dec) + '0' : String(dec)) : '00',
      },
      picture: product.data.thumbnail,
      condition: product.data.condition,
      free_shipping: product.data.shipping.free_shipping,
      sold_quantity: product.data.sold_quantity,
      description: description.data.plain_text,
      category_id: product.data.category_id,
    }

    return response;
  }))
  .then(response => {
    if(response.item.category_id && response.item.category_id !== '') {
      axios.get(`${MELI_BASE_URL}/categories/${response.item.category_id}`)
      .then(({data}) => {
        response.item.categories = data.path_from_root.map(cat => cat.name);
        delete response.item.category_id;
        res.status(200).send(response);
      })
      .catch(err => {
        delete response.item.category_id;
        response.item.categories = [];
        res.status(200).send(response);
      });
    } else {
      response.item.categories = [];
      res.status(200).send(response);
    }
  })
  .catch(err => res.status(400).send(err));
}); 

app.get('/api/items', (req, res) => {
    const query = req.query.q;
    if(!query) {
      res.status(400).send('Missing query param');
    }
  
    axios.get(`${MELI_BASE_URL}/sites/MLA/search?q=:${query}`)
      .then(({
        data
      }) => {
        const foundCategories = data.filters.find(f => f.id === 'category');
        const result = {};
  
        result.author = {
          name: 'Guillermo',
          lastname: 'Holmann'
        };
  
        result.categories = foundCategories ?
          foundCategories.values[0].path_from_root.map(cat => cat.name) : [];
  
        result.items = data.results.slice(0, 4).map(r => {
          const price = r.price;
          const splittedPrice = String(price).split('.');
          const priceDecimals = splittedPrice[1];
  
          return {
            id: r.id,
            title: r.title,
            price: {
              currency: r.currency_id,
              amount: splittedPrice[0],
              decimals: priceDecimals? (String(priceDecimals).length === 1 ? String(priceDecimals) + '0' : String(priceDecimals)) : '00',
            },
            picture: r.thumbnail,
            condition: r.condition,
            free_shipping: r.shipping.free_shipping,
            address: r.address.state_name,
          };
        });
  
        res.status(200).send(result);
      })
      .catch(err => res.status(400).send(err));
  });

app.server.listen(3002);
console.log(`Listening on http://localhost:${app.server.address().port}/api`);