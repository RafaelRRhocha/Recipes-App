import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import dataContext from '../context/MyContext';

export default function SearchBar({ headerTitle }) {
  const { setTypeSearch, makeFetch, makeFetchDrinks } = useContext(dataContext);

  const verifyFetch = () => {
    if (headerTitle === 'Foods') {
      makeFetch();
    }
    if (headerTitle === 'Drinks') {
      makeFetchDrinks();
    }
  };

  return (
    <div>
      <input
        onClick={ () => setTypeSearch('ingrediente') }
        type="radio"
        data-testid="ingredient-search-radio"
        name="select-fetch"
      />
      {' '}
      ingredient
      <input
        onClick={ () => setTypeSearch('nome') }
        type="radio"
        data-testid="name-search-radio"
        name="select-fetch"
      />
      {' '}
      Name
      <input
        onClick={ () => setTypeSearch('primeira-letra') }
        type="radio"
        data-testid="first-letter-search-radio"
        name="select-fetch"
      />
      {' '}
      First Letter
      <button
        onClick={ verifyFetch }
        type="button"
        data-testid="exec-search-btn"
      >
        Search
      </button>
    </div>
  );
}

SearchBar.propTypes = {
  headerTitle: PropTypes.string.isRequired,
};
