import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import MyNavBar from "./componets/MyNavBar";
import GoodMorning from "./componets/PlayList";
import TopBar from "./componets/TopBar";
import * as Icon from "react-bootstrap-icons";
import Album from "./componets/album/Album";
import Home from "./componets/album/Home";

function App() {
  return (
    <BrowserRouter>
      <Container fluid className="px-0">
        <Row>
          <Col md={2} className="pr-0">
            <MyNavBar />
          </Col>
          <Col md={10} className="pl-0">
            <TopBar />

            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<Album />} path="/album/:albumId" />
            </Routes>
          </Col>
        </Row>
      </Container>
      <Container className="MyContainer">
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
