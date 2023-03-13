import React from 'react';
import { Link, useParams } from 'react-router-dom';

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

const Description = () => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe title={movie.title} width="560" height="315" src={movie.trailerLink} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <Link to="/">Back</Link>
    </div>
  );
};

export default Description;
