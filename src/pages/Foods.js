import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipesForFoods from '../components/RecipesForFoods';
import dataContext from '../context/MyContext';

export default function Foods() {
  const { response } = useContext(dataContext);

  const idFood = () => <Redirect to={ `/foods/${response[0].idMeal}` } />;

  return (
    <div className="bg-[#171212]">
      <Header title="Foods" searchBool />
      {!response && (
        <RecipesForFoods />
      )}
      {response && (
        <div className="flex gap-8 flex-wrap justify-center p-20 reducePaddingCards">
          {response.length === 1 ? (
            idFood()
          ) : (
            response.map((element, i) => (
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
      )}
      <Footer />
    </div>
  );
}
