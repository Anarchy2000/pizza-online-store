import "./navbar.css";
import { Link } from "react-router-dom";
// import Logo from "../Assets/Pizza-logo-design-template-Vector-PNG.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">pee pee doo doo kaa kaa </Link>
      </div>
      <div className="links">
        <nav>
          <ul>
            <li>
              <Link to={"/menu"}>Order Online</Link>
            </li>
            <li>
              <Link to={"/cart"}>Check Out</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="cart">
        <button>Login</button>
        <button>Register</button>
      </div>
    </div>
  );
}

export default Navbar;
