import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import dataContext from '../context/MyContext';

export default function Foods() {
  const { response } = useContext(dataContext);

  const idFood = () => <Redirect to={ `/foods/${response[0].idMeal}` } />;

  return (
    <div className="bg-[#171212]">
      <Header title="Foods" searchBool />
      {!response && (
        <p
          className="text-zinc-100 text-[20px] text-center mt-[10%]"
        >
          Nenhum item encontrado
        </p>
      )}
      {response && (
        <div className="flex gap-8 flex-wrap justify-center p-20 reducePaddingCards">
          {response.length === 1 ? (
            idFood()
          ) : (
            response.map((element, i) => (
              <div
                className="card w-[300px] h-[200px] bg-base-100 shadow-xl image-full"
                data-testid={ `${i}-recipe-card` }
                key={ i }
              >
                <img
                  src={ element.strMealThumb }
                  data-testid={ `${i}-card-img` }
                  alt="card da imagem"
                />
                <div className="card-body">
                  <h2 className="text-zinc-200" data-testid={ `${i}-card-name` }>
                    { element.strMeal }
                  </h2>
                  <div className="card-actions justify-end">
                    <button type="button" className="btn btn-primary">See Recipe</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
      <Footer />
    </div>
  );
}
