import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { XCircle } from "react-feather";

const AuthorForm: React.FC = () => {
  return (
    <Container className="p-0 m-0">
      <Row className="p-0 m-0">
        <Col xs={9} className="p-0">
          <h5 className=" m-0 p-0 ">
            <span className="authorTopic ">Create Author </span>
            <XCircle className="closeButton float-end p-0 mx-3" />
          </h5>

          <form className=" form py-3 mx-3">
            <div className="form-group ">
              <label className="lable">Name of Author</label>
              <input
                className="form-control p-0 m-0"
                id="exampleInputEmail1"
                placeholder="Enter author name"
              />
            </div>
            <div className="py-4">
              <button type="submit" className="btn btn-primary float-end">
                Create
              </button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default AuthorForm;
