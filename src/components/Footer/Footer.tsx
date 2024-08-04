import facebookLogo from "src/assets/facebook-logo.png";
import linkedinLogo from "src/assets/linkedin-logo.png";
import twitterLogo from "src/assets/twitter-logo.png";

export function Footer() {
  return (
    <>
      <footer className="flex justify-center bg-[#0F0F0F]">
        <div className="max-w-[1920px] px-[162px] py-[100px] w-full flex justify-between items-start">
          <ul>
            <h4 className="text-[#ffffff] text-[20px] font-bold mb-[24px]">
              Home
            </h4>
            <li className="text-[18px] text-[#999999] cursor-pointer hover:underline mb-[14px]">
              Categories
            </li>
            <li className="text-[18px] text-[#999999] cursor-pointer hover:underline mb-[14px]">
              Devices
            </li>
            <li className="text-[18px] text-[#999999] cursor-pointer hover:underline mb-[14px]">
              Pricing
            </li>
            <li className="text-[18px] text-[#999999] cursor-pointer hover:underline">
              FAQ
            </li>
          </ul>
          <ul>
            <h4 className="text-[#ffffff] text-[20px] font-bold mb-[24px]">
              Movies
            </h4>
            <li className="text-[18px] text-[#999999] cursor-pointer hover:underline mb-[14px]">
              Gernes
            </li>
            <li className="text-[18px] text-[#999999] cursor-pointer hover:underline mb-[14px]">
              Trending
            </li>
            <li className="text-[18px] text-[#999999] cursor-pointer hover:underline mb-[14px]">
              New Release
            </li>
            <li className="text-[18px] text-[#999999] cursor-pointer hover:underline">
              Popular
            </li>
          </ul>
          <ul>
            <h4 className="text-[#ffffff] text-[20px] font-bold mb-[24px]">
              Shows
            </h4>
            <li className="text-[18px] text-[#999999] cursor-pointer hover:underline mb-[14px]">
              Gernes
            </li>
            <li className="text-[18px] text-[#999999] cursor-pointer hover:underline mb-[14px]">
              Trending
            </li>
            <li className="text-[18px] text-[#999999] cursor-pointer hover:underline mb-[14px]">
              New Release
            </li>
            <li className="text-[18px] text-[#999999] cursor-pointer hover:underline mb-[14px]">
              Popular
            </li>
          </ul>
          <ul>
            <h4 className="text-[#ffffff] text-[20px] font-bold mb-[24px]">
              Support
            </h4>
            <li className="text-[18px] text-[#999999] cursor-pointer hover:underline mb-[14px]">
              Contact Us
            </li>
          </ul>
          <ul>
            <h4 className="text-[#ffffff] text-[20px] font-bold mb-[24px]">
              Subscription
            </h4>
            <li className="text-[18px] text-[#999999] cursor-pointer hover:underline mb-[14px]">
              Plans
            </li>
            <li className="text-[18px] text-[#999999] cursor-pointer hover:underline mb-[14px]">
              Features
            </li>
            <li className="text-[18px] text-[#999999] cursor-pointer hover:underline mb-[14px]">
              Pricing
            </li>
            <li className="text-[18px] text-[#999999] cursor-pointer hover:underline mb-[14px]">
              FAQ
            </li>
          </ul>
          <figure>
            <figcaption className="text-[#ffffff] text-[20px] font-bold mb-[24px]">
              Connect With Us
            </figcaption>
            <div className="flex">
              <img
                className="rounded-[8px] bg-[#1F1F1F] p-[15px] cursor-pointer mr-[10px] hover:bg-[#404040]"
                src={facebookLogo}
                alt="Facebook Logo"
              />
              <img
                className="rounded-[8px] bg-[#1F1F1F] p-[15px] cursor-pointer mr-[10px] hover:bg-[#404040]"
                src={twitterLogo}
                alt="Twitter Logo"
              />
              <img
                className="rounded-[8px] bg-[#1F1F1F] p-[15px] cursor-pointer hover:bg-[#404040]"
                src={linkedinLogo}
                alt="LinkedIn Logo"
              />
            </div>
          </figure>
        </div>
      </footer>
      <div className="bg-[#0F0F0F] flex items-center justify-center text-[18px] text-[#999999]">
        <div className="max-w-[1920px] w-full flex justify-between px-[162px] py-[20px] border-t-[#999999] border-t">
          <p>@Built By Tornike Tsagareishvili</p>
          <div className="flex">
            <p className="border-r-[#999999] border-r border-solid px-[10px] cursor-pointer hover:underline">
              Terms of Use
            </p>
            <p className="border-r-[#999999] border-r border-solid px-[10px] cursor-pointer hover:underline">
              Privacy Policy
            </p>
            <p className="px-[10px] cursor-pointer hover:underline">
              Cookie Policy
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
