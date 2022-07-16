import React from 'react';
import {screen} from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';

describe('Teste do Componente Header', () => {

  it('Teste o Botão de Profile', () => {
      const { history } = renderWithRouter(<App />);
      const inputEmail = screen.getByTestId('email-input');
      const inputPass = screen.getByTestId('password-input');
      const btnLoginSubmit = screen.getByTestId('login-submit-btn');

      userEvent.type(inputEmail, 'user@user.com');
      userEvent.type(inputPass, 'coxinha123');
      userEvent.click(btnLoginSubmit);

      const iconBtn = screen.getByTestId('profile-top-btn');

      userEvent.click(iconBtn);
      expect(history.location.pathname).toBe('/profile');
    });

    it('Teste o Botão de Pesquisa', () => {
      renderWithRouter(<App />)
      const inputEmail = screen.getByTestId('email-input');
      const inputPass = screen.getByTestId('password-input');
      const btnLoginSubmit = screen.getByTestId('login-submit-btn');

      userEvent.type(inputEmail, 'user@user.com');
      userEvent.type(inputPass, 'coxinha123');
      userEvent.click(btnLoginSubmit);

      const searchBtn = screen.getByTestId('search-top-btn');

      userEvent.click(searchBtn);

      const searchBar = screen.getByTestId('search-input');
      expect(searchBar).toBeInTheDocument();
      userEvent.click(searchBtn);
      expect(searchBar).not.toBeInTheDocument();
  });
});
