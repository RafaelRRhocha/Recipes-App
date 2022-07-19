import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Foods from './pages/Foods';
import FoodsId from './pages/FoodsId';
import FoodProgress from './pages/FoodProgress';
import Drinks from './pages/Drinks';
import DrinksId from './pages/DrinksId';
import DrinkProgress from './pages/DrinkProgress';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Provider from './context/Provider';

import './App.css';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Login } />

        <Route exact path="/foods" component={ Foods } />
        <Route path="/foods/:id" component={ FoodsId } />
        <Route path="/foods/:id/inProgress" component={ FoodProgress } />

        <Route exact path="/drinks" component={ Drinks } />
        <Route exact path="/drinks/:id" component={ DrinksId } />
        <Route path="/drinks/:id/inProgress" component={ DrinkProgress } />

        <Route path="/profile" component={ Profile } />

        <Route path="/done-recipes" component={ DoneRecipes } />
        <Route path="/favorite-recipes" component={ FavoriteRecipes } />
      </Switch>
    </Provider>
  );
}

export default App;
