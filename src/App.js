import React from 'react';
import './App.scss';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResultsPage/SearchResultsPage'
import ProductDetails from './components/ProductDetails/ProductDetailsPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <SearchBar/>
        <Route path="/" />
        <Route path="/SearchResults" component={SearchResults} />
        <Route path="/ProductDetails" component={ProductDetails} />
      </div>
    </Router> 
  );
}

export default App;
