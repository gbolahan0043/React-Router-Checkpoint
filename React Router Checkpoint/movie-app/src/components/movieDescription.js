import React from 'react';
import { Link, useParams } from 'react-router-dom';

const MovieDescription = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find(movie => movie.id === parseInt(id));

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe width="560" height="315" 
      src="https://www.youtube.com/embed/8hP9D6kZseM?si=l2oTfh6Fmf1i8IDc"
       title="YouTube video player" 
       frameborder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
       </iframe>
      <br />
      <Link to="/">Back to Home</Link>
    </div>

    
  );
};

export default MovieDescription;
