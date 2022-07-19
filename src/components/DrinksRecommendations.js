import React, { useState, useEffect } from 'react';

export default function DrinksRecommendations() {
  const [drinkRecommendations, setdrinkRecommendations] = useState([]);
  const [changeMargin, setChangeMargin] = useState(0);

  const fetchDrinksRecommendations = async () => {
    const requestApiRecommendations = await fetch(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
    );
    const finishJsonRecommendations = await requestApiRecommendations.json();
    setdrinkRecommendations(
      finishJsonRecommendations.drinks.filter((_, i) => i < '6'),
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
    const fixScrollRight = drinkRecommendations.length * '150';
    if (window.innerWidth - fixScrollRight > x) {
      x = window.innerWidth - fixScrollRight - '60';
    }
    setChangeMargin(x);
  };

  useEffect(() => {
    fetchDrinksRecommendations();
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
        style={ { marginLeft: changeMargin, width: drinkRecommendations.length * '230' } }
        className="flex flex-row gap-6 transitionFoods"
      >
        {drinkRecommendations.length
          && drinkRecommendations.map((e, i) => (
            <div
              key={ i }
              className="flex gap-9 hover:animate-pulse cursor-pointer change-w"
              data-testid={ `${i}-recomendation-card` }
            >
              <div className="card w-[300px] h-[400px] bg-base-100 shadow-xl">
                <img src={ e.strDrinkThumb } alt="Foods" className="w-[100%]" />
                <div className="card-body mt-[-10px]">
                  <h2
                    className="card-title"
                    data-testid={ `${i}-recomendation-title` }
                  >
                    {e.strDrink}
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
