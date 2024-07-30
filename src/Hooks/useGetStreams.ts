import { useState, useEffect } from "react";
import { TGetStreams } from "src/types/Types";

import axios from "axios";

export function useGetStreams() {
  const [streams, setStreams] = useState<TGetStreams[]>([]);

  async function getStreams() {
    try {
      const response = await axios.post("http://localhost:3000/graphql", {
        query: "{ stream { id streamTitle image} }",
      });
      setStreams(response.data.data.stream);
    } catch (error) {
      console.log("Error Loading Movies", error);
    }
  }

  useEffect(() => {
    getStreams();
  }, []);

  return { streams };
}
