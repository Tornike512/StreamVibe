import homeHeaderMainImage from "src/assets/home-header-main-image.png";
import startWatching from "src/assets/start-watching-icon.svg";

export function HomeHeader() {
  return (
    <section>
      <img src={homeHeaderMainImage} alt="Header Movies Images" />
      <div>
        <h1>The Best Streaming Experience</h1>
        <p>
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere. With StreamVibe, you
          can enjoy a wide variety of content, including the latest
          blockbusters, classic movies, popular TV shows, and more. You can also
          create your own watchlists, so you can easily find the content you
          want to watch.
        </p>
        <button>
          <img src={startWatching} alt="Start Watching Button icon" />
          Start Watching Now
        </button>
      </div>
    </section>
  );
}

export default HomeHeader;
