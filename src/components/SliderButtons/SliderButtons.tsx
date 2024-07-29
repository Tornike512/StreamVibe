import leftArrow from "src/assets/left-arrow.png";

import rightArrow from "src/assets/right-arrow.png";

export function SliderButtons() {
  return (
    <li className="w-[15%] bg-[#0F0F0F] rounded-[12px] flex justify-between items-center p-[16px]">
      <button className="rounded-[8px] bg-[#1F1F1F] p-[19px] hover:bg-[#404040]">
        <img src={leftArrow} alt="Left Arrow Icon" />
      </button>
      <span className="w-[20px] h-[5px] bg-[#E50000] ml-[10px]"></span>
      <span className="w-[20px] h-[5px] bg-[#404040]"></span>
      <span className="w-[20px] h-[5px] bg-[#404040]"></span>
      <span className="w-[20px] h-[5px] bg-[#404040] mr-[10px]"></span>
      <button className="rounded-[8px] bg-[#1F1F1F] p-[19px] hover:bg-[#404040]">
        <img src={rightArrow} alt="Right Arrow Icon" />
      </button>
    </li>
  );
}
