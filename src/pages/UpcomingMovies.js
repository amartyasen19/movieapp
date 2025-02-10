import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpcomingMovies } from "../redux/movieSlice";
import Pagination from "../components/Pagination";
import "../styles/Home.css";

const UpcomingMovies = () => {
  const dispatch = useDispatch();
  const { upcomingMovies, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchUpcomingMovies());
  }, [dispatch]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div className="container">
      <Pagination movies={upcomingMovies} />
    </div>
  );
};

export default UpcomingMovies;
