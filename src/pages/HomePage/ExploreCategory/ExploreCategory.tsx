import { Slider } from "src/components/Slider";
import { SliderButtons } from "src/components/SliderButtons";

export function ExploreCategory() {
  return (
    <section className="max-w-[1920px] w-full mb-[150px] px-[40px] overflow-hidden">
      <ul className="max-w-[1920px] flex justify-between mb-[80px]">
        <li>
          <h2 className="text-[#ffffff] text-[38px] font-bold mb-[14px]">
            Explore our wide variety of categories
          </h2>
          <p className="text-[18px] text-[#999999]">
            Whether you're looking for a comedy to make you laugh, a drama to
            make you think, or a documentary to learn something new
          </p>
        </li>
        <SliderButtons />
      </ul>
      <div>
        <Slider />
      </div>
    </section>
  );
}

export default ExploreCategory;
