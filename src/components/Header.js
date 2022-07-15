import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import dataContext from '../context/MyContext';
import icon from '../images/profileIcon.svg';
import search from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

export default function Header({ title, searchBool }) {
  const { searchInput, setSearchInput } = useContext(dataContext);
  const [input, setInput] = useState(false);

  const setInputValue = ({ target: { value } }) => setSearchInput(value);

  return (
    <header>
      <h1 data-testid="page-title">{ title }</h1>
      <Link to="/profile">
        <img src={ icon } alt="ícone de perfil" data-testid="profile-top-btn" />
      </Link>
      {input && (
        <div>
          <input
            value={ searchInput }
            name="searchInput"
            onChange={ setInputValue }
            data-testid="search-input"
            type="text"
          />
          <SearchBar headerTitle={ title } />
        </div>
      )}
      {searchBool && (
        <button type="button" onClick={ () => setInput(!input) }>
          <img
            src={ search }
            alt="ícone de pesquisa"
            data-testid="search-top-btn"
          />
        </button>
      )}
    </header>
  );
}

Header.propTypes = {
  searchBool: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};
