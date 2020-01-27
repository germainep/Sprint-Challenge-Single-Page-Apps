/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

export default function SearchForm(props) {
  const [search, setSearch] = useState('');
  const Characters = props.characters;

  const handleChange = event => {
    setSearch(event.target.value);

    props.setCharacters(
      Characters.filter(character => {
        if (character.name.toLowerCase().indexOf(search) !== -1) {
          return character;
        }
      })
    );
  };
  return (
    <section className="search-form">
      <InputGroup>
        <Input type="text" name="searchField" onChange={event => handleChange(event)} />
        <InputGroupAddon addonType="prepend">
          <Button>Search</Button>
        </InputGroupAddon>
      </InputGroup>
    </section>
  );
}
