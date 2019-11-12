/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

export default function SearchForm() {
  return (
    <section className="search-form">
      <InputGroup>
        <Input />
        <InputGroupAddon addonType="prepend">
          <Button>Search</Button>
        </InputGroupAddon>
      </InputGroup>
    </section>
  );
}
