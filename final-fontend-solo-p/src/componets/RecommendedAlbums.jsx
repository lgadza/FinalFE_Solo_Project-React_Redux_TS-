import Card from "react-bootstrap/Card";

const RecommendedAlbums = ({ artist }) => {
  return (
    <div className="cardbground ">
      <Card className="p-2">
        <div className="setPlay">
          <i
            className="bi bi-play-circle-fill "
            style={{
              color: "green",
              fontSize: "1.25rem",
            }}
          ></i>
          <Card.Img variant="top" src={artist.artist.picture_medium} />
        </div>
        <Card.Body>
          <Card.Title>{artist.artist.name}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};
export default RecommendedAlbums;
