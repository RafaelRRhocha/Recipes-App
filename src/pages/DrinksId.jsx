/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import clipboardCopy from 'clipboard-copy';
import { Link, useParams } from 'react-router-dom';
import FoodsRecommendation from '../components/FoodsRecommendations';
import dataContext from '../context/MyContext';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import {
  saveFavoriteRecipes,
  removeFavoriteRecipe,
  readFavoriteRecipes,
} from '../localStorage/userStorage';

export default function DrinksId() {
  const {
    idDrinksPage,
    fetchWithIdForDrinks,
    buttonRecipe,
    ingredientsDrinks,
    measureDrinks,
  } = useContext(dataContext);
  const { id } = useParams();

  const [heart, setHeart] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const setHeartFavorite = () => {
    if (heart) {
      setHeart(false);
      removeFavoriteRecipe(id);
    } else {
      setHeart(true);
      saveFavoriteRecipes({
        id,
        type: 'drink',
        nationality: '',
        category: idDrinksPage.strCategory,
        alcoholicOrNot: idDrinksPage.strAlcoholic,
        name: idDrinksPage.strDrink,
        image: idDrinksPage.strDrinkThumb,
      });
    }
  };

  const setHeartForTrue = () => {
    const favoriteRecipes = readFavoriteRecipes();
    setHeart(favoriteRecipes && favoriteRecipes.some((e) => e.id === id));
  };

  useEffect(() => {
    fetchWithIdForDrinks(id);
    setHeartForTrue();
  }, []);

  return (
    <div className="bg-[#171212] flex flex-col p-10">
      {idDrinksPage && (
        <>
          <div className="flex gap-4 p-8">
            <img
              src={ idDrinksPage.strDrinkThumb }
              data-testid="recipe-photo"
              alt="card da imagem"
              className="w-[200px] h-[230px] rounded-lg changeImage"
            />
            <div
              className={ `flex
              flex-col
              gap-2
              items-left
              justify-center
              font-semibold
              text-[20px]` }
            >
              <h2 data-testid="recipe-title">{idDrinksPage.strDrink}</h2>
              <h2 data-testid="recipe-category">{idDrinksPage.strAlcoholic}</h2>
            </div>
          </div>
          <div className="flex gap-4 ml-8 items-center">
            <button
              type="button"
              data-testid="share-btn"
              onClick={ () => {
                clipboardCopy(window.location.href);
                setIsClicked(true);
                setTimeout(() => {
                  setIsClicked(false);
                }, '1000');
              } }
            >
              <img src={ shareIcon } alt="icon" className="w-[35px]" />
            </button>
            <button
              onClick={ () => setHeartFavorite() }
              type="button"
            >
              <img
                data-testid="favorite-btn"
                src={ heart ? blackHeartIcon : whiteHeartIcon }
                alt="favoritar"
                className="w-10"
              />
            </button>
            {isClicked && <span>Link copied!</span> }
          </div>
          <div className="flex flex-col p-8 justify-center">
            <h1 className="font-semibold text-[20px]">Ingredients:</h1>
            {ingredientsDrinks && ingredientsDrinks.map((e, i) => (
              <p data-testid={ `${i}-ingredient-name-and-measure` } key={ i }>{e}</p>
            ))}
            {measureDrinks && measureDrinks.map((e, i) => (
              <p data-testid={ `${i}-ingredient-name-and-measure` } key={ i }>{e}</p>
            ))}
          </div>
          <div className="flex flex-col gap-2 p-8">
            <h1 className="font-semibold text-[20px]">Preparation Mode:</h1>
            <h2
              data-testid="instructions"
              className="max-w-[70%] text-left"
            >
              {idDrinksPage.strInstructions}
            </h2>
          </div>
          <FoodsRecommendation />
          {buttonRecipe && (
            <Link to={ `/drinks/${id}/in-progress` } className="flex justify-center">
              <button
                className="fixed bottom-0 btn btn-secondary"
                type="button"
                data-testid="start-recipe-btn"
              >
                Continue Recipe
              </button>
            </Link>
          )}
        </>
      )}
    </div>
  );
}
