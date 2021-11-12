import React from "react";
import { Col, Row } from "react-bootstrap";
import { Plus } from "react-feather";
import Author from "./Author";
import AuthorForm from "./AuthorForm";

const AuthorUi: React.FC = () => {
  return (
    <React.Fragment>
      <Row className="m-0 p-0">
        <Col className="author p-0 m-0">
          <div className="h1 mb-4">
            <h3>Authors</h3>
          </div>
          <div>
            <Author />
          </div>
          <div>
            <h5 className="authorButton">
              <Plus className="plusIcon" /> Add Author
            </h5>
            <div>
              <AuthorForm />
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default AuthorUi;
