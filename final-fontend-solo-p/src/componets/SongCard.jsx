import { Card, Container } from "react-bootstrap";

const SongCard = ({ artist }) => {
  return (
    <Card>
      <div className="search-songs ">
        <Card.Img
          variant="top"
          src={artist.album.cover_medium}
          style={{ width: "3rem", height: "3rem" }}
        />
        <Card.Body>
          <h5>{artist.title}</h5>
          <Card.Text>{artist.artist.name}</Card.Text>
        </Card.Body>
      </div>
    </Card>
  );
};
export default SongCard;
