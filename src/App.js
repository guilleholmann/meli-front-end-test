import React from 'react';
import './App.scss';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResultsPage'
import ProductDetails from './components/ProductDetails'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <SearchBar/>
        <Switch>
          <Route path="/" exact/>
          <Route path="/items" exact component={SearchResults} />
          <Route path="/items/:id" component={ProductDetails} />
        </Switch>
      </div>
    </Router> 
  );
}

export default App;
