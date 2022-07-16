import {screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderPath from './helpers/renderPath';

describe('Testes do componente footer', () => {
  it('Testa se os Elementos estão na Tela', () => {
    renderPath('/foods');
    const drinkBtn = screen.getByTestId('drinks-bottom-btn');
    const foodBtn = screen.getByTestId('food-bottom-btn');

    expect(drinkBtn).toBeInTheDocument();
    expect(foodBtn).toBeInTheDocument();
  });

  it('Testa se muda de rota ao clicar nos botão foods', () => {
    const { history } = renderPath('/foods');
    const foodBtn = screen.getByTestId('food-bottom-btn');
    userEvent.click(foodBtn);

    expect(history.location.pathname).toBe('/foods');
  });

  it('Testa se muda de rota ao clicar no botão drink', () => {
    const { history } = renderPath('/foods');
    const drinkBtn = screen.getByTestId('drinks-bottom-btn');
    userEvent.click(drinkBtn);

    expect(history.location.pathname).toBe('/drinks');
  });
});