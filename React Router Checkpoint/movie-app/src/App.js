import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import MovieDescription from './components/movieDescription';

const movies = [
  {
    id: 1,
    title: "PostCard",
    description: "This is a detailed description of the movie.",
    trailer: "https://youtu.be/UcIGHQay5ig?si=nCZLYOaz4z98FhkN",
    // other movie fields...
  },
  {
    id: 2,
    title: "inception",
    description: "This is a detailed description of another movie.",
    trailer: "https://youtu.be/8hP9D6kZseM?si=l2oTfh6Fmf1i8IDc",
    // other movie fields...
  },
  // more movies...
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage movies={movies} />} />
        <Route path="/movie/:id" element={<MovieDescription movies={movies} />} />
      </Routes>
    </Router>
  );
}

export default App;
