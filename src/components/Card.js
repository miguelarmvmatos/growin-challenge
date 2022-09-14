import React from "react";
import { Link } from "react-router-dom";

function Card({ id, thumbnail, name }) {
  return (
    <Link to={`/${id}`}>
      <div className="card">
        <img src={thumbnail} alt="thumbnail" />
        <h1 className="card-name">{name}</h1>
      </div>
    </Link>
  );
}

export default Card;
