import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import dataContext from '../context/MyContext';

export default function Drinks() {
  const { responseDrinks } = useContext(dataContext);

  const idDrinks = () => <Redirect to={ `/drinks/${responseDrinks[0].idDrink}` } />;

  return (
    <>
      <Header title="Drinks" searchBool />
      {responseDrinks && (
        <div>
          {responseDrinks.length === 1 ? (
            idDrinks()
          ) : (
            responseDrinks.map((element, i) => (
              <div data-testid={ `${i}-recipe-card` } key={ i }>
                <img
                  src={ element.strDrinkThumb }
                  data-testid={ `${i}-card-img` }
                  alt="card da imagem"
                />
                <p data-testid={ `${i}-card-name` }>
                  { element.strDrink }
                </p>
              </div>
            ))
          )}
        </div>
      )}
      <Footer />
    </>
  );
}
