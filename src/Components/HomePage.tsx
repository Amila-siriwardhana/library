import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import BookUi from "./Books/BookUi";
import AuthorUi from "./Author/AuthorUi";
import Welcome from "./Welcome";

const HomePage: React.FC = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Welcome />
      </Row>
      <Row>
        <Col>
          <BookUi />
        </Col>
        <Col>
          <AuthorUi />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
