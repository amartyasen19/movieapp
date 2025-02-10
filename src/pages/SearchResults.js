import React from "react";
import { useSelector } from "react-redux";
import Pagination from "../components/Pagination";
import "../styles/Home.css";

const SearchResults = () => {
  const { searchedMovies, loading, error } = useSelector((state) => state.movies);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;
  if (!searchedMovies || searchedMovies.length === 0)
    return <h2>No movies found!</h2>;

  return (
    <div className="home-container">
      <Pagination movies={searchedMovies} />
    </div>
  );
};

export default SearchResults;
