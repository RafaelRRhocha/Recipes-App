import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import dataContext from './MyContext';

const firstLetter = 'primeira-letra';
const undefinedSearch = 'Sorry, we haven\'t found any recipes for these filters.';

export default function Provider({ children }) {
  const [searchInput, setSearchInput] = useState('');
  const [typeSearch, setTypeSearch] = useState('');
  const [response, setResponse] = useState(null);
  const [responseDrinks, setResponseDrinks] = useState(null);
  const [foods, setFoods] = useState([]);
  const [drinks, setDrinks] = useState([]);

  const makeFetchFoods = async () => {
    if (typeSearch === 'ingrediente') {
      try {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`);
        const jsonRequest = await api.json();
        setResponse(jsonRequest.meals.filter((_, i) => i < '12'));
      } catch (error) {
        global.alert(undefinedSearch);
      }
    }
    if (typeSearch === 'nome') {
      try {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`);
        const jsonRequest = await api.json();
        setResponse(jsonRequest.meals.filter((_, i) => i < '12'));
      } catch (error) {
        global.alert(undefinedSearch);
      }
    }
    if (typeSearch === firstLetter && searchInput.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    }
    if (typeSearch === firstLetter) {
      try {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchInput}`);
        const jsonRequest = await api.json();
        setResponse(jsonRequest.meals.filter((_, i) => i < '12'));
      } catch (error) {
        global.alert(undefinedSearch);
      }
    }
    return null;
  };

  const makeFetchDrinks = async () => {
    if (typeSearch === 'ingrediente') {
      try {
        const api = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchInput}`);
        const jsonRequest = await api.json();
        setResponseDrinks(jsonRequest.drinks.filter((_, i) => i < '12'));
      } catch (error) {
        global.alert(undefinedSearch);
      }
    }
    if (typeSearch === 'nome') {
      try {
        const api = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`);
        const jsonRequest = await api.json();
        setResponseDrinks(jsonRequest.drinks.filter((_, i) => i < '12'));
      } catch (error) {
        global.alert(undefinedSearch);
      }
    }
    if (typeSearch === firstLetter && searchInput.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    }
    if (typeSearch === firstLetter) {
      try {
        const api = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchInput}`);
        const jsonRequest = await api.json();
        setResponseDrinks(jsonRequest.drinks.filter((_, i) => i < '12'));
      } catch (error) {
        global.alert(undefinedSearch);
      }
    }
    return null;
  };

  const makeFetchCategory = async (value) => {
    const apiCategory = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${value}`);
    const jsonRequestCategory = await apiCategory.json();
    setFoods(jsonRequestCategory.meals.filter((_, i) => i < '12'));
  };

  const makeFetchCategoryDrinks = async (value) => {
    const apiCategory = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${value}`);
    const jsonRequestCategory = await apiCategory.json();
    setDrinks(jsonRequestCategory.drinks.filter((_, i) => i < '12'));
  };

  useEffect(() => {
    makeFetchFoods();
    makeFetchDrinks();
  }, []);

  const finishRequestApi = {
    searchInput,
    setSearchInput,
    typeSearch,
    setTypeSearch,
    response,
    responseDrinks,
    makeFetchFoods,
    makeFetchDrinks,
    makeFetchCategory,
    foods,
    setFoods,
    makeFetchCategoryDrinks,
    drinks,
    setDrinks,
  };

  return (
    <dataContext.Provider value={ finishRequestApi }>
      {children}
    </dataContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
