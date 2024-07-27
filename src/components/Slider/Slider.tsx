import moviesGrid from "src/assets/movies-grid.png";
import rightArrow from "src/assets/right-arrow.png";

export function Slider() {
  return (
    <ul className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-x-[30px]">
      <li className="p-[30px] bg-[#262626] w-full rounded-[12px] cursor-pointer flex flex-col">
        <img src={moviesGrid} alt="Movies Images" />
        <figure className="flex justify-between mt-[5px]">
          <figcaption className="text-[22px] text-[#ffffff]">Action</figcaption>
          <img src={rightArrow} alt="Right Arrow Icon" />
        </figure>
      </li>
      <li className="p-[30px] bg-[#262626] w-full rounded-[12px] cursor-pointer flex flex-col">
        <img src={moviesGrid} alt="Movies Images" />
        <figure className="flex justify-between mt-[5px]">
          <figcaption className="text-[22px] text-[#ffffff]">Action</figcaption>
          <img src={rightArrow} alt="Right Arrow Icon" />
        </figure>
      </li>
      <li className="p-[30px] bg-[#262626] w-full rounded-[12px] cursor-pointer flex flex-col">
        <img src={moviesGrid} alt="Movies Images" />
        <figure className="flex justify-between mt-[5px]">
          <figcaption className="text-[22px] text-[#ffffff]">Action</figcaption>
          <img src={rightArrow} alt="Right Arrow Icon" />
        </figure>
      </li>
      <li className="p-[30px] bg-[#262626] w-full rounded-[12px] cursor-pointer flex flex-col">
        <img src={moviesGrid} alt="Movies Images" />
        <figure className="flex justify-between mt-[5px]">
          <figcaption className="text-[22px] text-[#ffffff]">Action</figcaption>
          <img src={rightArrow} alt="Right Arrow Icon" />
        </figure>
      </li>
      <li className="p-[30px] bg-[#262626] w-full rounded-[12px] cursor-pointer flex flex-col">
        <img src={moviesGrid} alt="Movies Images" />
        <figure className="flex justify-between mt-[5px]">
          <figcaption className="text-[22px] text-[#ffffff]">Action</figcaption>
          <img src={rightArrow} alt="Right Arrow Icon" />
        </figure>
      </li>
    </ul>
  );
}

export default Slider;
