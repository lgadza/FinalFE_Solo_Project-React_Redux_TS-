import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import MyNavBar from "./componets/MyNavBar";
import Footer from "./componets/Footer";
import KitchenSinkExample from "./componets/StickCard";
import GoodMorning from "./componets/PlayList";
import TopBar from "./componets/TopBar";

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
            <GoodMorning />
          </Col>
        </Row>
      </Container>
      <Container className="MyContainer">
        <Row>
          <Col></Col>
        </Row>
      </Container>
      <Container fluid className="px-0">
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;
