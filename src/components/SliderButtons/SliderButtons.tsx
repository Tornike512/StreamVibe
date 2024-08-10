import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "src/Redux/store";
import { useWindowSize } from "@uidotdev/usehooks";
import { slideLeft, slideRight } from "src/Features/SwitchSlider";
import { handleSliderPage } from "src/utils/handleSliderPage";

import leftArrow from "src/assets/left-arrow.png";
import rightArrow from "src/assets/right-arrow.png";

export function SliderButtons() {
  const { width } = useWindowSize();

  const handleSlideLeft = () => {
    dispatch(slideLeft({ width }));
  };

  const handleSlideRight = () => {
    dispatch(slideRight({ width }));
  };
  const dispatch: AppDispatch = useDispatch();
  const slide = useSelector((state: RootState) => state.slide.slide);
  console.log(width, "width");

  console.log(handleSliderPage(slide));

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
          backgroundColor:
            slide === 0 || slide === -27 ? handleSliderPage(slide) : "#404040",
        }}
      ></span>
      <span
        className={`w-[20px] h-[5px]`}
        style={{
          backgroundColor:
            slide === -1904 || slide === -1549
              ? handleSliderPage(slide)
              : "#404040",
        }}
      ></span>
      <span
        className={`w-[20px] h-[5px]`}
        style={{
          backgroundColor:
            slide === -3808 || slide === -3071
              ? handleSliderPage(slide)
              : "#404040",
        }}
      ></span>
      <span
        className={`w-[20px] h-[5px] mr-[10px]`}
        style={{
          backgroundColor:
            slide === -5712 || slide === -4566
              ? handleSliderPage(slide)
              : "#404040",
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
