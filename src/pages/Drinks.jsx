import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Recipes from '../components/Recipes';
import dataContext from '../context/MyContext';

export default function Drinks() {
  const { responseDrinks, fetchWithIdForDrinks } = useContext(dataContext);

  const idDrinks = () => <Redirect to={ `/drinks/${responseDrinks[0].idDrink}` } />;

  return (
    <div className="bg-[#171212]">
      <Header title="Drinks" searchBool />
      {!responseDrinks && (
        <Recipes />
      )}
      {responseDrinks && (
        <div className="flex gap-8 flex-wrap justify-center p-20 reducePaddingCards">
          {responseDrinks.length === 1 ? (
            idDrinks()
          ) : (
            responseDrinks.map((element, i) => (
              <Link to={ `/drinks/${element.idDrink}` } key={ i }>
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
                  <button
                    type="button"
                    onClick={ () => fetchWithIdForDrinks(element.idDrink) }
                  >
                    <img
                      src={ element.strDrinkThumb }
                      data-testid={ `${i}-card-img` }
                      alt="card da imagem"
                    />
                  </button>
                  <div className="card-body">
                    <h2
                      className="text-zinc-200 text-[20px]"
                      data-testid={ `${i}-card-name` }
                    >
                      { element.strDrink }
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
