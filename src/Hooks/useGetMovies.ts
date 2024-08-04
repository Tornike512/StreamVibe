import { useState, useEffect } from "react";
import { TGetMovies } from "src/types/Types";

import axios from "axios";

export function useGetMovies() {
  const [movies, setMovies] = useState<TGetMovies[]>([]);

  async function getMovies() {
    try {
      const response = await axios.post(
        "https://streamvibe-backend-3.onrender.com/graphql",
        {
          query: "{ movie { id genre image} }",
        }
      );
      setMovies(response.data.data.movie);
    } catch (error) {
      console.log("Error Loading Movies", error);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return { movies };
}
