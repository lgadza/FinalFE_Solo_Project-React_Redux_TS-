import { Container, Row, Col, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import SongCard from "../SongCard";

const SearchResults = () => {
  const searchResults = useSelector((state) => state.songs.search);
  console.log(searchResults.data[0]);
  return (
    <Container className=" w-100 main-content mt-5">
      <h4 className="mt-2">Top Results</h4>
      <Row>
        <Col md={5} className="d-flex jusfify-content-center pl-5 ">
          <Card style={{ width: "20rem" }} className="artist-card pl-3 pt-2">
            <Card.Img
              variant="top"
              src={searchResults.data[0].artist.picture_medium}
              className="artist-pic"
            />
            <Card.Body>
              <Card.Title>{searchResults.data[0].artist.name}</Card.Title>
              <Card.Text>
                <span className="type">
                  {searchResults.data[0].artist.type}
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <h4 className="ml-5">Songs</h4>
          <ul>
            {searchResults.data.slice(0, 5).map((artist) => (
              <li>
                <SongCard artist={artist} />
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};
export default SearchResults;
