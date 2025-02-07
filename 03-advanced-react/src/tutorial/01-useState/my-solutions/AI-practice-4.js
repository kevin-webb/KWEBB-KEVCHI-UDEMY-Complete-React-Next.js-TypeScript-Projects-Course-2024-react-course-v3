/**
 *
 */

const apiKey = '92c971560e4ebd12d5285f2f342bfc23';
const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;

// Create headers object with your API key
const headers = {
  Authorization: `Bearer ${apiKey}`,
};

fetch(url, { headers })
  .then((response) => {
    // 1. Error Handling
    if (!response.ok) {
      if (response.status === 401) {
        throw new Error('API key not valid');
      } else if (response.status === 429) {
        throw new Error('Too many requests');
      } else {
        throw new Error(`Failed to fetch movies: ${response.status}`);
      }
    }
    return response.json();
  })
  .then((data) => {
    // 2. Data Transformation
    if (!data.results) {
      throw new Error('No movies found in the response');
    }

    const movies = data.results.map((movie) => ({
      name: movie.title || 'Untitled',
      releaseYear: movie.release_date
        ? movie.release_date.split('-')[0]
        : 'Year Unknown',
      popularity: movie.popularity || 0,
      isNew: movie.release_date
        ? (new Date() - new Date(movie.release_date)) / (1000 * 60 * 60 * 24) <=
          30
        : false,
    }));

    // 3. Calculate Statistics
    const stats = {
      totalMovies: movies.length,
      averagePopularity: (
        movies.reduce((sum, movie) => sum + movie.popularity, 0) / movies.length
      ).toFixed(1),
      newReleasesCount: movies.filter((movie) => movie.isNew).length,
    };

    // 4. Create final output object
    const output = {
      movies,
      stats,
    };

    console.log(output);
    return output;
  })
  .catch((error) => {
    if (
      error.message.includes('API key not valid') ||
      error.message.includes('Too many requests') ||
      error.message.includes('Failed to fetch')
    ) {
      console.error('API Error:', error.message);
    } else {
      console.error('Data processing error:', error.message);
    }
  });
