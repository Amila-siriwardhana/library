import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { XCircle } from "react-feather";
import Select from "react-select";

const BookForm: React.FC = () => {
  return (
    <Row className="book-form m-0 mt-3">
      <Col xs={11} md={8} className="p-0">
        <h5 className=" m-0 p-0 ">
          <span className="authorTopic ">Create Book </span>
          <XCircle className="closeButton float-end p-0 mx-0" />
        </h5>
      </Col>
      <Row className="m-2">
        <Col xs={12} md={8} className="ml-4 p-0 mt-3">
          <Form noValidate className="ml-3">
            <Form.Group>
              <Form.Label>Book Title</Form.Label>
              <Form.Control size="sm" required type="text" />
              <Form.Control.Feedback type="invalid">
                Please enter book title
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control size="sm" required type="number" />
              <Form.Control.Feedback type="invalid">
                Please enter price
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label>Author</Form.Label>
              <Select
                className="select-control"
                classNamePrefix="select-control"
                isSearchable
                isClearable
              />
            </Form.Group>
            <div className="py-4">
              <button type="submit" className="btn btn-primary float-end">
                Create
              </button>
            </div>
          </Form>
        </Col>
      </Row>
    </Row>
  );
};

export default BookForm;
