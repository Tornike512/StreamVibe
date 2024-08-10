import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "src/Redux/store";
import { useWindowSize } from "@uidotdev/usehooks";
import { slideLeft, slideRight } from "src/Features/SwitchSlider";

import leftArrow from "src/assets/left-arrow.png";
import rightArrow from "src/assets/right-arrow.png";

export function SliderButtons() {
  const { width = 0 } = useWindowSize();

  const handleSlideLeft = () => {
    dispatch(slideLeft({ width }));
  };

  const handleSlideRight = () => {
    dispatch(slideRight({ width }));
  };

  const dispatch: AppDispatch = useDispatch();
  const slide = useSelector((state: RootState) => state.slide.slide);

  return (
    <li className="w-[300px] h-[100px] bg-[#0F0F0F] rounded-[12px] flex justify-between items-center p-[16px]">
      <button
        onClick={handleSlideRight}
        className="rounded-[8px] bg-[#1F1F1F] p-[19px] hover:bg-[#404040]"
      >
        <img src={leftArrow} alt="Left Arrow Icon" />
      </button>
      <span
        className={`w-[20px] h-[5px] ml-[10px]`}
        style={{
          backgroundColor: slide === 0 ? "#E50000" : "#404040",
        }}
      ></span>
      <span
        className={`w-[20px] h-[5px]`}
        style={{
          backgroundColor:
            slide === -width || slide === -1904 ? "#E50000" : "#404040",
        }}
      ></span>
      <span
        className={`w-[20px] h-[5px]`}
        style={{
          backgroundColor:
            slide === -width * 2 || slide === -3808 ? "#E50000" : "#404040",
        }}
      ></span>
      <span
        className={`w-[20px] h-[5px] mr-[10px]`}
        style={{
          backgroundColor:
            slide === -width * 3 || slide === -5712 ? "#E50000" : "#404040",
        }}
      ></span>
      <button
        onClick={handleSlideLeft}
        className="rounded-[8px] bg-[#1F1F1F] p-[19px] hover:bg-[#404040]"
      >
        <img src={rightArrow} alt="Right Arrow Icon" />
      </button>
    </li>
  );
}
