/* eslint-disable react-hooks/exhaustive-deps */
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
  const [idFoodsPage, setIdFoodsPage] = useState([]);
  const [idDrinksPage, setIdDrinksPage] = useState([]);
  const [buttonRecipe, setButtonRecipe] = useState(true);
  const [favoriteDrinksRecipes, setFavoriteDrinksRecipes] = useState(true);
  const [ingredientsDrinks, setIngredientsDrinks] = useState([]);
  const [measureDrinks, setMeasureDrinks] = useState([]);
  const [ingredientsFoods, setIngredientsFoods] = useState([]);
  const [measureFoods, setMeasureFoods] = useState([]);
  const [catchId, setCatchId] = useState(0);

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

  // fetch que filtra a categoria que o user escolhe
  const fetchCategoryFoods = async (value) => {
    const apiCategory = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${value}`);
    const jsonRequestCategory = await apiCategory.json();
    setFoods(jsonRequestCategory.meals.filter((_, i) => i < '12'));
  };

  const fetchCategoryDrinks = async (value) => {
    const apiCategory = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${value}`);
    const jsonRequestCategory = await apiCategory.json();
    setDrinks(jsonRequestCategory.drinks.filter((_, i) => i < '12'));
  };

  // fetch que filtra pelo id do produto que o user escolhe
  const fetchWithIdForFoods = async (value) => {
    const requestApiOfId = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${value}`);
    const finishRequestJson = await requestApiOfId.json();
    const measure = Object.entries(finishRequestJson.meals[0]).reduce((acc, item) => {
      if (item[0].includes('strMeasure')) {
        acc.push(item[1]);
      }
      return acc;
    }, []);
    const ingr = Object.entries(finishRequestJson.meals[0]).reduce((acc, item) => {
      if (item[0].includes('strIngredient')) {
        acc.push(item[1]);
      }
      return acc;
    }, []);
    setMeasureFoods(measure);
    setIngredientsFoods(ingr);
    setIdFoodsPage(finishRequestJson.meals[0]);
  };

  const fetchWithIdForDrinks = async (value) => {
    const requestApiOfId = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${value}`);
    const finishRequestJson = await requestApiOfId.json();
    const ingr = Object.entries(finishRequestJson.drinks[0]).reduce((acc, element) => {
      if (element[0].includes('strIngredient')) {
        acc.push(element[1]);
      }
      return acc;
    }, []);
    const measure = Object.entries(finishRequestJson.drinks[0]).reduce((acc, element) => {
      if (element[0].includes('strMeasure')) {
        acc.push(element[1]);
      }
      return acc;
    }, []);
    setMeasureDrinks(measure);
    setIngredientsDrinks(ingr);
    setIdDrinksPage(finishRequestJson.drinks[0]);
  };

  const saveInprogressRecipes = (cocktailsP, mealsP) => {
    const respFavorite = JSON.parse(localStorage.getItem('inProgressRecipes'));
    if (!respFavorite && cocktailsP) {
      const cocktailsValue = Object.values(cocktailsP);
      localStorage.setItem('inProgressRecipes', (
        JSON.stringify({
          cocktails: {
            [catchId]: cocktailsValue,
          },
          meals: {},
        })
      ));
    } else if (cocktailsP) {
      localStorage.setItem('inProgressRecipes', (
        JSON.stringify({
          cocktails: {
            ...respFavorite.cocktails,
            [catchId]: cocktailsValue,
          },
          meals: {
            ...respFavorite.meals,
          },
        })
      ));
    }
    if (!respFavorite && mealsP) {
      const mealsPValue = Object.values(mealsP);
      localStorage.setItem('inProgressRecipes', (
        JSON.stringify({
          cocktails: {},
          meals: {
            [catchId]: mealsPValue,
          },
        })
      ));
    } else if (mealsP) {
      localStorage.setItem('inProgressRecipes', (
        JSON.stringify({
          cocktails: {
            ...respFavorite.cocktails,
          },
          meals: {
            ...respFavorite.meals,
            [catchId]: mealsPValue,
          },
        })
      ));
    }
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
    fetchCategoryFoods,
    foods,
    setFoods,
    fetchCategoryDrinks,
    drinks,
    setDrinks,
    idFoodsPage,
    idDrinksPage,
    fetchWithIdForFoods,
    fetchWithIdForDrinks,
    buttonRecipe,
    setButtonRecipe,
    favoriteDrinksRecipes,
    setFavoriteDrinksRecipes,
    ingredientsDrinks,
    measureDrinks,
    ingredientsFoods,
    measureFoods,
    setCatchId,
    saveInprogressRecipes,
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
