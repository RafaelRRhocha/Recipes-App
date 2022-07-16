import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import dataContext from '../context/MyContext';

export default function SearchBar({ headerTitle }) {
  const { setTypeSearch, makeFetchFoods, makeFetchDrinks } = useContext(dataContext);

  const verifyFetch = () => {
    if (headerTitle === 'Foods') {
      makeFetchFoods();
    }
    if (headerTitle === 'Drinks') {
      makeFetchDrinks();
    }
  };

  return (
    <div className="flex gap-2 form-control">
      <div className="flex flex-row">
        <label htmlFor="ingrediente" className="label p-4 cursor-pointer">
          <span className="label-text text-black">Ingrediente</span>
          <input
            onClick={ () => setTypeSearch('ingrediente') }
            type="radio"
            data-testid="ingredient-search-radio"
            name="select-fetch"
            id="ingrediente"
            className="radio checked:bg-red-500"
          />
        </label>
        <label htmlFor="nome" className="label p-4 cursor-pointer">
          <span className="label-text text-black">Name</span>
          <input
            onClick={ () => setTypeSearch('nome') }
            type="radio"
            data-testid="name-search-radio"
            name="select-fetch"
            id="nome"
            className="radio checked:bg-red-500"
          />
        </label>
        <label htmlFor="First Letter" className="label p-4 cursor-pointer">
          <span className="label-text text-black">First Letter</span>
          <input
            onClick={ () => setTypeSearch('primeira-letra') }
            type="radio"
            data-testid="first-letter-search-radio"
            name="select-fetch"
            id="First Letter"
            className="radio checked:bg-red-500"
          />
        </label>
      </div>
      <div className="flex justify-center">
        <button
          onClick={ verifyFetch }
          type="button"
          data-testid="exec-search-btn"
          className="btn btn-warning w-[70%]"
        >
          Search
        </button>
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  headerTitle: PropTypes.string.isRequired,
};
