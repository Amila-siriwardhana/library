import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Edit, Trash2 } from "react-feather";

const BookList: React.FC = () => {
  return (
    <Container className="p-0">
      <Row className="m-0 p-0">
        <Col xs={9} className="m-0  p-0">
          <div className="authorMainList px-0 mx-0">
            <h5 className="authorList">Book</h5>
          </div>
        </Col>
        <Col xs={3} className="icons d-flex justify-content-end">
          <Edit className="icons text-warning mx-2" size={20} />
          <Trash2 className="icons text-danger mx-2" size={20} />
        </Col>
      </Row>
    </Container>
  );
};

export default BookList;
