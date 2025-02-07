/**
Practice Exercise: Book Collection Analyzer:
const url = 'https://api.jsonbin.io/v3/b/65c37e411f5677401f3edb56';  // Collection of books

// Your task is to:
// 1. Fetch the books data
// 2. Handle these status codes:
//    - 404: "Book collection not found"
//    - 403: "Access to book collection denied"
//    - Other errors: "Failed to fetch books. Status: [status code]"
// 3. Transform each book to include only:
//    - title
//    - author (if no author, set to "Unknown Author")
//    - rating (if no rating, set to "Not Rated")
//    - isAvailable (boolean)
// 4. Calculate:
//    - total number of books
//    - number of available books
//    - average rating (only for books that have ratings)

// Expected output format:
```
{
  books: [
    {
      title: "Book Title",
      author: "Author Name",
      rating: 4.5,
      isAvailable: true
    },
    // ... more books
  ],
  stats: {
    totalBooks: 25,
    availableBooks: 20,
    averageRating: 4.2
  }
}
  ``` 
 */

const url = 'https://www.googleapis.com/books/v1/volumes?q=javascript';

// How to Check Where the Actual Data Is (Method 1: Logging the Full Response):
// fetch(url)
//   .then((response) => response.json()) // Convert response to JSON
//   .then((me) => console.log(me)) // Log entire response object
//   .catch((error) => console.error(error));

// How to Check Where the Actual Data Is (Method 2: Using console.dir() for a Collapsible Object View):
// fetch(url)
//   .then((response) => response.json())
//   .then((anything) => console.dir(anything)) // Shows the object in an expandable tree
//   .catch((error) => console.error(error));

// How to Check Where the Actual Data Is (Method 3: Using Object.keys() to Explore Structure):
// fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(Object.keys(data))) // Lists top-level keys
//   .catch((error) => console.error(error));

fetch(url)
  .then((Response) => {
    if (!Response.ok) {
      if (Response.status === 404) {
        throw new Error('Book collection not found');
      } else if (Response.status === 403) {
        throw new Error('Access to book collection denied');
      } else {
        throw new Error(`Failed to fetch books. Status:${Response.status}`);
      }
    }
    return Response.json();
  })
  .then((booksData) => {
    // Ensuring that the items exist before mapping
    if (!booksData.items) {
      throw new Error('No books found in the response.');
    }
    // If items exist then I Map over the books

    // EXPLICIT RETURN
    // const books = booksData.items.map((book) => {
    //   return {
    //     id: book.id, // Book ID
    //     title: book.volumeInfo?.title || 'No Title', // Book Title
    //     authors: book.volumeInfo?.authors?.join(', ') || 'Unknown Author', // Authors
    //     publisher: book.volumeInfo?.publisher || 'Unknown Publisher', // Publisher
    //   };
    // });

    // IMPLICIT RETURN
    // I omit the return by using implicit return const books = booksData.items.map((book) => ({...})), I wrapped it in extra ();
    const books = booksData.items.map((book) => ({
      title: book.volumeInfo?.title || 'No Title', // Book Title
      authors: book.volumeInfo?.authors?.join(', ') || 'Unknown Author', // Authors
      rating: book.volumeInfo?.averageRating || 'No Rating Given', // Rating
    }));

    // Log both in a single object
    // 4. Calculate:
    //    - total number of books
    //    - average rating (only for books that have ratings)
    const stats = {
      totalBooks: books.length,
      averageRating:
        books
          .filter((book) => book.rating !== 'No Rating Given')
          .reduce((acc, book) => acc + Number(book.rating), 0) /
        books.filter((book) => book.rating !== 'No Rating Given').length,
    };
    // Log the extracted book data  // Log both in a single object
    console.log({
      stats: stats,
      books: books,
    });
  })

  .catch((error) => {
    if (
      error.message.includes('Resource not found') ||
      error.message.includes('Access forbidden') ||
      error.message.includes('There was an')
    ) {
      console.error('Data fetching error:', error.message);
    } else {
      console.error('Data processing error:', error.message);
    }
  });

// When Should You Use return:
// If you have multiple statements inside the function, example:
//   const books = booksData.items.map((book) => {
//     console.log(book); // Extra logic before returning
//     return {
//       id: book.id,
//       title: book.volumeInfo?.title || 'No Title',
//       authors: book.volumeInfo?.authors?.join(', ') || 'Unknown Author',
//       publisher: book.volumeInfo?.publisher || 'Unknown Publisher',
//     };
//   });
