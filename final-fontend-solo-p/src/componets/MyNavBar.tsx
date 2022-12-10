import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "..//styling/style.css";
import "..//styling/index.css";
import "..//styling/reset.css";
import "..//styling/search.css";

const MyNavBar = () => {
  return (
    <div className=" sidebar pl-3">
      <Link to="/">
        <img className="logo mt-2" src="img/logo.png" />
      </Link>

      <div className="links-container d-flex flex-column mt-3 ml-0">
        <div className="link d-flex p-2 pl-0 mt-1">
          <i className="bi bi-house"></i>
          <Link to="/" className="ml-4">
            Home
          </Link>
        </div>
        <div className="link d-flex p-2 mt-1">
          <i className="bi bi-search"></i>
          <Link to="/search" className="ml-4">
            Search
          </Link>
        </div>
        <div className="link d-flex p-2 mt-1">
          <i className="bi bi-collection"></i>
          <Link to="#" className="ml-4">
            Your Library
          </Link>
        </div>
      </div>
      <div className="box-links d-flex flex-column mt-4">
        <div className="box-link d-flex p-2">
          <div className="playlist-box d-flex justify-content-center align-items-center">
            <i className="bi bi-plus"></i>
          </div>
          <Link to="#" className="ml-3">
            Create Playlist
          </Link>
        </div>
        <div className="box-link d-flex p-2">
          <div className="liked-box d-flex justify-content-center align-items-center">
            <i className="bi bi-heart-fill"></i>
          </div>
          <Link to="#" className="ml-3">
            Liked Songs
          </Link>
        </div>
      </div>
      <div className="playlists mt-2 pt-1 overflow-auto"></div>
      <div className="install mt-3 d-flex">
        <div className="circle d-flex justify-content-center align-items-center mt-1 mr-2">
          <i className="bi bi-arrow-down"></i>
        </div>
        <Link to="#">Install App</Link>
      </div>
    </div>
  );
};
export default MyNavBar;
