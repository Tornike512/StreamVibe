import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "src/Redux/store";
import { slideLeft, slideRight } from "src/Features/SwitchSlider";
import leftArrow from "src/assets/left-arrow.png";
import rightArrow from "src/assets/right-arrow.png";

export function SliderButtons() {
  const dispatch: AppDispatch = useDispatch();
  const slide = useSelector((state: RootState) => state.slide.slide);

  const handleSlideLeft = () => {
    dispatch(slideLeft());
  };

  const handleSlideRight = () => {
    dispatch(slideRight());
  };

  const handleSliderPage = (index: number) => {
    if (index === 0 || index === -101 || index === -202 || index === -303) {
      return "#E50000";
    }
  };

  return (
    <li className="w-[15%] bg-[#0F0F0F] rounded-[12px] flex justify-between items-center p-[16px]">
      <button
        onClick={handleSlideRight}
        className="rounded-[8px] bg-[#1F1F1F] p-[19px] hover:bg-[#404040]"
      >
        <img src={leftArrow} alt="Left Arrow Icon" />
      </button>
      <span
        className={`w-[20px] h-[5px] bg-[${
          slide === 0 ? handleSliderPage(slide) : "#404040"
        }] ml-[10px]`}
      ></span>
      <span
        className={`w-[20px] h-[5px] bg-[${
          slide === -101 ? handleSliderPage(slide) : "#404040"
        }]`}
      ></span>
      <span
        className={`w-[20px] h-[5px] bg-[${
          slide === -202 ? handleSliderPage(slide) : "#404040"
        }]`}
      ></span>
      <span
        className={`w-[20px] h-[5px] bg-[${
          slide === -303 ? handleSliderPage(slide) : "#404040"
        }] mr-[10px]`}
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
