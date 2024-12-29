// index_topic_30_v2

/**
  The following comments are for my purposes only, I have intentionally omitted JSDocs and provided explanations to help me solidify key concepts that govern the code block, therefore you will see comments describing what the code does and not just the WHY behind a code block.
 */

// _**In React props are used to pass unique data to each individual templated component**_

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
      <Book banana={author} title={title} img={img} />
      {/* <Book `reference holder` = {variable name, from the declared variable} /> */}
      {/* same as <Book `prop name` = {variable name, from the declared variable} /> */}
      {/* same as <Book `prop key` = {variable name, from the declared variable} /> */}
      <Book banana={author} title={title} img={img} />
      <Book banana={author} title={title} img={img} />
      <Book banana={author} title={title} img={img} />
    </section>
  );
}

// (CHILD - Level 2)
// This is telling React that and article element that encapsulate an Image, Title, and Author components will be returning

const Book = (props) => {
  return (
    <article className="book">
      {/* <img src={props.`reference holder`} /> */}
      <img src={props.img} alt={props.title} />
      {/* same as <h2>{props.`prop name`}</h2> */}
      <h2>{props.title}</h2>
      {/* same as <h2>{props.`prop key`}</h2> */}
      <h4>{props.banana.toUpperCase()}</h4>
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

/**
Variable to Prop:
The string 'Rebecca Yarros' is assigned to the variable author
This author variable is then passed as a prop named banana to the Book component
The unusual prop name banana is maintained through the data flow

Prop to Usage:
Inside the Book component, the value is accessed via props.banana
.toUpperCase() is called on the string value, transforming "Rebecca Yarros" to "REBECCA YARROS"
The transformed value is rendered inside the <h4> tag

Additional Props:
Note that title and img are also passed as props but aren't shown being used in the code snippet
These would be accessible as props.title and props.img inside the Book component
 */
