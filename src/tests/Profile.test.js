import { screen } from '@testing-library/react';
import renderPath from './helpers/renderPath';
import userEvent from '@testing-library/user-event';

describe('Teste do componente Profile', () => {
  it('Teste se os botões redirecionam corretamente', async () => {
    const { history } = renderPath('/');

    const inputEmail = screen.getByTestId('email-input');
    const inputPass = screen.getByTestId('password-input');
    const btnLoginSubmit = screen.getByTestId('login-submit-btn');

    userEvent.type(inputEmail, 'user@user.com');
    userEvent.type(inputPass, 'coxinha123');
    userEvent.click(btnLoginSubmit);

    const iconBtn = screen.getByTestId('profile-top-btn');

    userEvent.click(iconBtn);
    expect(history.location.pathname).toBe('/profile');

    const doneRecipesButton = screen.getByTestId('profile-done-btn');
    userEvent.click(doneRecipesButton);
    expect(history.location.pathname).toBe('/done-recipes'); 
  });

  it('Teste se os botões redirecionam corretamente', async () => {
    const { history } = renderPath('/');

    const inputEmail = screen.getByTestId('email-input');
    const inputPass = screen.getByTestId('password-input');
    const btnLoginSubmit = screen.getByTestId('login-submit-btn');

    userEvent.type(inputEmail, 'user@user.com');
    userEvent.type(inputPass, 'coxinha123');
    userEvent.click(btnLoginSubmit);

    const iconBtn = screen.getByTestId('profile-top-btn');

    userEvent.click(iconBtn);
    expect(history.location.pathname).toBe('/profile');

    const favoriteRecipesButton = screen.getByTestId('profile-favorite-btn');
    userEvent.click(favoriteRecipesButton);
    expect(history.location.pathname).toBe('/favorite-recipes');    
  });

  it('Teste se os botões redirecionam corretamente', async () => {
    const { history } = renderPath('/');

    const inputEmail = screen.getByTestId('email-input');
    const inputPass = screen.getByTestId('password-input');
    const btnLoginSubmit = screen.getByTestId('login-submit-btn');

    userEvent.type(inputEmail, 'user@user.com');
    userEvent.type(inputPass, 'coxinha123');
    userEvent.click(btnLoginSubmit);

    const iconBtn = screen.getByTestId('profile-top-btn');

    userEvent.click(iconBtn);
    expect(history.location.pathname).toBe('/profile');

    const logoutButton = screen.getByTestId('profile-logout-btn');
    userEvent.click(logoutButton);
    expect(history.location.pathname).toBe('/');   
  });

  it('Teste se o Local Storage retorna corretamente', async () => {
    const { history } = renderPath('/');

    const email = { email: 'user@user.com' }  
    localStorage.setItem('user',JSON.stringify(email));

    history.push('/profile');
    expect(screen.getByText(/user@user.com/ig)).toBeInTheDocument();
  });
});
