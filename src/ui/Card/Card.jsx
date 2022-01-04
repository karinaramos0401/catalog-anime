import React from 'react'; 
// import { Link } from 'react-router-dom';

import './Card.scss';

const Card = ({coverImage, title, score, seasonYear}) => (
  <div className="card">
    <img className="card__poster"src={coverImage} alt="poster" />
    <div className="footer">
      <div className="card__title">
        <span>{title}</span>
        {/* <img src="./star.svg" alt="star icon" /> */}
        <span>{score}</span>
      </div>
      <span>{seasonYear}</span>
    </div>
  </div>
)

export default Card
