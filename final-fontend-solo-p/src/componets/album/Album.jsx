import { Container, Row, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAlbum } from "../../Redux/actions";
import { useEffect } from "react";

const Album = () => {
  const params = useParams();
  console.log("PARAMS", params);
  const dispatch = useDispatch();

  console.log("movieId is", params.albumId);
  const album = useSelector((state) => state.currentAlbum.search);
  const search = params.albumId;
  console.log(album);

  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAlbum(search));
  }, []);
  return (
    <Container className="mt-5  w-100 pt-5">
      {album.cover_xl && (
        <>
          <div className="col-2" id="albumLeft">
            <img className="album-cover-album" src={album.cover_xl} />
          </div>
          <div className="col-10 main-content" id="background-container-album">
            <div id="album-info-container">
              <div className="col-12" id="toppart">
                <Row>
                  <Col id="albumRight">
                    <div className="album-text">
                      <p className="album-small-text">ALBUM</p>
                      <h2 className="album-name">{album.title}</h2>
                    </div>
                    <img src={album.artist.picture_small} />
                    <span>{album.artist.name}</span>
                    <span className="pl-1">{album.release_date}</span>
                    <span>{album.nb_tracks}</span>
                  </Col>
                </Row>
              </div>
              <div className="col-12" id="main-container-album">
                <div className="row justify-content-start">
                  <div className="col-1 mt-3 play-button">
                    <i className="bi bi-play-circle-fill" id="play-icon"></i>
                  </div>
                  <div className="col-1 mt-3">
                    <i className="bi bi-heart"></i>
                  </div>
                  <div className="col-1 mt-3">
                    <i className="bi bi-three-dots"></i>
                  </div>
                </div>
                <div className="col-12 p-0">
                  <ul className="list-group songs-list">
                    {album.tracks.data.map((song, i) => (
                      <li className="row align-items-center">
                        <Row className="song pl-5 ">
                          <Col md={1}>{[i + 1]}</Col>
                          <Col md={9} className="artisttitle">
                            <span>{album.tracks.data[i].title}</span>
                            <span className="fw-light">
                              {album.tracks.data[i].artist.name}{" "}
                            </span>
                          </Col>
                        </Row>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Container>
  );
};
export default Album;
