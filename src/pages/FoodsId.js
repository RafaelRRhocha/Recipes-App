/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DrinksRecommendations from '../components/DrinksRecommendations';
import YoutubeEmbed from '../components/YoutubeEmbed';
import dataContext from '../context/MyContext';

export default function FoodsId() {
  const { idFoodsPage, fetchWithIdForFoods } = useContext(dataContext);
  const { id } = useParams();

  const dataIdFoods = idFoodsPage[0];

  const replaceUrl = dataIdFoods && dataIdFoods.strYoutube.replace('watch?v=', 'embed/');

  useEffect(() => {
    fetchWithIdForFoods(id);
  }, []);

  return (
    <div className="bg-[#171212] flex flex-col p-10">
      {dataIdFoods && (
        <>
          <div className="flex gap-4 p-8">
            <img
              src={ dataIdFoods.strMealThumb }
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
              <h2 data-testid="recipe-title">{dataIdFoods.strMeal}</h2>
              <h2 data-testid="recipe-category">{dataIdFoods.strCategory}</h2>
            </div>
          </div>
          <div className="flex flex-col gap-2 p-8 justify-center">
            <h1 className="font-semibold text-[20px]">Ingredients:</h1>
            <p data-testid="0-ingredient-name-and-measure">
              {dataIdFoods.strIngredient1}
              {dataIdFoods.strMeasure1}
            </p>
            <p data-testid="1-ingredient-name-and-measure">
              {dataIdFoods.strIngredient2}
              {dataIdFoods.strMeasure2}
            </p>
            <p data-testid="2-ingredient-name-and-measure">
              {dataIdFoods.strIngredient3}
              {dataIdFoods.strMeasure3}
            </p>
            <p data-testid="3-ingredient-name-and-measure">
              {dataIdFoods.strIngredient4}
              {dataIdFoods.strMeasure4}
            </p>
            <p data-testid="4-ingredient-name-and-measure">
              {dataIdFoods.strIngredient5}
              {dataIdFoods.strMeasure5}
            </p>
            <p data-testid="5-ingredient-name-and-measure">
              {dataIdFoods.strIngredient6}
              {dataIdFoods.strMeasure6}
            </p>
            <p data-testid="6-ingredient-name-and-measure">
              {dataIdFoods.strIngredient7}
              {dataIdFoods.strMeasure7}
            </p>
            <p data-testid="7-ingredient-name-and-measure">
              {dataIdFoods.strIngredient8}
              {dataIdFoods.strMeasure8}
            </p>
            <p data-testid="8-ingredient-name-and-measure">
              {dataIdFoods.strIngredient9}
              {dataIdFoods.strMeasure9}
            </p>
            <p data-testid="9-ingredient-name-and-measure">
              {dataIdFoods.strIngredient10}
              {dataIdFoods.strMeasure10}
            </p>
            <p data-testid="10-ingredient-name-and-measure">
              {dataIdFoods.strIngredient11}
              {dataIdFoods.strMeasure11}
            </p>
            <p data-testid="11-ingredient-name-and-measure">
              {dataIdFoods.strIngredient12}
              {dataIdFoods.strMeasure12}
            </p>
            <p data-testid="12-ingredient-name-and-measure">
              {dataIdFoods.strIngredient13}
              {dataIdFoods.strMeasure13}
            </p>
            <p data-testid="13-ingredient-name-and-measure">
              {dataIdFoods.strIngredient14}
              {dataIdFoods.strMeasure14}
            </p>
            <p data-testid="14-ingredient-name-and-measure">
              {dataIdFoods.strIngredient15}
              {dataIdFoods.strMeasure15}
            </p>
            <p data-testid="15-ingredient-name-and-measure">
              {dataIdFoods.strIngredient16}
              {dataIdFoods.strMeasure16}
            </p>
            <p data-testid="16-ingredient-name-and-measure">
              {dataIdFoods.strIngredient17}
              {dataIdFoods.strMeasure17}
            </p>
            <p data-testid="17-ingredient-name-and-measure">
              {dataIdFoods.strIngredient18}
              {dataIdFoods.strMeasure18}
            </p>
            <p data-testid="18-ingredient-name-and-measure">
              {dataIdFoods.strIngredient19}
              {dataIdFoods.strMeasure19}
            </p>
            <p data-testid="19-ingredient-name-and-measure">
              {dataIdFoods.strIngredient20}
              {dataIdFoods.strMeasure20}
            </p>
          </div>
          <div className="flex flex-col gap-2 p-8">
            <h1 className="font-semibold text-[20px]">Preparation Mode:</h1>
            <h2
              data-testid="instructions"
              className="max-w-[70%] text-left"
            >
              {dataIdFoods.strInstructions}
            </h2>
          </div>
          <YoutubeEmbed url={ replaceUrl } />
          <DrinksRecommendations />
        </>
      )}
    </div>
  );
}
