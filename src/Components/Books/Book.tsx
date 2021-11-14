import React from "react";
import { Col, Row } from "react-bootstrap";
import { Edit, Trash2 } from "react-feather";

const Book: React.FC = () => {
  return (
    <Row className="authors m-0 p-0">
      <Col xs={10} className="mx-0 my-2  px-0">
        <div className=" px-0 mx-0">
          <h5 className=" m-0 p-0">1.Book 1 Title</h5>
        </div>
      </Col>
      <Col xs={2} className="icons px-0 m-0 my-2 d-flex justify-content-end">
        <Edit className="icons text-warning mx-2" size={20} />
        <Trash2 className="icons text-danger mx-2" size={20} />
      </Col>
    </Row>
  );
};

export default Book;
