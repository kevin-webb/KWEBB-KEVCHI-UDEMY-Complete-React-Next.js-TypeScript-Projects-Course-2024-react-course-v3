// index_test

/**
  The following comments are for my purposes only, I have intentionally omitted JSDocs and provided explanations to help me solidify key concepts that govern the code block, therefore you will see comments describing what the code does and not just the WHY behind a code block.
 */

// React component structure for a book listing app
import React from 'react'; // Not required but recommended
import ReactDOM from 'react-dom/client'; // Not required but recommended

import './index.css';

// React work using a waterfall method, in-which data flows down then React deals with the rendering, meaning all we have to worry about is the correct waterfall process.

// (PARENT - Level 1)
// Renders a section containing multiple Book components (This is not entirely correct)
// This is telling React that 4 Book component will be returning inside a section element.
function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

// (CHILD - Level 2)
// Renders a single book's layout containing image, title, and author components, who's reference is passed to the BookList component (This is not entirely correct)
// This is telling React that and article element that encapsulate an Image, Title, and Author components will be returning
const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

// (GRANDCHILD - Level 3)
// Individual components used to reference each each element in an array, which is then passed to the Book component (This is not entirely correct)
// These components are the individual items being used by the Book component for React to render each row/Book component
const Image = () => (
  <img
    src="./images/book-3.jpg"
    alt="Onyx Storm (Deluxe Limited Edition) (The Empyrean, 3)"
  />
); // Represents book cover from the array
const Title = () => (
  <h2>Onyx Storm (Deluxe Limited Edition) (The Empyrean, 3)</h2>
); // Represents book's title from the array
const Author = () => <h4> Rebecca Yarros</h4>; // Represents Author name from the array

// Initialize React Root
// - Looks in your HTML file for an div with id="root".
// - The html div serves as a container for the entire React application.
// - ReactDOM.createRoot(...) telling React "this is where I want my app to live".
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<BookList />) takes the BookList component and all of its child components
// and renders them inside that root div.
root.render(<BookList />);

/* 
Notes - My Thought Process/My Understanding:

*/

/* 
JavaScript/React's Journey Through the Code - How It All Works:

*/
