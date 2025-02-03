import React from 'react';
import { useState } from 'react';
import { data } from '../../../data.js';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removePerson = () => {};
  const removeAll = () => {
    setPeople([]);
  };

  return (
    <>
      <h2>useState array example</h2>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h3>{name}</h3>
          </div>
        );
      })}
      <button onClick={removeAll}>Clear List</button>
    </>
  );
};

export default UseStateArray;
