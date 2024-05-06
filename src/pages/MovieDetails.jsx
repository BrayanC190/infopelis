import React, { useEffect, useState } from "react";
import movie from "./movie.json"; // Asegúrate de que esto sea correcto
import styles from "./MovieDetails.module.css";
import { useParams } from "react-router-dom";
import { get } from "../utils/Peticion";
import { useQuery } from "../hooks/useQuery";

export function MovieDetails() {
  const { movieid } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    get("/movie/" + movieid + "?language=es-MX").then((data) => {
      setMovie(data);
      console.log(data);
    });
  }, [movieid]);

  if (!movie) {
    return null;
  }
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={styles.col + " " + styles.MovieDetails}>
        <p className={styles.parrafo}>
          <strong>Titulo:</strong> {movie.title}
        </p>
        <p>
          <strong>Genero:</strong>{" "}
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Descripcion: </strong>
          {movie.overview}
        </p>
      </div>
    </div>
  );
}
