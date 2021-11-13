import React from "react";
import { Col, Row } from "react-bootstrap";
import { Plus } from "react-feather";
import BookList from "./BookList";
import BookForm from "./BookForm";

const BookUi: React.FC = () => {
  return (
    <React.Fragment>
      <Row>
        <Col className="author p-0 m-0">
          <div className="h1 mr-3 px-0 pr-3">
            <h3>Books</h3>
          </div>
          <div>
            <BookList />
          </div>
          <div className="addAuthor">
            <h5>
              <Plus className="plusIcon" /> Add Book
            </h5>
          </div>
          <Row>
            <BookForm />
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default BookUi;
