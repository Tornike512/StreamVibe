import { useState, useEffect } from "react";
import { TGetMovies } from "src/types/Types";

import axios from "axios";

export function useGetMovies() {
  const [movies, setMovies] = useState<TGetMovies[]>([]);

  async function getMovies() {
    try {
      const response = await axios.get("http://localhost:3000/movies");
      setMovies(response.data.movies);
    } catch (error) {
      console.log("Error Loading Movies");
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return { movies };
}
