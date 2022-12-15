import { useEffect } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Search from "../../assets/search.svg";
import Avatar from "../Avatar/Avatar";
import decode from "jwt-decode";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../../actions/currentUser";

export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  var User = "1";
  useSelector((state) => state.currentUserReducer);
  JSON.parse(localStorage.getItem("Profile"));

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" }); navigate("/");
    dispatch(setCurrentUser(null));
  };

  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [dispatch]);

  return (
    <nav className="main-nav">
      <div className="navbar">
        <Link to="/" className="nav-item nav-logo">
          <img src={Logo} alt="" width={200} />
        </Link>
        <Link to="/" className="nav-item nav-btn">
          Home
        </Link>
        <Link to="/" className="nav-item nav-btn">
          Products
        </Link>
        <Link to="/" className="nav-item nav-btn">
          For Teams
        </Link>
        <form>
          <input type="text" placeholder="Search" />
          <img src={Search} alt="search" width={18} className="Search-icon" />
        </form>
        {User === null ? (
          <Link to="/Auth" className="nav-item nav-link">
            Log in
          </Link>
        ) : (
          <>
            <Avatar
              backgroundColor="#009dff"
              px=".75rem"
              py=".5rem"
              borderRadius="50%"
              color="white"
              cursor="pointer"
            >
              <Link to="/User" style={{ textDecoration: "none" }}>
                M
              </Link>
            </Avatar>

            <button className="nav-item nav-link" onClick={handleLogout}>
              Log out
            </button>
          </>
        )}
      </div>
    </nav>
  );
};
