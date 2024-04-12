async function searchMovies() {
    const searchInput = document.getElementById('searchInput').value;
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
  
    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${searchInput}&apikey=5f53a8d2`);
      const data = await response.json();
  
      if (data.Search) {
        data.Search.forEach(movie => {
          const movieElement = document.createElement('div');
          movieElement.innerHTML = `
            <h2>${movie.Title}</h2>
            <p>${movie.Year}</p>
            <img src="${movie.Poster}" alt="${movie.Title} Poster">
          `;
          resultsDiv.appendChild(movieElement);
        });
      } else {
        resultsDiv.innerHTML = '<p>No results found</p>';
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  