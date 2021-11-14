import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Welcome from "./Welcome";
import AuthorUi from "./Author/AuthorUi";
import BookUi from "./Books/BookUi";

const HomePage: React.FC = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Welcome />
      </Row>
      <Row>
        <Col className="mx-5">
          <BookUi />
        </Col>
        <Col className="mx-5">
          <AuthorUi />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
