// import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        <img
          src="https://plus.unsplash.com/premium_photo-1664910125402-7972b1e12b79?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWJvdXQlMjBtZXxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
        <p>
          <strong>
            <center>Bloggers United</center>
          </strong></p><p>
          A vibrant community where bloggers come together to connect,
          collaborate, and grow. Whether you're a seasoned blogger or just
          starting out, join us on this journey of sharing ideas, learning from
          each other, and expanding your reach.
        </p>
        <p>
          <strong>
            <center>Our Mission</center>
          </strong>
        </p>
        <p>
          At Bloggers United, our mission is to foster a supportive environment
          where bloggers of all niches and interests can thrive. We believe in
          the power of collaboration and community to inspire creativity,
          enhance skills, and achieve mutual success in the blogosphere.
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
