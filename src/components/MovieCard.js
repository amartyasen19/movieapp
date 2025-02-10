import React from "react";
import { Link } from "react-router-dom";
import "../styles/MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} className="movie-link">
      <div className="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>Rating: {movie.vote_average}</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
