import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Book from "./Book";
import { IBook} from "../../Types";


type BookListProps={
    bookName:IBook [] | null;
    getIndexToEdit:(editIndex:number)=>void;
    formShow:(select:boolean)=>void;
    deleteBook:(deleteIndex:number)=>void;

}

const BookList: React.FC<BookListProps> = (props) => {
    const {bookName , getIndexToEdit ,formShow ,deleteBook }=props;
  return (
    <Container className="p-0">
      <Row className="m-0 p-0">
        <Col xs={12} className="m-0  pl-1">

            {
                bookName?.map((oneBook,index)=>{
                    return(
                        < Book oneBook={oneBook} index={index} getIndexToEdit={getIndexToEdit} formShow={formShow} deleteBook={deleteBook}/>
                    )
                })
            }
        </Col>
      </Row>
    </Container>
  );
};

export default BookList;
