// index_topic_39-42

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

// MY WAY
const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e);
    // e.target - element
    console.log(`Input Name : ${e.target.name}`);
    console.log(`Input Value : ${e.target.value}`);
    // console.log('handle form input');
  };
  const handleButtonClick = () => {
    alert('handle button click');
  };
  return (
    <section>
      {/* add onSubmit Event Handler */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log('form submitted');
        }}
      >
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          //
          style={{ margin: '1rem 0' }}
        />
        {/* The only thing that goes inside a React event handler parameters is the
      event object (commonly written as 'e' or 'event')*/}
        <button
          type="submit"
          onClick={(e) => {
            handleFormInput(e);
            handleButtonClick();
          }}
        >
          click me
        </button>
      </form>
    </section>
  );
};

// THE INSTRUCTURE WAY

// const EventExamples = () => {
//   const handleFormInput = (e) => {
//     console.log(e);
//     // e.target - element
//     console.log(`Input Name : ${e.target.name}`);
//     console.log(`Input Value : ${e.target.value}`);
//     // console.log('handle form input');
//   };
//   const handleButtonClick = () => {
//     alert('handle button click');
//   };
//   const handleFormSubmission = (e) => {
//     e.preventDefault();
//     console.log('form submitted');
//   };
//   return (
//     <section>
//       {/* add onSubmit Event Handler */}
//       <form onSubmit={handleFormSubmission}>
//         <h2>Typical Form</h2>
//         <input
//           type="text"
//           name="example"
//           onChange={handleFormInput}
//           style={{ margin: '1rem 0' }}
//         />
//         {/* add button with type='submit' */}
//         <button type="submit">submit form</button>
//       </form>
//       <button onClick={handleButtonClick}>click me</button>
//     </section>
//   );
// };

// Container Function
function BookList() {
  return (
    <section className="booklist">
      <EventExamples />
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

// Initialize React Root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
