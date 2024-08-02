import { useState, useEffect } from "react";
import { TGetFaq } from "src/types/Types";

import axios from "axios";

export function useGetFaq() {
  const [faq, setFaq] = useState<TGetFaq[]>([]);

  async function getFaq() {
    try {
      const response = await axios.post("http://localhost:3000/graphql", {
        query: "{ faq { id faq faqNum} }",
      });
      setFaq(response.data.data.faq);
    } catch (error) {
      console.log("Error Loading Frequently Asked Questions", error);
    }
  }

  useEffect(() => {
    getFaq();
  }, []);

  return { faq };
}
