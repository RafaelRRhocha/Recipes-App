import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderPath from './helpers/renderPath';

describe('Teste do Componente Recipes', () => {
  it('Teste se ao Encontrar um alimento é redirecionado', async () => {
      const { history } = renderPath('/foods');

      const searchBarBtn = screen.getByTestId('search-top-btn');
      userEvent.click(searchBarBtn);

      const searchBar = screen.getByTestId('search-input');
      const nameRadio = screen.getByTestId('name-search-radio');
      const sendBtn = screen.getByTestId('exec-search-btn');

      userEvent.type(searchBar, 'Arrabiata');
      userEvent.click(nameRadio);
      userEvent.click(sendBtn);

      await waitFor(() => expect(history.location.pathname).toBe('/foods/52771'));
  });

  it('Teste se o filtro pode ser colocado e retirado no mesmo botão', async () => {
    renderPath('/foods');

    await waitFor(() => screen.getByTestId('Goat-category-filter'));
    const goatCategory = screen.getByTestId('Goat-category-filter');
    userEvent.click(goatCategory);

    await waitFor(() => screen.getByRole('heading', { name: /mbuzi choma \(roasted goat\)/i }));
    const mbuzi = screen.getByRole('heading', { name: /mbuzi choma \(roasted goat\)/i });
    expect(mbuzi).toBeInTheDocument();

    userEvent.click(goatCategory);

    await waitFor(() => screen.getByRole('heading', { name: /burek/i }));
    const burek = screen.getByRole('heading', { name: /burek/i })
    expect(burek).toBeInTheDocument();
  });

  it('Teste se ao Encontrar uma bebida é redirecionado', async () => {
      const { history } = renderPath('/drinks');

      const searchBarBtn = screen.getByTestId('search-top-btn');
      userEvent.click(searchBarBtn);

      const searchBar = screen.getByTestId('search-input');
      const nameRadio = screen.getByTestId('name-search-radio');
      const sendBtn = screen.getByTestId('exec-search-btn');

      userEvent.type(searchBar, 'Mai Tai');
      userEvent.click(nameRadio);
      userEvent.click(sendBtn);

      await waitFor(() => expect(history.location.pathname).toBe('/drinks/11690'));
  });

  it('Teste se a resposta da API for vazia exibe um alerta', async () => {
      renderPath('/drinks');
      jest.spyOn(window, 'alert').mockImplementation(() => {});

      const searchBarBtn = screen.getByTestId('search-top-btn');
      userEvent.click(searchBarBtn);

      const searchBar = screen.getByTestId('search-input');
      const inputRadio = screen.getByTestId('ingredient-search-radio');
      const sendBtn = screen.getByTestId('exec-search-btn');

      userEvent.type(searchBar, 's');
      userEvent.click(inputRadio);
      userEvent.click(sendBtn);

      await waitFor(() => expect(window.alert).toBeCalledWith('Sorry, we haven\'t found any recipes for these filters.'));
  });

  it('Teste se o filtro pode ser colocado e retirado no mesmo botão', async () => {
    renderPath('/drinks');

    await waitFor(() => screen.getByTestId('Cocoa-category-filter'));
    const cocoaCategory = screen.getByTestId('Cocoa-category-filter');
    userEvent.click(cocoaCategory);

    await waitFor(() => screen.getByRole('heading', { name: /chocolate beverage/i }));
    const beverage = screen.getByRole('heading', { name: /chocolate beverage/i });
    expect(beverage).toBeInTheDocument();

    userEvent.click(cocoaCategory);

    await waitFor(() => screen.getByRole('heading', { name: /a1/i }));
    const a1 = screen.getByRole('heading', { name: /a1/i })
    expect(a1).toBeInTheDocument();
  });
}); 