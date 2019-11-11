/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ListGroup, ListGroupItem, Media } from 'reactstrap';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
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
    <ListGroup className="character-list">
      <ListGroupItem>
        {characters.map(character => (
          <Media key={character.id}>
            <Media left top href={character.url}>
              <Media object src={character.image} />
            </Media>
            <Media body>
              <Media heading>{character.name}</Media>
              <div>
                <span>species: </span>
                {character.species}
              </div>

              <div>
                <span>Home: </span>
                {character.origin.name}
              </div>
            </Media>
          </Media>
        ))}
      </ListGroupItem>
    </ListGroup>
  );
}
