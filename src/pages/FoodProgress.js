/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import clipboardCopy from 'clipboard-copy';
import dataContext from '../context/MyContext';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import {
  saveFavoriteRecipes,
  removeFavoriteRecipe,
  readFavoriteRecipes,
} from '../localStorage/userStorage';

export default function FoodProgress() {
  const {
    idFoodsPage,
    fetchWithIdForFoods,
    ingredientsFoods,
    setCatchId,
    saveInprogressRecipes,
  } = useContext(dataContext);
  const { id } = useParams();
  setCatchId(id);
  const [heart, setHeart] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [arrCheckbox, setArrCheckbox] = useState([]);
  const [allCheckbox, setAllCheckbox] = useState(true);

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

  const arrChecks = JSON.parse(localStorage.getItem('check'));
  const createClickIngredient = (name) => {
    if (arrCheckbox && arrCheckbox.includes(name)) {
      localStorage.setItem('check', (
        JSON.stringify(arrCheckbox.filter((element) => (
          element !== name
        )))
      ));
      setArrCheckbox(arrCheckbox.filter((element) => (
        element !== name
      )));
    } else if (!arrCheckbox.includes(name) && !arrChecks) {
      localStorage.setItem('check', (
        JSON.stringify([name])
      ));
      setArrCheckbox(arrCheckbox.length === 0 ? (
        [name]
      ) : (
        [...arrCheckbox, name]
      ));
    } else if (arrChecks) {
      localStorage.setItem('check', (
        JSON.stringify([...arrChecks, name])
      ));
      setArrCheckbox(arrCheckbox.length === 0 ? (
        [name]
      ) : (
        [...arrCheckbox, name]
      ));
    }
  };

  const verifyCheckBox = () => {
    const check = document.querySelectorAll('.itemCheck');

    check.forEach((e, i) => {
      if (check[i].checked && i < check.length) {
        setAllCheckbox(false);
      } else {
        setAllCheckbox(true);
      }
    });
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
              <h2 data-testid="recipe-category">{idFoodsPage.strAlcoholic}</h2>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex flex-col p-8 justify-center">
              <h1 className="font-semibold text-[20px]">Ingredients:</h1>
              {ingredientsFoods && ingredientsFoods.map((e, i) => (
                <div key={ i }>
                  {e && (
                    <div
                      className="flex gap-2 p-[2px]"
                      data-testid={ `${i}-ingredient-step` }
                    >
                      <input
                        type="checkbox"
                        className="checkbox checkbox-secondary itemCheck"
                        name={ e }
                        onChange={ ({ target: { name } }) => {
                          createClickIngredient(name);
                          verifyCheckBox();
                        } }
                        checked={ !!(arrChecks && arrChecks.includes(e)) }
                      />
                      <p
                        className={ `${arrChecks && arrChecks.includes(e) ? (
                          'line-through'
                        ) : null}` }
                      >
                        {e}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-[-34px]">
              <h1 className="font-semibold text-[20px]">Preparation Mode:</h1>
              <h2
                data-testid="instructions"
                className="max-w-[70%] text-left"
              >
                {idFoodsPage.strInstructions}
              </h2>
            </div>
          </div>
          <div
            className={ `flex
            gap-6
            items-center
            justify-center
            bottom-0
            fixed` }
          >
            <Link to="/done-recipes">
              <button
                type="button"
                name={ id }
                data-testid="finish-recipe-btn"
                className="btn btn-success bg-green-500 w-[180px]"
                disabled={ allCheckbox }
                onClick={ () => {
                  saveInprogressRecipes(ingredientsFoods && (
                    ingredientsFoods.filter((e) => e !== null)
                  ));
                } }
              >
                Finish Recipe
              </button>
            </Link>
            <button
              type="button"
              data-testid="share-btn"
              onClick={ () => {
                const url = window.location.href;
                const link = url.slice(0, url.length - +'12');
                clipboardCopy(link);
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
                // className="w-10"
              />
            </button>
            {isClicked && <span className="absolute top-[-40px]">Link copied!</span> }
          </div>
        </>
      )}
    </div>
  );
}
