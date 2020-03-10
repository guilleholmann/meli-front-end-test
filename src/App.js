import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="app__header">
        <div className="app__nav app__container">
          <a className="app__logo" href="/" tabIndex="4"><span>Mercado Libre - Donde comprar y vender de todo</span></a>
          <form className="nav__search-form" action="" method="GET" role="search">
            <input type="text" className="nav__search-input" aria-label="Ingresá lo que quieras encontrar" name="as_word" placeholder="Nunca dejes de buscar" maxLength="120" autoFocus="" autoCapitalize="off" autoCorrect="off" spellCheck="false" autoComplete="off" tabIndex="2"/>
              <button type="submit" className="nav__search-btn" tabIndex="3"><div role="img" aria-label="Buscar" className="nav__icon-search"></div>
              </button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
