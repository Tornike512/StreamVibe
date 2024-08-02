import { useGetFaq } from "src/Hooks/useGetFaq";

export function FAQSection() {
  const { faq } = useGetFaq();

  return (
    <section>
      <div>
        <div>
          <h2>Frequently Asked Questions</h2>
          <p>
            Got questions? We've got answers! Check out our FAQ section to find
            answers to the most common questions about StreamVibe.
          </p>
        </div>
        <button>Ask a Question</button>
      </div>
      <ul>
        {faq.map((question) => {
          return (
            <li key={question.id}>
              <button>{question.faqNum}</button>
              <h3>{question.faq}</h3>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default FAQSection;
