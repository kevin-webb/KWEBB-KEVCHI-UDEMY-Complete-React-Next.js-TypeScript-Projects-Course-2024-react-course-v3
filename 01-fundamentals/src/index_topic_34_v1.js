// index_topic_34

/**
  The following comments are for my purposes only, I have intentionally omitted JSDocs and provided explanations to help me solidify key concepts that govern the code block, therefore you will see comments describing what the code does and not just the WHY behind a code block.
 */

// _**In React props are used to pass unique data to each individual templated component**_

// React component structure for a book listing app
import React from 'react'; // Not required but recommended
import ReactDOM from 'react-dom/client'; // Not required but recommended

import './index.css';

// React work using a one-way data flow method in-which data flows down then React deals with the rendering and DOM manipulation.

// Example 1:
// // **** STATIC RENDERING *****
// const firstBook = {
//   author: 'Rebecca Yarros',
//   title: 'Onyx Storm (Deluxe Limited Edition) (The Empyrean, 3)',
//   img: './images/9101MLPcFTL._SY466_.jpg',
// };
// const secondBook = {
//   author: 'James Clear',
//   title: 'Atomic Habits',
//   img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
// };

// // Container Function (Manually composes/assembles objects into child components and explicitly passes props)
// function BookList() {
//   return (
//     <section className="booklist">
// // This is called explicit component rendering (usually when manually written each component)
//       <Book
//         author={firstBook.author}
//         title={firstBook.title}
//         img={firstBook.img}
//       >
//         <p>
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
//           repudiandae inventore eos qui animi sed iusto alias eius ea sapiente.
//         </p>
//         <button>click me</button>
//       </Book>
//       <Book
//         author={secondBook.author}
//         title={secondBook.title}
//         img={secondBook.img}
//       />
//     </section>
//   );
// }

// // Child Component / Presentational Component (Handles presentation and Defines how each book should be rendered)
// const Book = ({ img, title, author, children }) => {
//   return (
//     <article className="book">
//       {/* <img src={props.`reference holder`} /> */}
//       <img src={img} alt={title} />
//       {/* same as <h2>{props.`prop name`}</h2> */}
//       <h2>{title}</h2>
//       {/* same as <h2>{props.`prop key`}</h2> */}
//       <h4>{author.toUpperCase()}</h4>
//       {children}
//     </article>
//   );
// };

// Example 2:
// // **** DYNAMIC RENDERING *****
const books = [
  {
    author: 'Rebecca Yarros',
    title: 'Onyx Storm (Deluxe Limited Edition) (The Empyrean, 3)',
    img: './images/9101MLPcFTL._SY466_.jpg',
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
  },
];

// Transformation Function/Generation Logic Component
const newBooks = books.map(({ img, title, author }) => {
  return (
    <article>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
});

// OR

// // Transformation Function/Generation Logic Component
// const newBooks = books.map((props) => {
//   console.log(props);
//   return (
//     <article>
//       <img src={props.img} alt={props.title} />
//       <h2>{props.title}</h2>
//       <h4>{props.author}</h4>
//     </article>
//   );
// });

// Container Function (Renders pre-composed elements from transformation function)
function BookList() {
  return <section className="booklist">{newBooks}</section>;
}

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
