import { MovieCard } from "./MovieCard";
import { useEffect, useState } from "react";
import styles from "./MoviesGrid.module.css";
import { get } from "../utils/Peticion";
import {useQuery} from "../hooks/useQuery"


export function MoviesGrid() {
  const query = useQuery();
  const search = query.get("search");
  console.log(search);
  const [movies, setMovies] = useState([]);
  useEffect(() => {

    const searchUrl = search
      ? "/search/movie?query=" + search + "&language=es-MX"
      : "/discover/movie?language=es-MX";
    get(searchUrl).then((data) => {
      setMovies(data.results);
    });
  }, [search]);
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
