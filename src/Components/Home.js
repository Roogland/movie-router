import React from 'react';
import { Link } from 'react-router-dom';

const movies = [
  {
    id: 1,
    title: 'Movie 1',
    description: 'Description of Movie 1',
    trailerLink: 'https://www.youtube.com/embed/trailer1',
  },
  {
    id: 2,
    title: 'Movie 2',
    description: 'Description of Movie 2',
    trailerLink: 'https://www.youtube.com/embed/trailer2',
  },
  // Add more movies here
];

const Home = () => {
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
