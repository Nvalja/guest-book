import React, { useState } from 'react';
import './GuestForm.scss';

export const GuestForm = ({ handleUser }) => {
  const [query, setQuery] = useState({name: '', text: ''})

  const handleInputs = (event) => {
    const { name, value } = event.target;
    setQuery({
      ...query,
       [name]: value
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleUser(query)
    setQuery({name: '', text: ''})
  };

  return (
    <form
      className="form"
      onSubmit={handleSubmit}
    >
      <label className="form__name-wrapper">
        <span>Enter your name</span>
        <input
          className="form__name-input"
          name="name"
          type="text"
          value={query.name}
          onChange={handleInputs}
        />
      </label>
      <label className="form__text-wrapper">
        <span>Enter your text</span>
        <textarea
          className="form__text-input"
          name="text"
          cols="15"
          rows="10"
          value={query.text}
          onChange={handleInputs}
        />
      </label>

      <input className="form__button" type="submit" value="add message"/>
    </form>
  );
}