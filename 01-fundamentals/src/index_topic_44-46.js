// index_topic_44-46

// React component structure for a book listing app
import React from 'react'; // Not required but recommended
import ReactDOM from 'react-dom/client'; // Not required but recommended

import './index.css';

const books = [
  {
    author: 'Rebecca Yarros',
    title: 'Onyx Storm (Deluxe Limited Edition) (The Empyrean, 3)',
    img: './images/9101MLPcFTL._SY466_.jpg',
    id: 1,
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    id: 2,
  },
];
// React uses declarative rendering

function BookList() {
  const someValue = 'shakeAndBake';
  const displayValue = () => {
    console.log(someValue);
  };
  const getBook = (id) => {
    // Find book logic here
    // Create a variable that receives an anonymous function
    // Use array.find and pass the book reference in the parameter
    // In the anonymous function, we use dot notation to access the id object and set it to strictly equals the future parameter of id
    const book = books.find((book) => book.id === id);
    console.log(book);
  };
  /**
  1. `const book = books.find((book) => book.id === id);` :
    - This line uses the find method on the books array.
  2. `(book) => book.id === id`:
    - This line uses the find method to take a callback function as a parameter.
    - The callback function receives a single argument, which is a book object from the books array.
  3. `book.id === id`:
    - Inside the callback function, you check if the id property of the current book object (book) is strictly equal `(===)` to the id parameter passed to the getBook function
  4. `const book = ...`:
    - If the id property matches, the find method stops iterating and returns the entire book object.
    - This book object is then assigned to the book constant variable.
  5. `console.log(book);` :
    - This line simply logs the found book object to the console for verification.
  6. The callback function:
    ```      
      const book = books.find((book) => book.id === id);  
          console.log(book);  
        };  
      ```
    The reason the anonymous function is a callback function is simply because we are passing the anonymous function `(book) => book.id === id` to the `.find() method` which itself is a function.
*/
  return (
    <section className="booklist">
      {books.map((book) => {
        return (
          <Book
            {...book}
            key={book.id}
            displayValue={displayValue}
            getBook={getBook}
          />
        );
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author, displayValue, getBook, id } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      {/* The only thing that goes inside a React event handler parameters is the
      event object (commonly written as 'e' or 'event'), (none is required here so non is used)*/}
      <button onClick={() => getBook(id)}>click me</button>
      <h4>{author} </h4>
    </article>
  );
};

/**
1. When the button is clicked, the anonymous function () => getBook(id) executes
2. This function calls getBook and passes the id from the props
3. Inside getBook, this id is used to find the matching book object using books.find()
4. The found book object is then logged to the console
So when you click the button for a book with id: 1, you'll see the entire object logged:
```jsx
{
  author: 'Rebecca Yarros',
  title: 'Onyx Storm (Deluxe Limited Edition) (The Empyrean, 3)',
  img: './images/9101MLPcFTL._SY466_.jpg',
  id: 1
}
```
 */

// Initialize React Root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
