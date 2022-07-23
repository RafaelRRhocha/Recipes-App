import React, { useState, useEffect } from 'react';

export default function FoodsRecommendation() {
  const [foodsRecommendation, setfoodsRecommendation] = useState([]);
  const [changeMargin, setChangeMargin] = useState(0);

  const fetchMealsRecommendations = async () => {
    const requestApiRecommendations = await fetch(
      'https://www.themealdb.com/api/json/v1/1/search.php?s=',
    );
    const finishJsonRecommendations = await requestApiRecommendations.json();
    setfoodsRecommendation(
      finishJsonRecommendations.meals.filter((_, i) => i < '6'),
    );
  };

  const handleLeftMargin = () => {
    let x = changeMargin + Math.round(window.innerWidth / '2');
    if (x > 0) {
      x = 0;
    }
    setChangeMargin(x);
  };

  const handleRigthMargin = () => {
    let x = changeMargin - Math.round(window.innerWidth / '2');
    const fixScrollRight = foodsRecommendation.length * '150';
    if (window.innerWidth - fixScrollRight > x) {
      x = window.innerWidth - fixScrollRight - '60';
    }
    setChangeMargin(x);
  };

  useEffect(() => {
    fetchMealsRecommendations();
  }, []);

  return (
    <div className="overflow-x-hidden scroll-smooth">
      <button
        onClick={ handleLeftMargin }
        type="button"
        className="btn btn-circle absolute w-[40px] h-[400px] left-0 z-40 cursor-pointer"
      >
        ❮
      </button>
      <button
        onClick={ handleRigthMargin }
        type="button"
        className="btn btn-circle absolute w-[40px] h-[400px] right-0 z-40"
      >
        ❯
      </button>
      <div
        style={ { marginLeft: changeMargin, width: foodsRecommendation.length * '230' } }
        className="flex flex-row gap-6 transitionFoods"
      >
        {foodsRecommendation.length
          && foodsRecommendation.map((e, i) => (
            <div
              key={ i }
              className="flex gap-9 hover:animate-pulse cursor-pointer change-w"
              data-testid={ `${i}-recomendation-card` }
            >
              <div className="card w-[300px] h-[400px] bg-base-100 shadow-xl">
                <img src={ e.strMealThumb } alt="Foods" className="w-[100%]" />
                <div className="card-body mt-[-10px]">
                  <h2
                    className="card-title"
                    data-testid={ `${i}-recomendation-title` }
                  >
                    {e.strMeal}
                  </h2>
                  <p>Clich Here!</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}