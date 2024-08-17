import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "src/Redux/store";
import { useWindowSize } from "@uidotdev/usehooks";
import { slideLeft, slideRight } from "src/Features/SwitchSlider";

import leftArrow from "src/assets/left-arrow.png";
import rightArrow from "src/assets/right-arrow.png";

export function SliderButtons() {
  const { width } = useWindowSize();

  const dispatch: AppDispatch = useDispatch();

  const handleSlideLeft = () => {
    if (width) {
      dispatch(slideLeft({ width: width as number }));
    }
  };

  const handleSlideRight = () => {
    if (width) {
      dispatch(slideRight({ width: width as number }));
    }
  };

  const slide = useSelector((state: RootState) => state.slide.slide);

  return (
    <li className="w-[300px] h-[100px] bg-[#0F0F0F] rounded-[12px] flex justify-between items-center p-[16px] lg:hidden">
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
            slide === -(width as number) || slide === -1904
              ? "#E50000"
              : "#404040",
        }}
      ></span>
      <span
        className={`w-[20px] h-[5px]`}
        style={{
          backgroundColor:
            slide === -(width as number) * 2 || slide === -3808
              ? "#E50000"
              : "#404040",
        }}
      ></span>
      <span
        className={`w-[20px] h-[5px] mr-[10px]`}
        style={{
          backgroundColor:
            slide === -(width as number) * 3 || slide === -5712
              ? "#E50000"
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
