import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchSearchedMovies } from "../redux/movieSlice";
import "../styles/Navbar.css";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (query.trim()) {
      dispatch(fetchSearchedMovies(query));
      navigate(`/search?query=${query}`);
      setQuery("");  
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">MovieDB</Link>
      </div>

      {/* Menu Button */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>Popular</Link>
        </li>
        <li>
          <Link to="/top-rated" onClick={() => setMenuOpen(false)}>Top Rated</Link>
        </li>
        <li>
          <Link to="/upcoming" onClick={() => setMenuOpen(false)}>Upcoming</Link>
        </li>
      </ul>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}  
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </nav>
  );
};

export default Navbar;
