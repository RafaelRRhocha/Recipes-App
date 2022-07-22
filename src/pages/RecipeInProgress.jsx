import React from 'react';
import { useHistory } from 'react-router-dom';
import DrinkProgress from '../components/DrinkProgress';
import FoodProgress from '../components/FoodProgress';

export default function RecipeInProgress() {
  const isFood = useHistory().location.pathname.includes('foods');

  return (
    <div>
      {isFood ? <FoodProgress /> : <DrinkProgress />}
    </div>
  );
}
