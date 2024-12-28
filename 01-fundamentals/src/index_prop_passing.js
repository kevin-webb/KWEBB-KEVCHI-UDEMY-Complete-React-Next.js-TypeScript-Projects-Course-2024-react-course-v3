// index_prop_passing

/**
  The following comments are for my purposes only, I have intentionally omitted JSDocs and provided explanations to help me solidify key concepts that govern the code block, therefore you will see comments describing what the code does and not just the WHY behind a code block.
 */

// React component structure for a book listing app
import React from 'react'; // Not required but recommended
import ReactDOM from 'react-dom/client'; // Not required but recommended

const books = [
  { image: 'image1.jpg', title: 'Book 1', author: 'Author 1' },
  { image: 'image2.jpg', title: 'Book 2', author: 'Author 2' },
  { image: 'image3.jpg', title: 'Book 3', author: 'Author 3' },
  { image: 'image4.jpg', title: 'Book 4', author: 'Author 4' },
];

const Image = ({ src }) => <img src={src} alt="book cover" />;
const Title = ({ text }) => <h2>{text}</h2>;
const Author = ({ text }) => <h4>{text}</h4>;

const Book = ({ image, title, author }) => {
  return (
    <article>
      <Image src={image} />
      <Title text={title} />
      <Author text={author} />
    </article>
  );
};

function BookList() {
  return (
    <section>
      {books.map((book, index) => (
        <Book
          key={index}
          image={book.image}
          title={book.title}
          author={book.author}
        />
      ))}
    </section>
  );
}

// Initialize React Root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
