import { useGetFaq } from "src/Hooks/useGetFaq";

export function FAQSection() {
  const { faq } = useGetFaq();

  return (
    <section className="max-w-[1920px] w-full mb-[150px]">
      <div className="flex justify-between mb-[80px]">
        <div>
          <h2 className="text-[#ffffff] text-[38px] font-bold mb-[14px]">
            Frequently Asked Questions
          </h2>
          <p className="text-[18px] text-[#999999]">
            Got questions? We've got answers! Check out our FAQ section to find
            answers to the most common questions about StreamVibe.
          </p>
        </div>
        <button className="h-fit bg-[#E50000] flex text-[#ffffff] text-[18px] p-[20px] rounded-[8px] hover:bg-[#FF3333]">
          Ask a Question
        </button>
      </div>
      <ul className="grid grid-cols-[1fr_1fr] gap-x-[50px]">
        {faq.map((question) => {
          return (
            <li
              className="flex items-center py-[35px] border-b-[3px] border-solid border-b-[#E50000]"
              key={question.id}
            >
              <button className="rounded-[8px] mr-[20px] text-[20px] text-[#ffffff] bg-[#1F1F1F] p-[19px] hover:bg-[#404040]">
                {question.faqNum}
              </button>
              <h3 className="text-[#ffffff] text-[22px] font-bold">
                {question.faq}
              </h3>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default FAQSection;
