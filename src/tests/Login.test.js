import React from 'react';
import { render, cleanup, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testando a tela de Login', () => {
  beforeEach(cleanup);

  it('Testes dos elementos da tela de Login', () => {
    render(<App />);
    const inputEmail = screen.getByTestId(/email-input/i);
    const passwordInput = screen.getByTestId(/password-input/i);
    const enterButon = screen.getByTestId(/login-submit-btn/i);

    expect(inputEmail).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(enterButon).toBeInTheDocument();
    expect(enterButon.disabled).toBeTruthy();
  });

  it('Teste do Botão Play', async () => {
    render(<App />);
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
