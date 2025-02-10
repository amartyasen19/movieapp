import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TopRated from "./pages/TopRated";
 
import MovieDetail from "./pages/MovieDetail";
import UpcomingMovies from "./pages/UpcomingMovies";
import SearchResult from "./pages/SearchResults";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/upcoming" element={<UpcomingMovies/>} />
          <Route path="/search" element={<SearchResult/>}/>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
