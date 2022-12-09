const TopBar = () => {
  return (
    <div class="row m-3 justify-content-between top-content-bar">
      <div class="nav-controls d-flex justify-content-between align-items-center">
        <div class="nav-circle mr-3 d-flex justify-content-center align-items-center">
          <i class="fa-solid fa-chevron-left"></i>
        </div>
        <div class="nav-circle-inactive d-flex justify-content-center align-items-center">
          <i class="fa-solid fa-chevron-right"></i>
        </div>
        <i class="bi bi-search lupa"> </i>{" "}
        <a href="search.html">
          {" "}
          <input
            type="text"
            id="searchbar"
            placeholder="What do you want to Listen"
          ></input>
        </a>
      </div>
      <div class="user-menu d-flex align-items-center">
        <img class="user-image" src="img/profile-image.jpg" />
        <span id="username"></span>
        <i class="fa-solid fa-caret-down"></i>
      </div>
    </div>
  );
};
export default TopBar;
