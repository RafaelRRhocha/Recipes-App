import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {
  saveCocktailsToken,
  saveMealsToken,
  saveUser,
} from '../localStorage/userStorage';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disable, setDisable] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const verifyInputPassword = ({ target: { value } }) => setPassword(value);

  const verifyInputEmail = ({ target: { value } }) => {
    const regexValidation = /\S+@\w+\.\w+/i;
    const finalValidation = regexValidation.test(email);
    setEmail(value);
    setDisable(finalValidation);
  };

  const saveUserTokens = () => {
    saveUser({
      email,
    });
    saveMealsToken(1);
    saveCocktailsToken(1);
    localStorage.setItem('inProgressRecipes', JSON.stringify({
      cocktails: {},
      meals: {},
    }));
    setRedirect(true);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3 pt-[10%]">
      <h1 className="text-center text-[50px] text-zinc-200">Recipe App</h1>
      <div className="form-control w-full max-w-xs flex gap-4">
        {redirect && <Redirect to="foods" />}
        <input
          onChange={ verifyInputEmail }
          data-testid="email-input"
          type="email"
          value={ email }
          placeholder="type your email here"
          className={ `
            input
            input-ghost
            input-secondary
            focus:bg-[#191818]
            text-zinc-100
            hover:text-zinc-100
            w-full
            max-w-xs
          ` }
        />
        <input
          onChange={ verifyInputPassword }
          data-testid="password-input"
          type="password"
          value={ password }
          placeholder="type your password here"
          className={ `
            input
            input-ghost
            input-secondary
            focus:bg-[#191818]
            text-zinc-100
            hover:text-zinc-100
            w-full
            max-w-xs
          ` }
        />
        <button
          disabled={ !disable || password.length <= '6' }
          data-testid="login-submit-btn"
          type="button"
          onClick={ saveUserTokens }
          className="btn btn-secondary"
        >
          Enter
        </button>
      </div>
    </div>
  );
}
