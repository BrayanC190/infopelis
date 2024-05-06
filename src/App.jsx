//import { MoviesGrid } from "./components/MoviesGrid";
import styles from "./App.module.css"
import { useParams } from "react-router";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";

export function App(){
    return(
        <Router> 
            <header>
                 < Link to="/"> 
                 <h1 className={styles.title}>Movies</h1> 
                 </Link>
            </header>
            <main>
            <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/movies/:movieid" element={<MovieDetails movieId={parseInt(useParams().movieid)} />} />
        </Routes>
            </main>
        </Router>
    );
}