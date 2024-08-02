import { useState, useEffect } from "react";
import { TGetFaq } from "src/types/Types";

import axios from "axios";

export function useGetMovies() {
  const [faq, setFaq] = useState<TGetFaq[]>([]);

  async function getFaq() {
    try {
      const response = await axios.post("http://localhost:3000/graphql", {
        query: "{ faq { id faq faqNum} }",
      });
      setFaq(response.data.data.movie);
    } catch (error) {
      console.log("Error Loading Movies", error);
    }
  }

  useEffect(() => {
    getFaq();
  }, []);

  return { faq };
}
