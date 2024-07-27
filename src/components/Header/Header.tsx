import streamVibeLogo from "src/assets/streamvibe-logo.png";
import searchIcon from "src/assets/search-icon.png";
import bellIcon from "src/assets/bell-icon.png";

export function Header() {
  return (
    <header className="h-[120px] flex justify-center">
      <div className="max-w-[1920px] px-[162px] w-full flex justify-between items-center">
        <img
          className="cursor-pointer"
          src={streamVibeLogo}
          alt="StreamVibe Logo"
        />
        <nav className="bg-[#000000] py-[20px] px-[10px] rounded-[10px]">
          <a
            className="text-[#BFBFBF] text-[18px] px-[14px] py-[14px] mr-[5px] hover:bg-[#262626] hover:rounded-[10px] hover:text-[#ffffff]"
            href="#"
          >
            Home
          </a>
          <a
            className="text-[#BFBFBF] text-[18px] px-[14px] py-[14px] mr-[5px] hover:bg-[#262626] hover:rounded-[10px] hover:text-[#ffffff]"
            href="#"
          >
            Movies & Shows
          </a>
          <a
            className="text-[#BFBFBF] text-[18px] px-[14px] py-[14px] mr-[5px] hover:bg-[#262626] hover:rounded-[10px] hover:text-[#ffffff]"
            href="#"
          >
            Support
          </a>
          <a
            className="text-[#BFBFBF] text-[18px] px-[14px] py-[14px] hover:bg-[#262626] hover:rounded-[10px] hover:text-[#ffffff]"
            href="#"
          >
            Subscriptions
          </a>
        </nav>
        <figure className="flex">
          <img
            className="mr-[30px] cursor-pointer"
            src={searchIcon}
            alt="Search Logo"
          />
          <img className="cursor-pointer" src={bellIcon} alt="Bell Logo" />
        </figure>
      </div>
    </header>
  );
}

export default Header;
