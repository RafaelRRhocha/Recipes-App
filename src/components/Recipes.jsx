import React from 'react';
import { useHistory } from 'react-router-dom';
import RecipesForFoods from './RecipesForFoods';
import RecipesForDrinks from './RecipesForDrinks';

export default function Recipes() {
  const isFood = useHistory().location.pathname.includes('foods');

  return (
    <div>
      {isFood ? <RecipesForFoods /> : <RecipesForDrinks />}
    </div>
  );
}
