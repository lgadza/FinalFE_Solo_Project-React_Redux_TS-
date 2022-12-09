import Card from "react-bootstrap/Card";

const RecommendedAlbums = ({ artist }) => {
  return (
    <div className="cardbground ">
      <Card className="p-2">
        <Card.Img variant="top" src={artist.artist.picture_medium} />
        <Card.Body>
          <Card.Title>{artist.artist.name}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};
export default RecommendedAlbums;
