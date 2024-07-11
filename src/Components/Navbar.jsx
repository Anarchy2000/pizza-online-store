import "./navbar.css";
import { Link } from "react-router-dom";
import Logo from "../Assets/pizza-slice-detailed-icon-by-Vexels.svg";

function Navbar({ user, onLogout }) {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="pizza.svg" />
        </Link>
      </div>
      <div className="links">
        <nav>
          <ul>
            <li>
              <Link to="/menu">Order Online</Link>
            </li>
            <li>
              <Link to="/cart">Check Out</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* if statement to display a welcome message to the user and hides the buttons once they login */}
      <div className="cart">
        {user ? (
          <>
            <span>Welcome {user.username}</span>
            <button onClick={onLogout}>Logout</button>
          </>
        ) : (
          <>
            <button>
              <Link to="/login">Login</Link>
            </button>
            <button>
              <Link to="/register">Register</Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
