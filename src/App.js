import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Foods from './pages/Foods';
import FoodsId from './pages/FoodsId';
import Drinks from './pages/Drinks';
import DrinksId from './pages/DrinksId';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Provider from './context/Provider';

import './App.css';
import RecipeInProgress from './pages/RecipeInProgress';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Login } />

        <Route exact path="/foods" component={ Foods } />
        <Route exact path="/foods/:id" component={ FoodsId } />
        <Route path="/foods/:id/in-progress" component={ RecipeInProgress } />

        <Route exact path="/drinks" component={ Drinks } />
        <Route exact path="/drinks/:id" component={ DrinksId } />
        <Route path="/drinks/:id/in-progress" component={ RecipeInProgress } />

        <Route path="/profile" component={ Profile } />

        <Route path="/done-recipes" component={ DoneRecipes } />
        <Route path="/favorite-recipes" component={ FavoriteRecipes } />
      </Switch>
    </Provider>
  );
}

export default App;
