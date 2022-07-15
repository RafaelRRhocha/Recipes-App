import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

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
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />

          <Route exact path="/foods" component={ Foods } />
          <Route exact path="/foods:id-da-receita" component={ FoodsId } />
          <Route path="/foods:id-da-receita/in-progress" component={ FoodProgress } />

          <Route exact path="/drinks" component={ Drinks } />
          <Route exact path="/drinks:id-da-receita" component={ DrinksId } />
          <Route path="/drinks:id-da-receita/in-progress" component={ DrinkProgress } />

          <Route path="/profile" component={ Profile } />

          <Route path="/done-recipes" component={ DoneRecipes } />
          <Route path="/favorite-recipes" component={ FavoriteRecipes } />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
