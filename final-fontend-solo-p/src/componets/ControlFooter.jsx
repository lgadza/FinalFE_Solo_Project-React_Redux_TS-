import * as Icon from "react-bootstrap-icons";

const ControlFooter = () => {
  return (
    <>
      <div class="row vh-25 footer justify-content-center align-items-center d-none">
        <div class="col-4 footer-left d-flex align-items-center">
          <img class="album-cover-footer" src="img/album-cover.jpg" />
          <div class="album-info d-flex flex-column ml-2">
            <span class="footer-song">
              Another one bites the Dust - Remastered 2011
            </span>
            <span class="footer-artist">Queen</span>
          </div>
          <div class="album-info-icons ml-4">
            <i class="fa-regular fa-heart mr-2"></i>
            <i class="fa-solid fa-maximize ml-2"></i>
          </div>
        </div>
        <div class="col-5 footer-middle d-flex flex-column align-items-center">
          <div class="player-controls d-flex justify-content-between align-items-center">
            <i class="fa-solid fa-shuffle"></i>
            <i class="fa-solid fa-backward-step"></i>
            <div class="play-pause paused" onclick="playerControls()">
              <div class="circle d-flex justify-content-center align-items-center">
                <i class="fa-solid fa-play d-none play-footer"></i>
                <i class="fa-solid fa-pause pause-footer"></i>
              </div>
            </div>
            <i class="fa-solid fa-forward-step"></i>
            <i class="fa-solid fa-repeat"></i>
          </div>
          <div class="song-duration d-flex align-items-center mt-2">
            <span>0:12</span>
            <div class="playtime mx-2"></div>
            <span>3:34</span>
          </div>
        </div>
        <div class="col-3 footer-right d-flex justify-content-end align-items-center">
          <div class="footer-right-icons">
            <i class="fa-solid fa-bars"></i>
            <i class="fa-brands fa-chromecast"></i>
            <i class="fa-solid fa-volume-high"></i>
          </div>
          <div class="volume-bar"></div>
        </div>
      </div>
      {/* <audio src="" id="audio"></audio> */}
    </>
  );
};
export default ControlFooter;
