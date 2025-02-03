import { useState } from 'react';

// const UseStateObject = () => {
//   const [name, setName] = useState('peter');
//   const [age, setAge] = useState('24');
//   const [hobby, setHobby] = useState('reading');

//   const displayPerson = () => {
//     setName('john');
//     setAge(27);
//     setHobby('running');
//   };
//   return (
//     <>
//       <h2>useState object example</h2>

//       <h4>{name}</h4>
//       <h4>{age}</h4>
//       <h4>Enjoys: {hobby}</h4>

//       <button type="button" className="btn" onClick={displayPerson}>
//         Display Person
//       </button>
//     </>
//   );
// };

// export default UseStateObject;

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    hobby: 'reading',
  });

  const displayPerson = () => {
    setPerson({ ...person, name: 'john' });
  };

  const { name, age, hobby } = person;
  return (
    <>
      <h2>useState object example</h2>

      <h4>{name}</h4>
      <h4>{age}</h4>
      <h4>Enjoys: {hobby}</h4>

      <button type="button" className="btn" onClick={displayPerson}>
        Display Person
      </button>
    </>
  );
};

export default UseStateObject;
