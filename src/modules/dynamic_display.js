// TODO:create a list to represent the list to be returned by the server.
// TODO:dynamically display each item in the list onto the page
// TODO: ensure there are no errors when displaying the items.
// TODO: make call to api

// Fetch data from an API...
export const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

// Render movie items to the page
export const renderMovies = (movies, element) => {
  element.innerHTML += movies.map((movie) => `<div class="grid-item">
                <div class="movie-cover">
                    <img src=${movie.image.medium}>
                </div>
                <div class="movie-title">
                    <p class="likes-num mov-title">${movie.name} </p>
                    <div class="like-count">
                        <i class="fa-regular fa-heart"></i><br>
                        <p class="likes-num">${movie.runtime} likes</p>
                    </div>

                </div>

                <button class="btn-btn">Comments</button>
                <button class="btn-btn">Reservations</button>
            </div>`).join('');
};

// Fetch and render movies from the TV Maze API
export const showMovies = async () => {
  const apiUrl = 'https://api.tvmaze.com/shows';
  const movieList = await fetchData(apiUrl);
  const showMovie = document.querySelector('.grid-container');
  renderMovies(movieList, showMovie);
};
