import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Author from "./Author";
import {IAuthor, option} from "../../Types";


type AuthorListProps={
    author:IAuthor[] | null;
    handleEditAuthor:(index:number , option:option)=>void;
    formShow:(show:boolean) => void;
}

const AuthorList: React.FC<AuthorListProps>= (props) => {
    const {author , handleEditAuthor , formShow} = props ;


  return (
    <Container className="p-0">
      <Row className="m-0 p-0">
        <Col xs={12} className="m-0  p-0">
            {
                author?.map((oneAuthor,index)=>{
                    return(
                        <Author key={index} oneAuthor={oneAuthor} handleEditAuthor={handleEditAuthor} index={index} formShow={formShow}/>
                    )
                })
            }
        </Col>
      </Row>
    </Container>
  );
};

export default AuthorList;
