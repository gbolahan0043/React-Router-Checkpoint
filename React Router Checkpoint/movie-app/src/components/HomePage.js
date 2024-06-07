import React from 'react';
import MovieCard from './movieCard';

const HomePage = ({ movies }) => {
  return (
    <div>
      <h1>Movie List</h1>
      <div className="movie-list">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
