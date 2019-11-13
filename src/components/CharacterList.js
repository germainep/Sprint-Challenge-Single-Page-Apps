/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ListGroup, ListGroupItem, Media } from 'reactstrap';
import SearchForm from './SearchForm';

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect

  return (
    <div>
      <ListGroup className="character-list">
        {props.characters.map(character => (
          <ListGroupItem key={character.id}>
            <Media left>
              <Media object src={character.image} />
            </Media>
            <Media body>
              <Media heading>
                <Link to="/characters/:id">{character.name}</Link>
              </Media>
              <div>
                <span>species: </span>
                {character.species}
              </div>

              <div>
                <span>Home: </span>
                {character.origin.name}
              </div>
            </Media>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}
