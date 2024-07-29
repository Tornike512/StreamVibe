import { useGetMovies } from "src/Hooks/useGetMovies";

import rightArrow from "src/assets/right-arrow.png";

export function Slider() {
  const { movies } = useGetMovies();

  return (
    <ul className="grid grid-cols-[20%_20%_20%_20%_20%] gap-x-[30px] w-[93%]">
      {movies.map((movie) => {
        return (
          <li
            key={movie.id}
            className="p-[30px] bg-[#262626] h-[370px] rounded-[12px] cursor-pointer flex flex-col"
          >
            <img
              className="h-[88%] object-cover rounded-[10px]"
              src={movie.image}
              alt="Movies Images"
            />
            <figure className="flex justify-between mt-[5px]">
              <figcaption className="text-[22px] text-[#ffffff]">
                {movie.genre}
              </figcaption>
              <img src={rightArrow} alt="Right Arrow Icon" />
            </figure>
          </li>
        );
      })}
    </ul>
  );
}

export default Slider;
