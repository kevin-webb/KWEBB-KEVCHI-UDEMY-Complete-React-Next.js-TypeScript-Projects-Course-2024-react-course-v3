import { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [list, setList] = useState(data);

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
    // let newList = list.filter((item) => item.id !== id);
    // setList(newList);
  };

  const removeAllItems = () => {
    setList([]);
  };

  return (
    <>
      <h2>useState array example</h2>
      {/*  */}
      {list.map((item) => {
        const { id, name } = item;
        //
        return (
          //
          <div key={id} className="item">
            <h4>{name}</h4>
            <button type="button" onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
          //
        );
        //
      })}
      {/*  */}
      <button
        type="button"
        className="btn"
        style={{ marginTop: '2rem' }}
        onClick={removeAllItems}
      >
        Clear Items
      </button>
    </>
  );
};

// return (
//   <>
//     <h2>useState array example</h2>

//     <ol>
//       {people.map((person) => {
//         const { id, name } = person;
//         return (
//           <li key={id} className="item">
//             <h4>{name}</h4>
//           </li>
//         );
//       })}
//     </ol>

//     <button type="button" className="btn" onClick={() => setPeople([])}>
//       Clear Items
//     </button>
//   </>
// );

export default UseStateArray;
