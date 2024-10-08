import { useGetStreams } from "src/Hooks/useGetStreams";

export function StreamSection() {
  const { streams } = useGetStreams();

  return (
    <section className="max-w-[1920px] w-full mb-[150px] px-[40px] lg:mb-[100px]">
      <h2 className="text-[#ffffff] text-[38px] font-bold mb-[14px] lg:flex lg:text-center lg:justify-center md:text-[32px]">
        We Provide you streaming experience across various devices.
      </h2>
      <p className="text-[18px] text-[#999999] mb-[80px] lg:flex lg:text-center lg:justify-center">
        With StreamVibe, you can enjoy your favorite movies and TV shows
        anytime, anywhere. Our platform is designed to be compatible with a wide
        range of devices, ensuring that you never miss a moment of
        entertainment.
      </p>
      <div className="grid grid-cols-[1fr_1fr_1fr] gap-x-[60px] gap-y-[60px] xl:gap-x-[30px] xl:gap-y-[30px] xl:grid-cols-[1fr_1fr] md:grid-cols-[1fr]">
        {streams.map((stream) => {
          return (
            <ul
              key={stream.id}
              className="rounded-[12px] p-[50px] bg-[linear-gradient(to_right_top,#000000,#000000,#000000,#000000,#000000,#110609,#1c0d10,#241115,#3a171d,#501d24,#672428,#7e2b2b)]"
            >
              <li className="flex items-center mb-[30px]">
                <img
                  className="bg-[#1F1F1F] px-[20px] py-[12px] rounded-[12px] mr-[16px]"
                  src={stream.image}
                  alt="Stream Device Image"
                />
                <h3 className="text-[#ffffff] text-[24px] font-bold">
                  {stream.streamTitle}
                </h3>
              </li>
              <p className="text-[18px] text-[#999999]">
                StreamVibe is optimized for both Android and iOS smartphones.
                Download our app from the Google Play Store or the Apple App
                Store
              </p>
            </ul>
          );
        })}
      </div>
    </section>
  );
}

export default StreamSection;
