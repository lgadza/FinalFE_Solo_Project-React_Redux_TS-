import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Search } from "react-bootstrap-icons";
import { getSongs } from "../Redux/actions";
import { Container } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const TopBar = () => {
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setQuery(e.target.value);
    dispatch(getSongs(query));
  };
  return (
    <Container fluid className=" mt-3  justify-content-between top-content-bar">
      <div className="nav-controls d-flex justify-content-between align-items-center">
        <div className="nav-circle mr-3 d-flex justify-content-center align-items-center">
          <i className="fa-solid fa-chevron-left"></i>
        </div>
        <div className="nav-circle-inactive d-flex justify-content-center align-items-center">
          <i className="fa-solid fa-chevron-right"></i>
        </div>
        <i className="bi bi-search lupa"> </i>{" "}
        <Link to="/search">
          <input
            type="text"
            id="searchbar"
            onChange={handleChange}
            placeholder="What do you want to Listen"
          ></input>
        </Link>
      </div>
      <div className="user-menu d-flex align-items-center">
        <img className="user-image" src="img/profile-image.jpg" />
        <span id="username"></span>
        <i className="fa-solid fa-caret-down"></i>
      </div>
    </Container>
  );
};
export default TopBar;
