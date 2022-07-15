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
    setRedirect(true);
  };

  return (
    <>
      {redirect && <Redirect to="foods" />}
      <input
        onChange={ verifyInputEmail }
        data-testid="email-input"
        type="email"
        value={ email }
      />
      <input
        onChange={ verifyInputPassword }
        data-testid="password-input"
        type="password"
        value={ password }
      />
      <button
        disabled={ !disable || password.length <= '6' }
        data-testid="login-submit-btn"
        type="button"
        onClick={ saveUserTokens }
      >
        Enter
      </button>
    </>
  );
}