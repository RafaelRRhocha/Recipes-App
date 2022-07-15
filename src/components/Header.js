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
    <header className="flex items-center p-3 bg-zinc-300">
      <h1
        data-testid="page-title"
        className="text-[40px] text-[#000] p-14 ml-[30px]"
      >
        { title }
      </h1>
      <div className="m-auto">
        <div className="flex items-center gap-[100px] zeroGap">
          {input && (
            <div className="flex flex-col inputHeader">
              <div className="flex justify-center">
                <input
                  value={ searchInput }
                  name="searchInput"
                  onChange={ setInputValue }
                  data-testid="search-input"
                  type="text"
                  placeholder="Find a Recipe..."
                  className={ `input
                    input-bordered
                    input-success
                    w-full max-w-xs
                    bg-zinc-400
                    text-zinc-900
                    placeholder:text-zinc-600` }
                />
              </div>
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
          <Link to="/profile">
            <img src={ icon } alt="ícone de perfil" data-testid="profile-top-btn" />
          </Link>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  searchBool: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};
