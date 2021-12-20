import React from 'react'; 
import { Link } from 'react-router-dom';

import './Card.scss';

const Card = ({title, subtitle, Image, imgDescription, url}) => (
  <div>
    <img src={Image} alt={imgDescription} />
    {title}
    {subtitle}
    
    <Link to={url}>asuhasuh</Link>

  </div>
)

export default Card
