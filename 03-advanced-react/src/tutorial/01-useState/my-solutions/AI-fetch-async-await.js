/**
1. My Original Work:
const url = 'https://www.course-api.com/react-tours-project'

I want you to create a JavaScript function that fetches data from the above url using the Fetch API. 

Here's what you need to do:

1. Use fetch() to request data from the above url.

2. Handle the response using .then() to parse the JSON.

3. Implement error handling using .catch().

4. Log the retrieved data to the console.

Finally, refactor your code to use async/await while maintaining proper error handling.

Once you've completed the task, explain the step-by-step execution of your code.
*/

// // pass the url to a variable
// const url = 'https://www.course-api.com/react-tours-project';

// // Console.log using the the fetch method to get the API Promise
// console.log(fetch(url));
// // Fetch the url
// fetch(url)
//   // Pass the response (which is a promise) and converting it to JSON.
//   .then((resp) => resp.json())
//   // After receiving the response (which is the returned promise), we then console.log the data.
//   .then((data) => console.log(data))
//   // In the event of an error (withing 400 range) we return the result of the error.
//   .catch((err) => console.log(err));

/** 
 * ##Practice Exercise:
 * Create a function that fetches user data from 'https://jsonplaceholder.typicode.com/users' using the Fetch API.
Requirements:
Use fetch() to request the data
Extract specific user fields (name, email, company name) from each user
Handle the response using .then()
Implement error handling with .catch()
Log the transformed data as an array of objects

Expected output format:
```
[
  { name: "...", email: "...", company: "..." },
  // ... more users
]
```
*/

const url = 'https://jsonplaceholder.typicode.com/users';

// 👇THIS IS INCORRECT ⤵
// const fetchData = () => {
//   fetch(url)
//     .then((resp) => resp.json())
//     .then((data) => {
//       const { name, email, company } = data;
//       console.log(name);
//       console.log(email);
//       console.log(company);
//     })
//     .catch((err) => console.log(err));
// };

// 👇THIS IS CORRECT👇
// fetch(url)
//   .then((resp) => resp.json())
//   .then((users) => {
//     // users is an array, so map through it
//     const transformedData = users.map((user) => ({
//       name: user.name,
//       email: user.email,
//       company: user.company.name, // Access nested company name
//     }));
//     console.log(transformedData);
//   })
//   .catch((err) => console.log(err));

// Fetch the url
fetch(url)
  // Pass the response (which is a promise) and converting it to JSON.
  .then((resp) => resp.json())
  // After converting it to JSON, we then set the 'users' parameter.
  .then((users) => {
    //
    // LONGFORM METHOD
    // Because the users parameter is an array of objects, we need to map through it.
    // I chose to destructur the object directly instead of passing the object (single user)
    // const transformedData = users.map(({ name, email, company }) => ({
    //   // I then pass the destructured user to each parameter
    //   name: name,
    //   email: email,
    //   company: company.name, // Access nested company name using the dot notation
    // }));

    // SHOTRHAND METHOD
    // Since my property names match my variables, I could use object property shorthand & encapsulate it in a console.log:
    console.log(
      users.map(({ name, email, company }) => ({
        name,
        email,
        lee: company.name,
      }))
    );
  })
  // I then return the error using the catch.
  .catch((err) => console.log(err));
