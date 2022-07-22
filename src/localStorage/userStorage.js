export const saveUser = (user) => localStorage.setItem('user', JSON.stringify(user));
export const readUser = () => JSON.parse(localStorage.getItem('user'));

export const saveMealsToken = (mealsToken) => {
  localStorage.setItem('mealsToken', JSON.stringify(mealsToken));
};

export const readMealsToken = () => {
  JSON.parse(localStorage.getItem('mealsToken'));
};

export const saveCocktailsToken = (cocktailsToken) => {
  localStorage.setItem('cocktailsToken', JSON.stringify(cocktailsToken));
};

export const readCocktailsToken = () => {
  JSON.parse(localStorage.getItem('cocktailsToken'));
};

export const readFavoriteRecipes = () => {
  const response = localStorage.getItem('favoriteRecipes');
  if (response) {
    return JSON.parse(response);
  } return null;
};

export const saveFavoriteRecipes = (favoriteRecipes) => {
  const respFavorite = readFavoriteRecipes();
  if (respFavorite) {
    localStorage.setItem('favoriteRecipes', (
      JSON.stringify([...respFavorite, favoriteRecipes])
    ));
  } else {
    localStorage.setItem('favoriteRecipes', JSON.stringify([favoriteRecipes]));
  }
};

export const removeFavoriteRecipe = (id) => {
  const respFavorite = readFavoriteRecipes();

  localStorage.setItem('favoriteRecipes', (
    JSON.stringify(respFavorite.filter((e) => e.id !== id))
  ));
};
