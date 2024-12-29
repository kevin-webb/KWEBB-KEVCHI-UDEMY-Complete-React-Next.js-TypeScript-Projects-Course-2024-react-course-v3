// index_topic_30_v1

/**
  The following comments are for my purposes only, I have intentionally omitted JSDocs and provided explanations to help me solidify key concepts that govern the code block, therefore you will see comments describing what the code does and not just the WHY behind a code block.
 */

// React component structure for a book listing app
import React from 'react'; // Not required but recommended
import ReactDOM from 'react-dom/client'; // Not required but recommended

import './index.css';

// React work using a one-way data flow method in-which data flows down then React deals with the rendering and DOM manipulation.

const author = 'Rebecca Yarros';
const title = 'Onyx Storm (Deluxe Limited Edition) (The Empyrean, 3)';
const img = './images/9101MLPcFTL._SY466_.jpg';

// (PARENT - Level 1)
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
// This is telling React that and article element that encapsulate an Image, Title, and Author components will be returning

const Book = () => {
  return (
    <article className="book">
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      <img src={img} alt={title} />
    </article>
  );
};

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
