/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

export default function SearchForm() {
  const [search, setSearch] = useState('');

  const handleChange = event => {
    setSearch({ ...search, [event.target.name]: event.target.value });
  };
  return (
    <section className="search-form">
      <InputGroup>
        <Input type="text" name="search-field" onChange={event => handleChange(event)} />
        <InputGroupAddon addonType="prepend">
          <Button>Search</Button>
        </InputGroupAddon>
      </InputGroup>
    </section>
  );
}
