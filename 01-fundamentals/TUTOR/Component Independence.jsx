import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

function BookList() {
  const [books, setBooks] = useState([
    { id: 1, title: 'Book One', author: 'Author One' },
    { id: 2, title: 'Book Two', author: 'Author Two' },
    { id: 3, title: 'Book Three', author: 'Author Three' },
  ])

  const blockDefault = () => {
    removeBook()
  }
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id))
  }

  return (
    <section>
      {books.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          removeBook={removeBook}
        />
      ))}
    </section>
  )
}

const Book = ({ id, title, author, removeBook }) => {
  return (
    <article>
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button onClick={() => removeBook(id)}>Remove Book</button>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
