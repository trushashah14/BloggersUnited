import "./navbar.css";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { useContext } from "react";

export default function Navbar() {
  const { user, dispatch } = useContext(Context);
  const PF = "https://bloggersunited.onrender.com/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="nav">
      <div className="navLeft">
        <i className="navIcon fab fa-facebook-square"></i>
        <i className="navIcon fab fa-instagram-square"></i>
        <i className="navIcon fab fa-pinterest-square"></i>
        <i className="navIcon fab fa-twitter-square"></i>
      </div>
      <div className="navCenter">
        <ul className="navList">
          <li className="navListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="navListItem"> <Link className="link" to="/">
              ABOUT
            </Link></li>
          <li className="navListItem"> <Link className="link" to="/">
              CONTACT
            </Link></li>
          <li className="navListItem">
            <Link className="link" to="/newblog">
              NEW
            </Link>
          </li>
          <li className="navListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="navRight">
        {user ? (
          <Link to="/settings">
            <img className="navImg" src={PF+user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="navList">
            <li className="navListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="navListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="navSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}