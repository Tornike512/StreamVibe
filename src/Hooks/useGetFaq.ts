import { useState, useEffect } from "react";
import { TGetFaq } from "src/types/Types";

import axios from "axios";

export function useGetFaq() {
  const [faq, setFaq] = useState<TGetFaq[]>([]);

  async function getFaq() {
    try {
      const response = await axios.post(
        "https://streamvibe-backend-3.onrender.com/graphql",
        {
          query: "{ faq { id faq faqNum} }",
        }
      );
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
