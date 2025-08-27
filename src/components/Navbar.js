import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="./logo.png" alt="logo" />
        </Link>
      </div>

      <div className="items">
        <Link to="/">Homepage</Link>
        <Link to="/phone">Phone</Link>
        <Link to="/tablet">Tablet</Link>
        <Link to="/earbud">Earbud</Link>
        <Link to="/laptop">Laptop</Link>
        <Link to="/monitor">Monitor</Link>
        <Link to="/keyboard">Keyboard</Link>
      </div>

      <input type="text" className="search" placeholder="search your product" />
    </nav>
  );
}
