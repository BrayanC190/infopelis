import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Moviecard.module.css";

export function MovieCard({ movie }) {
  const [showDescription, setShowDescription] = useState(false);

  const handleMouseOver = () => {
    setShowDescription(true);
  };

  const handleMouseOut = () => {
    setShowDescription(false);
  };

  const imageUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;

  return (
    <li className={styles.movieCard}>
      <Link to={`/movies/${movie.id}`} state={{ movie }}>
        <div
          className={styles.movieImageContainer}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <img  className={styles.movieImage}
            width={230}
            height={345}
            src={imageUrl}
            alt={movie.title}
          />
          {showDescription && (
            <div className={styles.descripcionOverlay}>
              <p>{movie.overview}</p>
            </div>
          )}
        </div>
        <div className={styles.title}>{movie.title}</div>
        <div className={styles.releaseDate}>{movie.release_date}</div>
      </Link>
    </li>
  );
}
