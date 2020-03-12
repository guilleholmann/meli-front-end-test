import React, { useState } from "react";
import "./SearchBar.scss";

const SearchBar = () => {
  const [inputValue, setIputvalue] = useState('')

  const onSubmit = () => {

  }

  return (
    <header className="app__header">
      <div className="app__nav app__container">
        <a className="app__logo" href="/" tabIndex="4">
          <span>Mercado Libre - Donde comprar y vender de todo</span>
        </a>
        <form
          className="nav__search-form"
          action=""
          method="GET"
          role="search"
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = `/items?search=${inputValue}`;
          }}
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
