import { useState } from 'react';

const UseStateBasics = () => {
  console.log(useState('hello world'));

  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);

  return (
    <>
      <h2>useState basics</h2>
      <h2>You clicked {count} times.</h2>
      <button type="button" onClick={handleClick}>
        Click Me
      </button>
    </>
  );
};

export default UseStateBasics;

// const UseStateBasics = () => {
//   console.log(useState('hello world'));

//   const [count, setCount] = useState(0);
//   return (
//     <>
//       <h2>useState basics</h2>
//       <h2>You clicked {count} times.</h2>
//       <button type="button" onClick={() => setCount(count + 1)}>
//         Click Me
//       </button>
//     </>
//   );
// };

// export default UseStateBasics;
