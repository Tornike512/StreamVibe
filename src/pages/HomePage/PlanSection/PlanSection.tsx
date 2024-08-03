export function PlanSection() {
  return (
    <section className="max-w-[1920px] w-full mb-[150px]">
      <div className="flex justify-between mb-[80px]">
        <div>
          <h2 className="text-[#ffffff] text-[38px] font-bold mb-[14px]">
            Choose the plan that's right for you
          </h2>
          <p className="text-[18px] text-[#999999]">
            Join StreamVibe and select from our flexible subscription options
            tailored to suit your viewing preferences. Get ready for non-stop
            entertainment!
          </p>
        </div>
        <div className="bg-[#0F0F0F] rounded-[12px] flex justify-between items-center p-[16px]">
          <button className="rounded-[8px] bg-[#1F1F1F] p-[19px] text-[18px] text-[#ffffff]">
            Monthly
          </button>
          <button className="rounded-[8px] p-[19px] text-[#999999] text-[18px] ">
            Yearly
          </button>
        </div>
      </div>
      <ul className="grid grid-cols-[1fr_1fr_1fr] gap-x-[30px]">
        <li className="rounded-[12px] bg-[#1F1F1F] p-[50px]">
          <h3 className="text-[#ffffff] text-[24px] font-bold mb-[16px]">
            Basic Plan
          </h3>
          <p className="text-[18px] text-[#999999] mb-[50px]">
            Enjoy an extensive library of movies and shows, featuring a range of
            content, including recently released titles.
          </p>
          <h2 className="flex items-end text-[#ffffff] text-[40px] mb-[50px] font-bold">
            $9.99<p className="text-[18px] text-[#999999]">/Month</p>
          </h2>
          <div className="flex items-center justify-between">
            <button className="w-[45%] bg-[#0F0F0F] rounded-[8px] p-[24px] text-[#ffffff] text-[18px] hover:bg-[#404040]">
              Start Free Trial
            </button>
            <button className="w-[45%] h-fit bg-[#E50000] text-[#ffffff] text-[18px] p-[20px] rounded-[8px] hover:bg-[#FF3333]">
              Choose Plan
            </button>
          </div>
        </li>
        <li className="rounded-[12px] bg-[#1F1F1F] p-[50px]">
          <h3 className="text-[#ffffff] text-[24px] font-bold mb-[16px]">
            Standard Plan
          </h3>
          <p className="text-[18px] text-[#999999] mb-[50px]">
            Access to a wider selection of movies and shows, including most new
            releases and exclusive content
          </p>
          <h2 className="flex items-end text-[#ffffff] text-[40px] mb-[50px] font-bold">
            $12.99<p className="text-[18px] text-[#999999]">/Month</p>
          </h2>
          <div className="flex items-center justify-between">
            <button className="w-[45%] bg-[#0F0F0F] rounded-[8px] p-[24px] text-[#ffffff] text-[18px] hover:bg-[#404040]">
              Start Free Trial
            </button>
            <button className="w-[45%] h-fit bg-[#E50000] text-[#ffffff] text-[18px] p-[20px] rounded-[8px] hover:bg-[#FF3333]">
              Choose Plan
            </button>
          </div>
        </li>
        <li className="rounded-[12px] bg-[#1F1F1F] p-[50px]">
          <h3 className="text-[#ffffff] text-[24px] font-bold mb-[16px]">
            Premium Plan
          </h3>
          <p className="text-[18px] text-[#999999] mb-[50px]">
            Access to a widest selection of movies and shows, including all new
            releases and Offline Viewing
          </p>
          <h2 className="flex items-end text-[#ffffff] text-[40px] mb-[50px] font-bold">
            $14.99<p className="text-[18px] text-[#999999]">/Month</p>
          </h2>
          <div className="flex items-center justify-between">
            <button className="w-[45%] bg-[#0F0F0F] rounded-[8px] p-[24px] text-[#ffffff] text-[18px] hover:bg-[#404040]">
              Start Free Trial
            </button>
            <button className="w-[45%] h-fit bg-[#E50000] text-[#ffffff] text-[18px] p-[20px] rounded-[8px] hover:bg-[#FF3333]">
              Choose Plan
            </button>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default PlanSection;
