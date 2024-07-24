import streamVibeLogo from "src/assets/streamvibe-logo.png";
import searchIcon from "src/assets/search-icon.png";
import bellIcon from "src/assets/bell-icon.png";

export function Header() {
  return (
    <header className="flex bg-slate-600">
      <img src={streamVibeLogo} alt="StreamVibe Logo" />
      <nav>
        <a href="#">Home</a>
        <a href="#">Movies & Shows</a>
        <a href="#">Support</a>
        <a href="#">Subscriptions</a>
      </nav>
      <figure>
        <img src={searchIcon} alt="Search Logo" />
        <img src={bellIcon} alt="Bell Logo" />
      </figure>
    </header>
  );
}

export default Header;
