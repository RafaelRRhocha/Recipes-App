import React, { useState, useEffect } from 'react';
import clipboardCopy from 'clipboard-copy';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';
import {
  readFavoriteRecipes,
  removeFavoriteRecipe,
} from '../localStorage/userStorage';
import blackHeartIcon from '../images/blackHeartIcon.svg';

export default function FavoriteRecipes() {
  const [favorites, setFavorites] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  const filterButton = (type) => {
    const filterRecipes = readFavoriteRecipes();
    setFavorites(filterRecipes && filterRecipes.filter((recipe) => type === recipe.type));
  };

  const removeFavorites = (id) => {
    removeFavoriteRecipe(id);
    setFavorites((old) => old.filter((item) => item.id !== id));
  };

  useEffect(() => {
    const favoriteRecipes = readFavoriteRecipes();
    setFavorites(favoriteRecipes);
  }, []);

  return (
    <>
      <Header title="Favorite Recipes" searchBool={ false } />
      <div className="bg-[#171212] flex flex-col p-10 z-40">
        <div className="flex gap-2 justify-center p-3">
          <button
            type="button"
            data-testid="filter-by-food-btn"
            onClick={ () => filterButton('food') }
            className="btn text-black hover:text-white hover:bg-orange-400 bg-orange-500"
          >
            Foods
          </button>
          <button
            type="button"
            data-testid="filter-by-drink-btn"
            onClick={ () => filterButton('drink') }
            className="btn text-black hover:text-white bg-[#00ffff] hover:bg-blue-500"
          >
            Drinks
          </button>
          <button
            type="button"
            data-testid="filter-by-all-btn"
            onClick={ () => setFavorites(readFavoriteRecipes()) }
            className="btn btn-warning text-black hover:text-white bg-yellow-400"
          >
            All
          </button>
        </div>
        <div className="flex justify-center">
          <div
            className={ `bg-[#171212]
              flex
              flex-row
              justify-center
              w-[95%]
              gap-4
              p-10 
              changeFlexCol` }
          >
            {favorites && favorites.map((e, i) => (
              <div
                key={ i }
                className="cursor-pointer"
              >
                <Link to={ `/${e.type}s/${e.id}` }>
                  <div className="flex justify-center">
                    <img
                      src={ e.image }
                      alt={ e.name }
                      data-testid={ `${i}-horizontal-image` }
                      className="w-[100px]"
                    />
                  </div>
                  <div className="card-body items-center text-center">
                    <p
                      data-testid={ `${i}-horizontal-name` }
                      className="card-title"
                    >
                      {e.name}
                    </p>
                    <p
                      data-testid={ `${i}-horizontal-top-text` }
                    >
                      {e.type === 'food'
                        ? `${e.nationality} - ${e.category}`
                        : e.alcoholicOrNot}
                    </p>
                  </div>
                </Link>
                <div className="card-actions gap-5 justify-center items-center">
                  <button
                    type="button"
                    data-testid={ `${i}-horizontal-share-btn` }
                    onClick={ () => {
                      clipboardCopy(`${window.location.origin}/${e.type}s/${e.id}`);
                      setIsClicked(true);
                      setTimeout(() => {
                        setIsClicked(false);
                      }, '1000');
                    } }
                    src={ shareIcon }
                  >
                    <img src={ shareIcon } alt="icon" className="w-[35px]" />
                  </button>
                  <button
                    onClick={ () => removeFavorites(e.id) }
                    type="button"
                  >
                    <img
                      src={ blackHeartIcon }
                      alt="favoritar"
                      className="w-10"
                      data-testid={ `${i}-horizontal-favorite-btn` }
                    />
                  </button>
                  {isClicked && <span>Link copied!</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
