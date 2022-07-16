import React from 'react';
import {screen} from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';

describe('Teste do Componente Login', () => {
  it('Teste se o Botão funciona corretamente', () => {
    renderWithRouter(<App />)
    const inputEmail = screen.getByTestId('email-input');
    const inputPass = screen.getByTestId('password-input');
    const btnSubmitLogin = screen.getByTestId('login-submit-btn');

    userEvent.type(inputEmail, 'user@user.com');
    userEvent.type(inputPass, 'coxinha123');
    expect(btnSubmitLogin).not.toBeDisabled();
  });

  it('Teste se o botão fica desabilitado com as infos erradas', () => {
    renderWithRouter(<App />)
    const inputEmail = screen.getByTestId('email-input');
    const inputPass = screen.getByTestId('password-input');
    const btnSubmitLogin = screen.getByTestId('login-submit-btn');

    userEvent.type(inputEmail, 'user.com');
    userEvent.type(inputPass, '12345');
    expect(btnSubmitLogin).toBeDisabled();
  });

  it('Teste se muda de rota quando aperta no botão', () => {
    const { history } = renderWithRouter(<App />)
    const inputEmail = screen.getByTestId('email-input');
    const inputPass = screen.getByTestId('password-input');
    const btnSubmitLogin = screen.getByTestId('login-submit-btn');

    userEvent.type(inputEmail, 'user@user.com');
    userEvent.type(inputPass, 'coxinha123');
    userEvent.click(btnSubmitLogin);

    expect(history.location.pathname).toBe('/foods');
  });
});
