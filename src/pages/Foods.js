import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import dataContext from '../context/MyContext';

export default function Foods() {
  const { response } = useContext(dataContext);

  const idFood = () => <Redirect to={ `/foods/${response[0].idMeal}` } />;

  return (
    <>
      <Header title="Foods" searchBool />
      {response && (
        <div>
          {response.length === 1 ? (
            idFood()
          ) : (
            response.map((element, i) => (
              <div data-testid={ `${i}-recipe-card` } key={ i }>
                <img
                  src={ element.strMealThumb }
                  data-testid={ `${i}-card-img` }
                  alt="card da imagem"
                />
                <p data-testid={ `${i}-card-name` }>
                  { element.strMeal }
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
