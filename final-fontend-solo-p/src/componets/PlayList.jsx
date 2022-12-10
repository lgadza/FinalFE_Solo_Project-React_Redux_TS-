import GoodMorning from "./GoodMorning";
import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Alert, Spinner } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { getAlbums } from "../Redux/actions";
import { getSongs } from "../Redux/actions";
import { getArtist } from "../Redux/actions";
import RecommendedAlbums from "./RecommendedAlbums";
import ControlFooter from "./ControlFooter";

const PlayList = () => {
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.albums.search);
  const artist = useSelector((state) => state.artist.search);
  console.log(artist.data[0].artist.name);

  useEffect(() => {
    dispatch(getAlbums());
    dispatch(getArtist());
  }, []);

  return (
    <Container fluid className=" w-100 main-content">
      <div className="row" id="undersearch">
        <h2 className="pl-3 mb-4">Good Morning</h2>

        <Row className="pr-3">
          {albums.data.slice(0, 8).map((album) => (
            <Col key={album.id} md={3} className="mb-4">
              <GoodMorning album={album} />
            </Col>
          ))}
        </Row>
      </div>

      <div className="row pl-3 mt-3" id="mainrow">
        <h3>Recommended Albums</h3>

        <Row className="pr-3">
          {artist.data.slice(0, 6).map((artist) => (
            <Col key={artist.id} md={2} className="mb-4">
              <RecommendedAlbums artist={artist} />
            </Col>
          ))}
        </Row>

        <h3 className="mt-3">Albums to Try</h3>
        <div className="col-12 pl-3 row" id="secondAlbumRow"></div>
      </div>

      <div className="col-10 "></div>
      <ControlFooter />
    </Container>
  );
};
export default PlayList;
