// index_topic_34_v2-35

/**
  The following comments are for my purposes only, I have intentionally omitted JSDocs and provided explanations to help me solidify key concepts that govern the code block, therefore you will see comments describing what the code does and not just the WHY behind a code block.
 */

// _**In React props are used to pass unique data to each individual templated component**_

// React component structure for a book listing app
import React from 'react'; // Not required but recommended
import ReactDOM from 'react-dom/client'; // Not required but recommended

import './index.css';

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

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book img={book.img} title={book.title} author={book.author} />;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

// Initialize React Root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
