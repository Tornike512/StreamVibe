import { SliderButtons } from "src/components/SliderButtons";

export function ExploreCategory() {
  return (
    <section className="max-w-[1920px] w-full">
      <ul className="flex justify-between">
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
      <ul>
        <li>
          <img src="" alt="Movies Images" />
          <figure>
            <figcaption>Action</figcaption>
            <img src="" alt="right arrow" />
          </figure>
        </li>
      </ul>
    </section>
  );
}

export default ExploreCategory;
