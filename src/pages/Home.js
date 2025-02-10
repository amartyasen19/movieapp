import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovies } from "../redux/movieSlice";
 
import Pagination from "../components/Pagination";
import "../styles/Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div className="container">
      <Pagination movies={popularMovies} />
    </div>
  );
};

export default Home;
