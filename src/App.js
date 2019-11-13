/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import SearchForm from './components/SearchForm';
import Header from './components/Header.js';

export default function App(props) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://rickandmortyapi.com/api/character`)
      .then(res => setCharacters(res.data.results))
      .catch(err => console.error(err));
  }, [setCharacters]);
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route
        exact
        path="/characters"
        render={props => (
          <div>
            <SearchForm characters={characters} setCharacters={setCharacters} />
            <CharacterList characters={characters} />
          </div>
        )}
      />
    </main>
  );
}
