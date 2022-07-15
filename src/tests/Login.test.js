import React from 'react';
import { cleanup, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

describe('Testando a tela de Login', () => {
  beforeEach(cleanup);

  it('Testes dos elementos da tela de Login', () => {
    const { history } = renderWithRouter(<App />);
    const inputEmail = screen.getByTestId(/email-input/i);
    const passwordInput = screen.getByTestId(/password-input/i);
    const enterButon = screen.getByTestId(/login-submit-btn/i);

    expect(inputEmail).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(enterButon).toBeInTheDocument();
    expect(enterButon.disabled).toBeTruthy();

    expect(history.location.pathname).toBe('/');
  });

  it('Teste do Botão Play', async () => {
    renderWithRouter(<App />);
    const inputEmail = screen.getByTestId(/email-input/i);
    const passwordInput = screen.getByTestId(/password-input/i);
    const enterButon = screen.getByTestId(/login-submit-btn/i);

    expect(enterButon.disabled).toBeTruthy();

    userEvent.type(inputEmail, 'user@user.com');
    userEvent.type(passwordInput, 'coxinha123');
    expect(enterButon.disabled).toBeFalsy();

    userEvent.click(enterButon);
  });
});
