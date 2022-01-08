import React from "react";
import WelcomeLibrary from "../assets/images/welcome.webp";
import { Row, Col } from "react-bootstrap";

const Welcome: React.FC = () => {
  return (
    <React.Fragment>
      <Col className="welcomeTop p-0 m-0">
        <Row className="m-0 p-0">
          <h1 className="welcometopic text-center mt-2 mb-3 ">My Library</h1>
        </Row>
        <Row className="mx-0 pl-0 pr-0">
          <img
            src={WelcomeLibrary}
            className="welcome px-0"
            alt={"Library"}
          ></img>
        </Row>
        <Row className="text-end me-5 pe-4 ">
          <p className="photoCredit">
            Photo By
            <a
              href="https://unsplash.com/@annahunko?utm_source=unsplash&utm_medium=referral&utm_
                    content=creditCopyText"
              rel="noreferrer"
              target="_blank"
            >
              {" "}Anna Hunko{" "}
            </a>
            on{" "}
            <a
              href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_
                    content=creditCopyText"
              rel="noreferrer"
              target="_blank"
            >
              Unsplash{" "}
            </a>
          </p>
        </Row>
      </Col>
    </React.Fragment>
  );
};
export default Welcome;
