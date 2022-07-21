import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { readUser } from '../localStorage/userStorage';

export default function Profile() {
  const email = readUser();
  return (
    <>
      <Header title="Profile" searchBool={ false } />
      <div className="flex flex-col gap-2 items-center text-[20px] mt-[5%] ">
        <p data-testid="profile-email">
          {email && email.email}
        </p>
        <div className="flex flex-col gap-5 items-center">
          <Link to="/favorite-recipes">
            <button
              data-testid="profile-favorite-btn"
              type="button"
              className="btn btn-outline btn-warning"
            >
              Favorite Recipes
            </button>
          </Link>
          <Link to="/done-recipes">
            <button
              data-testid="profile-done-btn"
              type="button"
              className="btn btn-outline btn-success"
            >
              Done Recipes
            </button>
          </Link>
          <Link to="/">
            <button
              data-testid="profile-logout-btn"
              type="button"
              onClick={ () => localStorage.clear() }
              className="btn btn-outline btn-error"
            >
              Logout
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
