import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderPath from './helpers/renderPath';

describe('Teste do Componente SearchBar', () => {
  it('Teste a opção de Ingrediente ', () => {
      renderPath('/drinks');

      const searchBtn = screen.getByTestId('search-top-btn');
      userEvent.click(searchBtn);

      const searchInput = screen.getByTestId('search-input');
      const inputIngredient = screen.getByTestId('ingredient-search-radio');
      const btnSend = screen.getByTestId('exec-search-btn');

      userEvent.type(searchInput, 's');
      userEvent.click(inputIngredient);
      userEvent.click(btnSend);
    });

  it('Teste a opção de name', () => {
    renderPath('/drinks');
    const searchBtn = screen.getByTestId('search-top-btn');
    userEvent.click(searchBtn);

    const searchInput= screen.getByTestId('search-input');
    const inputName = screen.getByTestId('name-search-radio');
    const btnSend = screen.getByTestId('exec-search-btn');

    userEvent.type(searchInput, 's');
    userEvent.click(inputName);
    userEvent.click(btnSend);
  });

  it('Testa a opção de letras', () => {
    renderPath('/drinks');
    const searchBtn = screen.getByTestId('search-top-btn');
    userEvent.click(searchBtn);

    const searchInput= screen.getByTestId('search-input');
    const inputLetter = screen.getByTestId('first-letter-search-radio');
    const btnSend = screen.getByTestId('exec-search-btn');

    userEvent.type(searchInput, 's');
    userEvent.click(inputLetter);
    userEvent.click(btnSend);
  });
});
