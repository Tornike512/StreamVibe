import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "src/Redux/store";
import { useWindowSize } from "@uidotdev/usehooks";
import { slideLeft, slideRight } from "src/Features/SwitchSlider";

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

  const handleSliderPage = (index: number) => {
    if (
      index === 0 ||
      index === -1904 ||
      index === -3808 ||
      index === -5712 ||
      index === -1485 ||
      index === -2970 ||
      index === -4455
    ) {
      return "#E50000";
    } else {
      return "#404040";
    }
  };

  return (
    <li className="w-[300px] bg-[#0F0F0F] rounded-[12px] flex justify-between items-center p-[16px]">
      <button
        onClick={handleSlideRight}
        className="rounded-[8px] bg-[#1F1F1F] p-[19px] hover:bg-[#404040]"
      >
        <img src={leftArrow} alt="Left Arrow Icon" />
      </button>
      <span
        className={`w-[20px] h-[5px] ml-[10px]`}
        style={{
          backgroundColor: slide === 0 ? handleSliderPage(slide) : "#404040",
        }}
      ></span>
      <span
        className={`w-[20px] h-[5px]`}
        style={{
          backgroundColor:
            slide === -1904 || slide === -1485
              ? handleSliderPage(slide)
              : "#404040",
        }}
      ></span>
      <span
        className={`w-[20px] h-[5px]`}
        style={{
          backgroundColor:
            slide === -3808 || slide === -2970
              ? handleSliderPage(slide)
              : "#404040",
        }}
      ></span>
      <span
        className={`w-[20px] h-[5px] mr-[10px]`}
        style={{
          backgroundColor:
            slide === -5712 || slide === -4455
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
