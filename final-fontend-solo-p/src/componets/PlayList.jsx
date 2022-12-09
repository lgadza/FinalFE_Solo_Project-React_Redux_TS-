import GoodMorning from "./GoodMorning";
import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Alert, Spinner } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { getAlbums } from "../Redux/actions";

const PlayList = () => {
  return (
    <Col className=" w-100 main-content">
      <div className="row" id="undersearch">
        <h2 className="pl-3 mb-4">Good Morning</h2>
        <div className="col-12 pl-3 row" id="topsidecards">
          <GoodMorning />
        </div>
      </div>

      <div className="row pl-3 mt-3" id="mainrow">
        <h3>Recently Played</h3>
        <div className="col-12 pl-3 row" id="firstAlbumRow"></div>

        <h3 className="mt-3">Albums to Try</h3>
        <div className="col-12 pl-3 row" id="secondAlbumRow"></div>
      </div>

      <div className="col-10 main-content"></div>
    </Col>
  );
};
export default PlayList;
