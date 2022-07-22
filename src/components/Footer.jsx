import React from 'react';
import { Link } from 'react-router-dom';
import mealIcon from '../images/mealIcon.svg';
import drinkIcon from '../images/drinkIcon.svg';

export default function Footer() {
  return (
    <footer
      data-testid="footer"
      className={ `bottom-0
        fixed
        z-20
        flex
        items-center
        justify-center
        gap-10
        p-3
        bg-zinc-300
        w-[100%]` }
    >
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
