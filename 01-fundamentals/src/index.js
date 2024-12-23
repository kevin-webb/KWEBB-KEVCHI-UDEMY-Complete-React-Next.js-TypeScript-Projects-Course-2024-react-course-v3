// index_booklist

/**
 * @fileoverview BookList application component structure
 * @description Renders a list of books with their images, titles, and authors
 * @author Kevin Chisholm
 * @version 1.0.0
 */

import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * @component BookList
 * @description Parent component that renders multiple Book components
 * @returns {JSX.Element} A section containing multiple Book components
 */
function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

/**
 * @component Book
 * @description Container component for book information
 * @returns {JSX.Element} Article containing book image, title, and author
 */
const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

/**
 * Child Components
 * @component Image - Placeholder for book cover image
 * @component Title - Displays book title
 * @component Author - Shows author name
 *
 * @returns {JSX.Element} Each returns a heading element
 */
const Image = () => <h2>image placeholder</h2>;
const Title = () => <h2>Book Title</h2>;
const Author = () => <h4>Author</h4>;

// Root rendering setup
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);

/* 
Notes - My Thought Process/My Understanding:

1. Setting Up the Structure:
  First, I knew I needed a place to put my counter, so I created a div in my HTML. 
  I gave it an id of "counter-container" because I learned that we need a way to 
  tell JavaScript where to find this div later.

2. Creating the Counter Function:
  I created a function called createCounter that takes a containerId parameter. 
  I remember that parameters are like placeholders that will be filled 
  in later when we actually use the function. When I use getElementById with this 
  parameter, it helps JavaScript find my div in the HTML.

3. Building the Parts:
  I needed three main parts for my counter:
  - A span to show the number (I learned spans are good for small bits of text)
  - Two buttons (one for adding, one for subtracting)
  I used createElement for each of these because I remember that's how we create 
  new HTML elements with JavaScript.

4. Setting Up the Counter:
  I started my counter at 0 using a variable called 'value'. I put the 0 in the 
  span using textContent, and added '+' and '-' to my buttons so users know what 
  they do. I used let instead of const for 'value' because I knew it would need 
  to change when clicked.

5. Making it Interactive:
  This was the tricky part! I used addEventListener (which we just learned about) 
  to make the buttons work. When someone clicks a button, it either adds or 
  subtracts from my value and updates what's shown on the screen.

6. Putting it All Together:
  I used appendChild to add everything to my container div in order: first the 
  number, then the plus button, then the minus button. It's like stacking blocks 
  one after another.

7. Starting it Up:
  Finally, I called my function with 'counter-container' so it knows which div to 
  use. This was like turning on the engine to make everything work!

I'm still learning, but I think I understand how all these pieces work together 
now. It's pretty cool to see how JavaScript can make a simple div turn into 
something interactive!
*/

/* 
JavaScript's Journey Through the Code - How It All Works:

When my createCounter('counter-container') gets called, JavaScript follows this path:

1. First Stop - Finding My Container:
   - JavaScript takes my 'counter-container' parameter
   - It searches through the entire DOM (which I learned is like JavaScript's map of my HTML)
   - It looks for anything with id="counter-container"
   - Once found, it saves a reference to this div in my 'container' variable
   - I found it super interesting that JavaScript doesn't actually keep the whole div in memory, 
     just a reference to where it can find it!

2. Creating New Elements:
   - JavaScript then creates three separate things in its memory:
     * A new span element (for my number)
     * A '+' button element
     * A '-' button element
   - At this point, these elements only exist in JavaScript's memory (Heap for DOM elements), not on my webpage yet
   - This blew my mind when I first learned it - elements can exist in memory before they're visible!

3. Setting Up The Counter's Brain:
   - JavaScript creates a space in memory for my 'value' variable (Stack) and sets it to 0
   - It then tells the span "hey, show this 0"
   - It also tells each button what text to show ('+' or '-')
   - My instructor said this is like setting up the "initial state" of my counter

4. The Really Cool Part - Event Listeners:
   - JavaScript sets up two special watchers (event listeners)
   - These watchers are constantly alert, waiting for someone to click either button
   - When someone clicks '+':
     * JavaScript finds the 'value' variable in memory
     * Adds 1 to it
     * Updates what the span is showing
   - Same thing happens with '-' but subtracting instead
   - I learned this is called "maintaining state" - keeping track of my counter's current number

5. The Grand Finale - Building My Counter:
   - JavaScript takes each element it created and adds them to my container
   - It does this in order:
     1. First adds the span (showing 0)
     2. Then adds the '+' button
     3. Finally adds the '-' button
   - Each appendChild is like JavaScript saying "take this thing I created and make it visible on the webpage"

The coolest thing I learned is that JavaScript keeps some things (like my 'value' variable) in memory (Stack) even 
after the function is done running. My instructor called this a "closure" - it's like JavaScript creates 
a special bubble where my counter remembers its number (referencing closure scope in Stack), even as people click the buttons!
*/
