import homeHeaderMainImage from "src/assets/home-header-main-image.png";
import startWatching from "src/assets/start-watching-icon.svg";

export function HomeHeader() {
  return (
    <section className="flex justify-center items-center flex-col max-w-[1920px] mb-[200px]">
      <img src={homeHeaderMainImage} alt="Header Movies Images" />
      <div className="flex flex-col items-center w-[60%]">
        <h1 className="text-[#ffffff] text-[58px] font-bold mb-[14px]">
          The Best Streaming Experience
        </h1>
        <p className="text-[#999999] text-[18px] mb-[50px] text-center">
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere. With StreamVibe, you
          can enjoy a wide variety of content, including the latest
          blockbusters, classic movies, popular TV shows, and more. You can also
          create your own watchlists, so you can easily find the content you
          want to watch.
        </p>
        <button className="bg-[#E50000] flex text-[#ffffff] text-[18px] p-[15px] rounded-[8px] hover:bg-[#FF3333]">
          <img src={startWatching} alt="Start Watching Button icon" />
          Start Watching Now
        </button>
      </div>
    </section>
  );
}

export default HomeHeader;
