import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">
        <img
  src="/images/coalmarket-logo.png"
  alt="CoalMarket Iran"
/>

        <div className="logo-text">

  <h2>CoalMarket Iran</h2>

  <span>
    Premium Coal Supplier & Exporter
  </span>

</div>
      </div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            خانه
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            درباره ما
          </NavLink>
        </li>

        <li>
          <NavLink to="/products" onClick={() => setMenuOpen(false)}>
            محصولات
          </NavLink>
        </li>

        <li>
          <NavLink to="/analysis" onClick={() => setMenuOpen(false)}>
            آنالیز
          </NavLink>
        </li>

        <li>
          <NavLink to="/export" onClick={() => setMenuOpen(false)}>
            صادرات
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
          <li>
  <NavLink
    to="/encyclopedia"
    onClick={() => setMenuOpen(false)}
  >
    دانشنامه
  </NavLink>
</li>
            تماس با ما
          </NavLink>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;