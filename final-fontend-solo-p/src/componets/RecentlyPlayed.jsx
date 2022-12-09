import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Alert, Spinner } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { getAlbums } from "../Redux/actions";
// import { mainSearch } from "../redux/actions";

const GoodMorning = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  return (
    <Container>
      <Row></Row>
    </Container>
  );
};
export default GoodMorning;
