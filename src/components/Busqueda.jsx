import { useState, useEffect } from "react";

import styles from "./Busqueda.module.css";
import { LuSearchCheck } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
export function Busqueda() {
  const query = useQuery();
  const search = query.get("search");
  const [buscarText, setBuscarText] = useState("");
  const navegar = useNavigate();
  useEffect(() => {setBuscarText(search || "")}, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navegar("/?search=" + buscarText);
  };
  return (
    <form className={styles.buscadorContainer} onSubmit={handleSubmit}>
      <div className={styles.buscadorBox}>
        <input
          className={styles.buscadorInput}
          type="text"
          value={buscarText}
          onChange={(e) => setBuscarText(e.target.value.toLowerCase())}
        />
        <button className={styles.buscadorButton} type="submit">
          <LuSearchCheck className={styles.buscadorIcon} />
        </button>
      </div>
    </form>
  );
}
