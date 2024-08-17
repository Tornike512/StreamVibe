import planMainImage from "src/assets/plan-main-image.png";

export function StartPlanSection() {
  return (
    <section className="flex justify-center relative w-full max-w-[1920px] mb-[150px] px-[40px]">
      <img
        className="w-[-webkit-fill-available] lg:h-[400px] lg:object-cover"
        src={planMainImage}
        alt="Start Plan Main Image"
      />
      <figure className="flex justify-around items-center w-full absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 xl:w-[85%] lg:flex-col">
        <div className="">
          <h1 className="text-[48px] text-[#ffffff] font-bold xl:text-[32px] lg:justify-center lg:flex lg:items-center lg:text-center lg:mb-2.5">
            Start your free trial today!
          </h1>
          <p className="text-[18px] text-[#999999] mb-[50px] lg:justify-center lg:flex lg:items-center lg:text-center">
            This is a clear and concise call to action that encourages users to
            sign up for a free trial of StreamVibe.
          </p>
        </div>
        <button className="h-fit bg-[#E50000] text-[#ffffff] whitespace-nowrap text-[18px] p-[20px] rounded-[8px] hover:bg-[#FF3333] xl:h-[66px] lg:w-[95%]">
          Start a Free Trail
        </button>
      </figure>
    </section>
  );
}

export default StartPlanSection;
