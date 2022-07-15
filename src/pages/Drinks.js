import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import dataContext from '../context/MyContext';

export default function Drinks() {
  const { responseDrinks } = useContext(dataContext);

  const idDrinks = () => <Redirect to={ `/drinks/${responseDrinks[0].idDrink}` } />;

  return (
    <div className="bg-[#171212]">
      <Header title="Drinks" searchBool />
      {!responseDrinks && (
        <p
          className="text-zinc-100 text-[20px] text-center mt-[10%]"
        >
          Nenhum item encontrado
        </p>
      )}
      {responseDrinks && (
        <div className="flex gap-8 flex-wrap justify-center p-20 reducePaddingCards">
          {responseDrinks.length === 1 ? (
            idDrinks()
          ) : (
            responseDrinks.map((element, i) => (
              <div
                className="card w-[300px] h-[200px] bg-base-100 shadow-xl image-full"
                data-testid={ `${i}-recipe-card` }
                key={ i }
              >
                <img
                  src={ element.strDrinkThumb }
                  data-testid={ `${i}-card-img` }
                  alt="card da imagem"
                />
                <div className="card-body">
                  <h2 className="text-zinc-200" data-testid={ `${i}-card-name` }>
                    { element.strDrink }
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
