import { useState, useContext } from "react";
import { IMAGE_CDN_URL } from "../config";
import { Link } from "react-router-dom";
import useOffline from "../utils/useOffline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const loggedInUser = () => {
  return true;
};

const Title = () => {
  return (
    <a href="/">
      <div className="logo">
        <img src={IMAGE_CDN_URL} alt="" />
      </div>
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);
  const isOffline = useOffline();
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="header" style={{ backgroundColor: "pink" }}>
      <Title />
      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>{" "}
        </li>
        <li>
          <Link to="/instamart">Instamart</Link>
        </li>
        <li>
          <Link to="/cart">Cart- {cartItems.length} items</Link>
        </li>
      </ul>
      {user.name}
      <div>
        {isOffline ? (
          <div
            style={{
              backgroundColor: "red",
            }}
          >
            Offline
          </div>
        ) : (
          <div
            style={{
              backgroundColor: "green",
            }}
          >
            Online
          </div>
        )}
        {isLoggedIn ? (
          <button onClick={() => setLoggedIn(false)}>Log Out</button>
        ) : (
          <button onClick={() => setLoggedIn(true)}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Header;
