import React from "react";
import { Col, Row } from "react-bootstrap";
import { Plus } from "react-feather";
import BookList from "./BookList";

const BookUi: React.FC = () => {
  return (
    <React.Fragment>
      <Row>
        <Col className="author p-0 m-0">
          <div className="h1">
            <h3>Authors</h3>
          </div>
          <div>
            <BookList />
          </div>
          <div className="addAuthor">
            <h5>
              <Plus className="plusIcon" /> Add Book
            </h5>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default BookUi;
