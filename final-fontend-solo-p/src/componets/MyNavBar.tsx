import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "..//styling/style.css";
import "..//styling/index.css";
import "..//styling/reset.css";
import "..//styling/search.css";

// import Card from "react-bootstrap/Card";
// import { useEffect, useState } from "react";
// import { format } from "date-fns";

// import { useNavigate, useParams } from "react-router-dom";

const MyNavBar = () => {
  return (
    // <Navbar bg="dark" variant="dark" className="MyNav">
    //   <Container fluid>
    //     <Link to="/">
    //       <Navbar.Brand href="#home">Space Louis</Navbar.Brand>
    //     </Link>
    //     <Nav className="me-auto mr-5 pr-5">
    //       <Link to="/">Home</Link>
    //       <Link className="mx-4" to="/features">
    //         Features
    //       </Link>
    //       <Link to="/price">Pricing</Link>
    //     </Nav>
    //   </Container>
    // </Navbar>
    <div className=" sidebar pl-3">
      <a href="index.html">
        <img className="logo mt-2" src="img/logo.png" />
      </a>

      <div className="links-container d-flex flex-column mt-3 ml-0">
        <div className="link d-flex p-2 pl-0 mt-1">
          <i className="fa-solid fa-house mt-1"></i>
          <a href="#" className="ml-4">
            Home
          </a>
        </div>
        <div className="link d-flex p-2 mt-1">
          <i className="fa-solid fa-magnifying-glass mt-1"></i>
          <a href="search.html" className="ml-4">
            Search
          </a>
        </div>
        <div className="link d-flex p-2 mt-1">
          <i className="fa-solid fa-book mt-1"></i>
          <a href="#" className="ml-4">
            Your Library
          </a>
        </div>
      </div>
      <div className="box-links d-flex flex-column mt-4">
        <div className="box-link d-flex p-2">
          <div className="playlist-box d-flex justify-content-center align-items-center">
            <i className="fa-solid fa-plus"></i>
          </div>
          <a href="#" className="ml-3">
            Create Playlist
          </a>
        </div>
        <div className="box-link d-flex p-2">
          <div className="liked-box d-flex justify-content-center align-items-center">
            <i className="fa-solid fa-heart"></i>
          </div>
          <a href="#" className="ml-3">
            Liked Songs
          </a>
        </div>
      </div>
      <div className="playlists mt-2 pt-1 overflow-auto"></div>
      <div className="install mt-3 d-flex">
        <div className="circle d-flex justify-content-center align-items-center mt-1 mr-2">
          <i className="fa-solid fa-arrow-down"></i>
        </div>
        <a href="#">Install App</a>
      </div>
    </div>
  );
};
export default MyNavBar;
