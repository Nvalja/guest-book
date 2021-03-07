import React, { useState } from 'react';
import './GuestForm.scss';
import classNames from 'classnames';

const defaultUser = {
  name: '',
  text: '',
  nameColor: '#000000',
  textColor: '#000000',
};

const inputsError = {
  name: false,
  text: false,
};

export const GuestForm = ({ handleUser }) => {
  const [query, setQuery] = useState(defaultUser);
  const [errors, setErrors] = useState(inputsError);

  const handleInputs = (event) => {
    const { name, value } = event.target;

    setQuery({
      ...query,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!query.name || !query.text) {
      setErrors({
        name: !query.name,
        text: !query.text,
      });

      return;
    }

    const newUser = {
      ...query,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };
    
    handleUser(newUser);
    setQuery(defaultUser);
    setErrors(inputsError);
  };

  return (
    <div className="wrapper">
      <form
        className="form"
        onSubmit={handleSubmit}
      >
        <label className="form__name-wrapper">
          {errors.name ? (
            <span style={{ color: 'red' }}>Please, enter your name</span>
          ) : (
            <span>Enter your name</span>
          )}
          
          <input
            className={classNames({
              'form__name-input': true,
              error: errors.name,
            })}
            name="name"
            type="text"
            value={query.name}
            onChange={(event) => {
              handleInputs(event);
              setErrors({ ...errors, name: false });
            }}
          />
        </label>
        <input
          type="color"
          name="nameColor"
          className="form__color"
          value={query.nameColor}
          onChange={handleInputs}
        />
        <label className="form__text-wrapper">
          {errors.text
            ? (
              <span style={{ color: 'red' }}>
                Please, enter your message
              </span>
            ) : (
              <span>Enter your message</span>
            )}
          <textarea
            className={classNames({
              'form__text-input': true,
              error: errors.text,
            })}
            wrap="soft | hard"
            name="text"
            cols="15"
            rows="10"
            value={query.text}
            onChange={(event) => {
              handleInputs(event);
              setErrors({ ...errors, text: false });
            }}
          />
        </label>
        <input
          type="color"
          name="textColor"
          className="form__color"
          value={query.textColor}
          onChange={handleInputs}
        />
        <input
          className="form__button"
          type="submit"
          value="add message"
        />
      </form>
    </div>
  );
};
