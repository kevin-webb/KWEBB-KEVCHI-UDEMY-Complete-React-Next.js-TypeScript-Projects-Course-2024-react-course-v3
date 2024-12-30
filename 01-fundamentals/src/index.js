// index_topic_36

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

// function BookList() {
//   return (
//     <section className="booklist">
//       {books.map((book) => {
//         return (
//           <Book
//             img={book.img}
//             title={book.title}
//             author={book.author}
//             key={book.id}
//           />
//         );
//       })}
//     </section>
//   );
// }

// OR

// function BookList() {
//   return (
//     <section className="booklist">
//       {books.map((book) => {
//        const {img, title, author, id} = book;
//         return (
//           <Book
//             img={img}
//             title={title}
//             author={author}
//             key={id}
//           />
//         );
//       })}
//     </section>
//   );
// }

// OR

// function BookList() {
//   return (
//     <section className="booklist">
//       {books.map(({ img, title, author, id }) => {
//         return <Book img={img} title={title} author={author} key={id} />;
//       })}
//     </section>
//   );
// }

// OR

// -------------------------------------- --------------------------------------
// // Container Function / Transformation Function (Renders pre-composed elements from transformation function)
// // Container Component - Manages data flow and renders list of books
// // Uses map to transform book data into Book components
// function BookList() {
//   return (
//     <section className="booklist">
//       {books.map((book) => {
//         // Passing the whole book object
//         return <Book book={book} key={book.id} />;
//       })}
//     </section>
//   );
// }

// // Child Component / Presentational Component (Handles presentation and Defines how each book should be rendered)
// // Presentational Component - Pure rendering component
// // Receives props and defines the structure/styling for a single book
// const Book = ({ book: { img, title, author } }) => {
//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author.toUpperCase()}</h4>
//     </article>
//   );
// };

// ALTERNATIVE:

// Container Function
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        // Spreading the properties
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

// Presentational Component
const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};
// -------------------------------------- --------------------------------------

// Initialize React Root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
