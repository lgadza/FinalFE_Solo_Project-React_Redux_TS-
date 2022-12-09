import Card from "react-bootstrap/Card";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const GoodMorning = ({ album }) => {
  const [selected, setSelected] = useState(false);
  const [albumId, setAlbumId] = useState("");

  const handleClick = () => {
    setSelected(true);
    setAlbumId(album);
    console.log(album.album.id);
  };
  return (
    <Link to={`/album/${album.album.id}`}>
      <Card
        onClick={handleClick}
        style={{ border: selected ? "3px solid red" : "none" }}
      >
        <div className="sidecards mt-2 Image-movie ">
          <Card.Img
            className="col-4"
            variant="top"
            src={album.album.cover_medium}
          />
          <Card.Body className="col-8 sidetext">
            <Card.Title>{album.album.title}</Card.Title>
          </Card.Body>
        </div>
      </Card>
      <div className="Image-movie-darken"></div>
    </Link>
  );
};
export default GoodMorning;
