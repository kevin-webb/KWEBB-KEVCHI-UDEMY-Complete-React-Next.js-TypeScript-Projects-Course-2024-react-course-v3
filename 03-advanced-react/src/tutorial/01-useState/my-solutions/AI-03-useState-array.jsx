/**
# Instructions

1. **Create a new component** named `AI-03-useState-array`.

2. **In the `AI-03-useState-array` create an array named items, the following should be added:

```javascript
  const items = [
  { id: 1, name: 'Apple' },0
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Cherry' },
  { id: 4, name: 'Date' },
  { id: 5, name: 'Elderberry' },
];
```

3. **In the `AI-03-useState-array` component**:
   - Use the `useState` hook to create a state variable `fruits` with a default value of `items`.
   - Display the list of fruits (their names) in the browser inside `<li>` tags.

4. **Add a button** labeled `Clear List`. When clicked, it should clear the list (set `fruits` to an empty array).

5. **Export `ListDisplay`** as the default export.

## Expected Output

When you load the component, you should see a list of fruit names. When you click the `Clear List` button, the list should disappear.
 **/

import React from 'react';
import { useState } from 'react';

const items = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Cherry' },
  { id: 4, name: 'Date' },
  { id: 5, name: 'Elderberry' },
];

const AI03UseStateArray = () => {
  const [fruits, setFruits] = useState(items);

  return (
    <>
      <h2>fruit List</h2>
      {fruits.map((fruit) => {
        const { id, name } = fruit;
        return (
          <div key={id}>
            <h3>{name}</h3>
          </div>
        );
      })}
      <button
        onClick={() => {
          setFruits([]);
        }}
      >
        Clear All
      </button>
    </>
  );
};

export default AI03UseStateArray;
