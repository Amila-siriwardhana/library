import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Edit, Trash2 } from "react-feather";

const AuthorList: React.FC = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col xs={10} className="mx-0  px-0">
          <div className="authorMainList px-0 mx-0">
            <h5 className="authorList">Author</h5>
            <h5 className="authorList">Author</h5>
            <h5 className="authorList">Author</h5>
            <h5 className="authorList">Author</h5>
          </div>
        </Col>
        <Col xs={2} className="icons">
          <Edit className="icons text-warning mx-2" size={20} />
          <Trash2 className="icons text-danger mx-2" size={20} />
        </Col>
      </Row>
    </Container>
  );
};

export default AuthorList;
