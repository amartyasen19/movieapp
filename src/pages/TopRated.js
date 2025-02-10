import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopRatedMovies } from "../redux/movieSlice";
import Pagination from "../components/Pagination";
import "../styles/Home.css";

const TopRated = () => {
  const dispatch = useDispatch();
  const { topRatedMovies, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchTopRatedMovies());
  }, [dispatch]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div className="container">
      <Pagination movies={topRatedMovies} />
    </div>
  );
};

export default TopRated;
