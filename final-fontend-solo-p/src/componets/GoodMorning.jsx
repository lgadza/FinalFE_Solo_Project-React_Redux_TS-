// import { useState, useEffect } from "react";
// import { Container, Row, Col, Form, Alert, Spinner } from "react-bootstrap";
// // import Job from "./Job";
// import { useSelector, useDispatch } from "react-redux";
// import { getAlbums } from "../Redux/actions";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const GoodMorning = () => {
  //   const [query, setQuery] = useState("");
  //   const dispatch = useDispatch();

  return (
    <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};
export default GoodMorning;
