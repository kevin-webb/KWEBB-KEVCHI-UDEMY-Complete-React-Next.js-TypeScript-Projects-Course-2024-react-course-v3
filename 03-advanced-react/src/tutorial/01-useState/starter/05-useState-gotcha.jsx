import React from 'react';

const UseStateGotcha = () => {
  const [value, setValue] = React.useState(0);

  // PROBLEM (the console.log will not show the updated value)
  // const handleClick = () => {
  //   setValue(value + 1); // State update is scheduled but not immediate
  //   console.log(value); // Still has the old value from current render
  // };
  // 1. React state updates are asynchronous
  // 2. When we call setValue(), React schedules the update
  // 3. The console.log runs before the state actually changes
  // 4. This creates a "stale" value in our console.log

  // SOLUTION USING FUNCTION FORM
  const handleClick = () => {
    setValue((prevValue) => {
      const newValue = prevValue + 1; // Gets fresh state value
      console.log(newValue); // Logs the actual new value
      return newValue; // Updates state with new value
    });
  };
  // 1. The function form (prevValue => {...}) gives us access to the latest state
  // 2. React passes the current state value as an argument to our function
  // 3. We can perform our calculations using the guaranteed fresh state
  // 4. Any logs inside this function will show the actual new value
  // 5. The return value becomes our next state

  // STANDARD FUNCTION FORM (The normal, recommended way)
  // --------------------------------------------------------- //
  // RECOMMENDED WAY (Simpler, more concise function form)
  // const handleClick = () => {
  //   setValue(prevValue => prevValue + 1);  // Direct return of new value
  // };
  // This is the preferred syntax when you don't need to:
  // 1. Log intermediate values
  // 2. Perform complex calculations
  // 3. Access the new value before the update
  // --------------------------------------------------------- //

  // RECOMMENDED USAGE OF FUNCTION FORM
  // The function form should be used when:
  // 1. New state depends on previous state
  // 2. Multiple state updates happen in the same function
  // 3. State updates occur in async operations (setTimeout, API calls, etc.)
  // 4. You need to ensure you're working with the latest state value

  // Examples of recommended usage:

  // Multiple updates:
  // setValue(prev => prev + 1);
  // setValue(prev => prev + 1);

  // Async operations:
  // setTimeout(() => {
  //   setValue(prev => prev + 1);
  // }, 1000);

  // Complex state updates:
  // setValue(prev => {
  //   if (someCondition) return prev + 1;
  //   return prev;
  // });

  // Object state updates:
  // setUser(prev => ({ ...prev, name: 'John' }));

  return (
    <>
      <h2>useState "gotcha"</h2>

      <h1>{value}</h1>

      <button className="btn" onClick={handleClick}>
        Increase Count
      </button>
    </>
  );
};

export default UseStateGotcha;
