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