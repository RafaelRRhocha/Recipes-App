import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import dataContext from '../context/MyContext';

export default function RecipesForFoods() {
  const { makeFetchCategory, foods, setFoods } = useContext(dataContext);

  const [categoryButton, setCategoryButton] = useState([]);
  const [clicked, setClicked] = useState(false);

  const makeFetch = async () => {
    const requestApi = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const finishJson = await requestApi.json();
    setFoods(finishJson.meals.filter((_, i) => i < '12'));
  };

  const makeCategoryFetch = async () => {
    const requestApiButtons = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
    const finishJsonButtons = await requestApiButtons.json();
    setCategoryButton(finishJsonButtons.meals.filter((_, i) => i < '5'));
  };

  useEffect(() => {
    makeFetch();
    makeCategoryFetch();
  }, []);

  return (
    <div className="bg-[#171212]">
      <div className="flex gap-5 justify-center pt-10 changeFlex">
        {categoryButton && (
          categoryButton.map((btn, i) => (
            <div key={ i }>
              <button
                data-testid={ `${btn.strCategory}-category-filter` }
                type="button"
                className="btn btn-warning btn-outline"
                value={ btn.strCategory }
                onClick={ ({ target: { value } }) => {
                  if (!clicked) {
                    makeFetchCategory(value);
                    setClicked(true);
                  }
                  if (clicked) {
                    makeFetch();
                    setClicked(false);
                  }
                } }
              >
                {btn.strCategory}
              </button>
            </div>
          ))
        )}
        <button
          type="button"
          className="btn btn-warning btn-outline"
          data-testid="All-category-filter"
          onClick={ makeFetch }
        >
          All
        </button>
      </div>
      <div className="flex gap-8 flex-wrap justify-center p-20 reducePaddingCards">
        {foods && (
          foods.map((element, i) => (
            <Link to={ `/foods/${element.idMeal}` } key={ i }>
              <div
                className={ `card
                w-[300px]
                h-[200px]
                bg-base-100
                shadow-xl
                image-full
                transition-all
                hover:scale-105 ` }
                data-testid={ `${i}-recipe-card` }
              >
                <img
                  src={ element.strMealThumb }
                  data-testid={ `${i}-card-img` }
                  alt="card da imagem"
                />
                <div className="card-body">
                  <h2
                    className="text-zinc-200 text-[20px]"
                    data-testid={ `${i}-card-name` }
                  >
                    { element.strMeal }
                  </h2>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
