import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import MyNavBar from "./componets/MyNavBar";
import BgColorExample from "./componets/Test";
import Footer from "./componets/Footer";
import KitchenSinkExample from "./componets/StickCard";

function App() {
  return (
    <BrowserRouter>
      <Container fluid className="px-0">
        <MyNavBar />
      </Container>
      <Container className="MyContainer">
        <Row>
          <Col md={9}>
            <BgColorExample />
          </Col>
          <Col md={3}>
            <KitchenSinkExample />
          </Col>
        </Row>
      </Container>
      <Container fluid className="px-0">
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;
