import React from "react";
import { Col, Row } from "react-bootstrap";
import { Plus } from "react-feather";
import AuthorForm from "./AuthorForm";
import AuthorList from "./AuthorList";

const AuthorUi: React.FC = () => {
  return (
    <React.Fragment>
      <Row>
        <Col className="author p-0 m-0">
          <div className="h1 mr-3 px-0 pr-3">
            <h3>Authors</h3>
          </div>
          <div>
            <AuthorList />
          </div>
          <div className="addAuthor">
            <h5>
              <Plus className="plusIcon" /> Add Author
            </h5>
          </div>
          <div>
            <AuthorForm />
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default AuthorUi;
