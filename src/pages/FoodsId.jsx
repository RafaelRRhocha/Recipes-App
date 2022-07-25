/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import clipboardCopy from 'clipboard-copy';
import { Link, useParams } from 'react-router-dom';
import DrinksRecommendations from '../components/DrinksRecommendations';
import YoutubeEmbed from '../components/YoutubeEmbed';
import dataContext from '../context/MyContext';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import {
  saveFavoriteRecipes,
  removeFavoriteRecipe,
  readFavoriteRecipes,
} from '../localStorage/userStorage';

export default function FoodsId() {
  const {
    idFoodsPage,
    fetchWithIdForFoods,
    buttonRecipe,
    ingredientsFoods,
    measureFoods,
  } = useContext(dataContext);
  const { id } = useParams();

  const [heart, setHeart] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const replaceUrl = idFoodsPage.strYoutube && (
    idFoodsPage.strYoutube.replace('watch?v=', 'embed/')
  );

  const setHeartFavorite = () => {
    if (heart) {
      setHeart(false);
      removeFavoriteRecipe(id);
    } else {
      setHeart(true);
      saveFavoriteRecipes({
        id,
        type: 'food',
        nationality: idFoodsPage.strArea,
        category: idFoodsPage.strCategory,
        alcoholicOrNot: '',
        name: idFoodsPage.strMeal,
        image: idFoodsPage.strMealThumb,
      });
    }
  };

  const setHeartForTrue = () => {
    const favoriteRecipes = readFavoriteRecipes();
    setHeart(favoriteRecipes && favoriteRecipes.some((e) => e.id === id));
  };

  useEffect(() => {
    fetchWithIdForFoods(id);
    setHeartForTrue();
  }, []);

  return (
    <div className="bg-[#171212] flex flex-col p-10">
      {idFoodsPage && (
        <>
          <div className="flex gap-4 p-8">
            <img
              src={ idFoodsPage.strMealThumb }
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
              <h2 data-testid="recipe-title">{idFoodsPage.strMeal}</h2>
              <h2 data-testid="recipe-category">{idFoodsPage.strCategory}</h2>
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
            {isClicked && <span className="absolute top-[-40px]">Link copied!</span> }
          </div>
          <div className="flex flex-col gap-2 p-8 justify-center">
            <h1 className="font-semibold text-[20px]">Ingredients:</h1>
            <div className="flex flex-col">
              {ingredientsFoods && ingredientsFoods.map((e, i) => (
                e && (
                  <p
                    data-testid={ `${i}-ingredient-name-and-measure` }
                    key={ i }
                  >
                    {`${e}: ${measureFoods && measureFoods[i]}`}
                  </p>
                )
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2 p-8">
            <h1 className="font-semibold text-[20px]">Preparation Mode:</h1>
            <h2
              data-testid="instructions"
              className="text-left"
            >
              {idFoodsPage.strInstructions}
            </h2>
          </div>
          <YoutubeEmbed url={ replaceUrl } />
          <DrinksRecommendations />
          {buttonRecipe && (
            <Link to={ `/foods/${id}/in-progress` } className="flex justify-center">
              <button
                className="fixed bottom-0 btn btn-secondary"
                type="button"
                data-testid="start-recipe-btn"
              >
                Start Recipe
              </button>
            </Link>
          )}
        </>
      )}
    </div>
  );
}
