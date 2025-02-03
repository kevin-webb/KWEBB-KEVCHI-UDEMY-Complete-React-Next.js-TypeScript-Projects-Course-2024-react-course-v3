import React from 'react';
import { useState } from 'react';

const UseStateBasics = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
    console.log('count');
  };
  return (
    <>
      <h2>useState basics</h2>
      <h3>{count}</h3>
      <button onClick={handleCount}>Click Me</button>
    </>
  );
};

export default UseStateBasics;
