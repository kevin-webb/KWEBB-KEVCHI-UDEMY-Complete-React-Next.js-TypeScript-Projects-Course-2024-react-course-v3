/**
Let's fetch data from the GitHub API for a user's repositories. This is great practice because it can return different status codes based on various scenarios.
```
const username = 'fake-user-that-doesnt-exist';  // Try with this first
// const username = 'facebook';  // Then try with this
const url = `https://api.github.com/users/${username}/repos`;

fetch(url)
  .then(response => {
    // Add your error handling here
    // Hint: Check response.ok or response.status
    
    return response.json();
  })
  .then(data => {
    // Transform the data to only include:
    // - repository name
    // - description (if available, otherwise 'No description')
    // - number of stars
    // - is it a fork? (true/false)
    
    console.log(data);
  })
  .catch(err => {
    // Add better error messages here
    console.log(err);
  });
```
Your tasks:
Add error handling for HTTP status codes (like 404)
Transform the repository data into a simpler format
Handle missing data gracefully (some repos might not have descriptions)
Add meaningful error messages

Expected output format for success:
```
[
  {
    name: "repo-name",
    description: "Repo description or 'No description'",
    stars: 42,
    isFork: false
  },
  // ... more repos
]
```
Give it a try! Remember to:
Check response.ok or response.status
Think about what error messages would be helpful
Consider what happens if the username doesn't exist
Handle the case where a repository is missing some data
 */

// const username = 'fake-user-that-doesnt-exist';
const username = 'facebook';
const url = `https://api.github.com/users/${username}/repos`;

fetch(url)
  .then((response) => {
    if (!response.ok) {
      // This stops execution and jumps to .catch()
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  })
  .then((data) => {
    console.log(
      data.map(({ name, description, stargazers_count, forks_count }) => ({
        name,
        description: description || 'No description',
        star: stargazers_count || 'No star',
        // Convert fork count to a boolean: true if > 0, false otherwise
        fork: forks_count > 0,
      }))
    );
  })
  .catch((err) => {
    console.log(`There was an ${err} when trying to retrieve the GitHub data`);
  });
