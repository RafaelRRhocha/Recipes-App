import React from 'react';
import { Link } from 'react-router-dom';
import mealIcon from '../images/mealIcon.svg';
import drinkIcon from '../images/drinkIcon.svg';
import './Footer.css';

export default function Footer() {
  return (
    <footer data-testid="footer">
      <Link to="/foods">
        <img
          src={ mealIcon }
          alt="food icon"
          data-testid="food-bottom-btn"
        />
      </Link>
      <Link to="/drinks">
        <img
          src={ drinkIcon }
          alt="drink icon"
          data-testid="drinks-bottom-btn"
        />
      </Link>
    </footer>
  );
}
