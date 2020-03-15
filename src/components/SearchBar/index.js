import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import "./styles.scss";

const SearchBar = ({ location }) => {
  const [inputValue, setIputvalue] = useState('');

  useEffect(() => {
    // const urlPath = queryString.parse(location.search);
    // console.log('urlPath: ', urlPath);
    // if(search) {
    //   setIputvalue(search);
    // }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if(inputValue !== '') {
      window.location.href = `/items?search=${inputValue}`;
    }
  }

  return (
    <header className="app__header">
      <div className="nav app__container">
        <a className="nav__logo" href="/" tabIndex="4">
          <span>Mercado Libre - Donde comprar y vender de todo</span>
        </a>
        <form
          className="nav__search-form"
          action=""
          method="GET"
          role="search"
          onSubmit={onSubmit}
        >
          <input
            type="text"
            className="nav__search-input"
            aria-label="Ingresá lo que quieras encontrar"
            placeholder="Nunca dejes de buscar"
            maxLength="120"
            tabIndex="2"
            value={inputValue}
            onChange={e => setIputvalue(e.target.value)}
          />
          <button type="submit" className="nav__search-btn" tabIndex="3">
            <div
              role="img"
              aria-label="Buscar"
              className="nav__icon-search"
            ></div>
          </button>
        </form>
      </div>
    </header>
  );
};

export default SearchBar;
