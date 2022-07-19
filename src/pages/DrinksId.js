/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FoodsRecommendation from '../components/FoodsRecommendations';
import dataContext from '../context/MyContext';

export default function DrinksId() {
  const { idDrinksPage, fetchWithIdForDrinks } = useContext(dataContext);
  const { id } = useParams();

  const dataIdDrinks = idDrinksPage[0];

  useEffect(() => {
    fetchWithIdForDrinks(id);
  }, []);

  return (
    <div className="bg-[#171212] flex flex-col p-10">
      {dataIdDrinks && (
        <>
          <div className="flex gap-4 p-8">
            <img
              src={ dataIdDrinks.strDrinkThumb }
              data-testid="recipe-photo"
              alt="card da imagem"
              className="w-[200px] h-[230px] rounded-lg"
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
              <h2 data-testid="recipe-title">{dataIdDrinks.strDrink}</h2>
              <h2 data-testid="recipe-category">{dataIdDrinks.strAlcoholic}</h2>
            </div>
          </div>
          <div className="flex flex-col p-8 justify-center">
            <h1 className="font-semibold text-[20px]">Ingredients:</h1>
            <p data-testid="0-ingredient-name-and-measure">
              {dataIdDrinks.strIngredient1}
              {dataIdDrinks.strMeasure1}
            </p>
            <p data-testid="1-ingredient-name-and-measure">
              {dataIdDrinks.strIngredient2}
              {dataIdDrinks.strMeasure2}
            </p>
            <p data-testid="2-ingredient-name-and-measure">
              {dataIdDrinks.strIngredient3}
              {dataIdDrinks.strMeasure3}
            </p>
            <p data-testid="3-ingredient-name-and-measure">
              {dataIdDrinks.strIngredient4}
              {dataIdDrinks.strMeasure4}
            </p>
            <p data-testid="4-ingredient-name-and-measure">
              {dataIdDrinks.strIngredient5}
              {dataIdDrinks.strMeasure5}
            </p>
            <p data-testid="5-ingredient-name-and-measure">
              {dataIdDrinks.strIngredient6}
              {dataIdDrinks.strMeasure6}
            </p>
            <p data-testid="6-ingredient-name-and-measure">
              {dataIdDrinks.strIngredient7}
              {dataIdDrinks.strMeasure7}
            </p>
            <p data-testid="7-ingredient-name-and-measure">
              {dataIdDrinks.strIngredient8}
              {dataIdDrinks.strMeasure8}
            </p>
            <p data-testid="8-ingredient-name-and-measure">
              {dataIdDrinks.strIngredient9}
              {dataIdDrinks.strMeasure9}
            </p>
            <p data-testid="9-ingredient-name-and-measure">
              {dataIdDrinks.strIngredient10}
              {dataIdDrinks.strMeasure10}
            </p>
            <p data-testid="10-ingredient-name-and-measure">
              {dataIdDrinks.strIngredient11}
              {dataIdDrinks.strMeasure11}
            </p>
            <p data-testid="11-ingredient-name-and-measure">
              {dataIdDrinks.strIngredient12}
              {dataIdDrinks.strMeasure12}
            </p>
            <p data-testid="12-ingredient-name-and-measure">
              {dataIdDrinks.strIngredient13}
              {dataIdDrinks.strMeasure13}
            </p>
            <p data-testid="13-ingredient-name-and-measure">
              {dataIdDrinks.strIngredient14}
              {dataIdDrinks.strMeasure14}
            </p>
            <p data-testid="14-ingredient-name-and-measure">
              {dataIdDrinks.strIngredient15}
              {dataIdDrinks.strMeasure15}
            </p>
            <p data-testid="15-ingredient-name-and-measure">
              {dataIdDrinks.strIngredient16}
              {dataIdDrinks.strMeasure16}
            </p>
            <p data-testid="16-ingredient-name-and-measure">
              {dataIdDrinks.strIngredient17}
              {dataIdDrinks.strMeasure17}
            </p>
            <p data-testid="17-ingredient-name-and-measure">
              {dataIdDrinks.strIngredient18}
              {dataIdDrinks.strMeasure18}
            </p>
            <p data-testid="18-ingredient-name-and-measure">
              {dataIdDrinks.strIngredient19}
              {dataIdDrinks.strMeasure19}
            </p>
            <p data-testid="19-ingredient-name-and-measure">
              {dataIdDrinks.strIngredient20}
              {dataIdDrinks.strMeasure20}
            </p>
          </div>
          <div className="flex flex-col gap-2 p-8">
            <h1 className="font-semibold text-[20px]">Preparation Mode:</h1>
            <h2
              data-testid="instructions"
              className="max-w-[70%] text-left"
            >
              {dataIdDrinks.strInstructions}
            </h2>
          </div>
          <FoodsRecommendation />
        </>
      )}
    </div>
  );
}
