import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResultsPage'
import ProductDetails from './components/ProductDetails'
import NotFoundPage from './components/NotFound';
import './App.scss';



function App() {
  return (
    <Router>
      <div className="App">
        <SearchBar/>
        <Switch>
          <Route path="/" exact/>
          <Route path="/items" exact component={SearchResults} />
          <Route path="/items/:id" component={ProductDetails} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router> 
  );
}

export default App;
