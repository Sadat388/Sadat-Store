export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="./logo.png" alt="" />
      </div>
      <div className="items">
        <a href="#phone">Phone</a>

        <a href="#tablet">Tablet</a>

        <a href="#earbud">Earbud</a>

        <a href="#laptop">Laptop</a>

        <a href="#monitor">Monitor</a>

        <a href="#keyboard">Keyboard</a>
      </div>
      <input type="text" className="search" placeholder="search your product" />
    </nav>
  );
}
