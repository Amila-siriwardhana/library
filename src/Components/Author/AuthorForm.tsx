import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {Container, Row, Col, Form} from "react-bootstrap";
import { XCircle} from "react-feather";
import {IAuthor} from "../../Types";


type AuthorFormProps = {
    formShow:(show:boolean) => void;
    createAuthor: (name:string )=>void;
    editAuthor:IAuthor | null;
    setAuthorValue:(author:string)=> void;
    authorValue:string;


}

const AuthorForm: React.FC<AuthorFormProps> = (props) => {
    const {formShow , createAuthor , editAuthor , setAuthorValue , authorValue } = props;
    const [formValidate, setFormValidate] = useState<boolean>(false);


    useEffect(()=>{
        if(editAuthor){
            setAuthorValue(editAuthor.name)
        }

    },[editAuthor])




    const handleOnSubmit = (e: FormEvent) => {
        e.preventDefault();
        if(authorValue) {
            createAuthor(authorValue);

        }else{
            setFormValidate(true);
        }
        setAuthorValue("");
        formShow(false);


    }

    const handleAuthor = (e:ChangeEvent<HTMLInputElement>) =>{
        setAuthorValue(e.target.value);
    }







  return (
    <Container className="p-0 m-0">
      <Row className="p-0 m-0">
        <Col xs={10} className="p-0 m-0">
            <Row className="ms-1">
                <h5 className=" m-0 p-0 ">
                    <span className="authorTopic">{editAuthor ? "Update" : "Create" } Author</span>
                    <XCircle onClick={() => formShow(false)} className="closeButton  p-0 me-4 float-end" />
                </h5>
            </Row>
          <Form  noValidate validated={formValidate} onSubmit={handleOnSubmit} className=" form py-3 mx-3">
              <Form.Group>
                  <Form.Label className="label">Name of Author </Form.Label>
                  <Form.Control size="sm" required type="text" aria-required  onChange={handleAuthor} value={authorValue }/>
                  <Form.Control.Feedback type="invalid" >
                      Please enter Author Name
                  </Form.Control.Feedback>
              </Form.Group>
            <div className="py-4">
              <button type="submit" className="button py-1 px-4 float-end" >
                  {editAuthor ? "Update" : "Create" }
              </button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AuthorForm;
