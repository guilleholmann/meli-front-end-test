import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const NotFoundPage = props => {
  return (
    <div className="not-found-page app__container">
      <div className="not-found-page__container">
        <h1>Oops!</h1>
        <p>Parece que esta página no existe</p>
        <Link to="/">Ir a la página principal</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
