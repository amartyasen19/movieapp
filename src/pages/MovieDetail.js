import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetail, fetchMovieCast } from "../redux/movieSlice";
import "../styles/MovieDetail.css"; // Import CSS

const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { movieDetail, movieCast, loading, error } = useSelector(
    (state) => state.movies
  );

  useEffect(() => {
    dispatch(fetchMovieDetail(id));
    dispatch(fetchMovieCast(id));
  }, [dispatch, id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="error-message">⚠️ Error: {error}</div>;
  if (!movieDetail) return <div>No movie details available.</div>;

  const {
    title,
    vote_average,
    genres,
    release_date,
    overview,
    poster_path,
    backdrop_path,
    runtime,
  } = movieDetail;

  const formatRuntime = (runtime) => {
    if (!runtime) return "N/A";
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}m`;
  };

  return (
    <>
      {/* Movie Details Section */}
      <div className="details-section">
        <div className="left-side">
          <div className="details-left">
            <div className="poster-container">
              <img
                src={
                  poster_path ? `${IMAGE_URL}${poster_path}` : "/default.jpg"
                }
                alt={title}
                className="poster-image"
              />
            </div>

            <div className="details-info">
              <h2 className="details-title">{title}</h2>
              <p className="details-rating">
                <strong>Rating:</strong> {vote_average}
              </p>
              <p className="details-genres">
                <strong>Genres:</strong> {genres?.map((g) => g.name).join(", ")}
              </p>
              <p className="details-release-date">
                <strong>Release Date:</strong> {release_date}
              </p>
              <p className="details-duration">
                <strong>Running time:</strong> {formatRuntime(runtime)}
              </p>
            </div>
          </div>

          {/* Overview Below Poster (Aligned with Image) */}
          <div className="overview-container">
            <h3 className="overview-title">Overview</h3>
            <p className="overview">{overview}</p>
          </div>
        </div>

        <div className="backdrop-container">
          <img
            src={
              backdrop_path ? `${IMAGE_URL}${backdrop_path}` : "/default-bg.jpg"
            }
            alt={title}
            className="backdrop-image"
          />
        </div>
      </div>

      {/* Cast Section */}
      {movieCast && movieCast.length > 0 && (
        <div className="cast-container">
          <h3 className="cast-heading">Cast</h3>
          <div className="cast-list">
            {movieCast.slice(0, 15).map((actor) => (
              <div key={actor.id} className="cast-item">
                <img
                  src={
                    actor.profile_path
                      ? `${IMAGE_URL}${actor.profile_path}`
                      : "/default-avatar.jpg"
                  }
                  alt={actor.name}
                  className="actor-image"
                />
                <p className="actor-name">{actor.name}</p>
                <p className="character-name">{actor.character}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
