import "./index.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <a href="#">
          Evandri <span>Ridho</span>
        </a>
      </div>
      <ul className="nav-list">
        <li className="nav-items">
          <a href="#">Home</a>
        </li>
        <li className="nav-items">
          <a href="#">About</a>
        </li>
        <li className="nav-items">
          <a href="#">Service</a>
        </li>
        <li className="nav-items">
          <a href="#">contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
