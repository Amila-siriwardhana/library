import React, {useState} from "react";
import { Col, Row } from "react-bootstrap";
import { Plus } from "react-feather";
import BookList from "./BookList";
import BookForm from "./BookForm";
import {IAuthor, IBook, ISelector} from "../../Types";



type BookUiProps={
  author:IAuthor [] | null;
}

const BookUi: React.FC<BookUiProps> = (props) => {
  const {author  }=props;
  const[showForm , setShowForm] = useState(false);
  const [bookName , setBookName] = useState<IBook[] | null>([]);
  const [indexToEdit , setIndexToEdit] = useState<number | null>(null);
  const [editValue , setEditValue] = useState<IBook | null>(null);
  const [bookValue , setBookValue]= useState<string>("");
  const [bookPriceValue , setBookPriceValue]= useState<string >(" ");
  const [bookAuthorValue , setBookAuthorValue]= useState< IAuthor | null  >(null);


console.log(bookAuthorValue);

  const formShow = (select:boolean) => {
    setShowForm(select);
  }

  const handleBookName=(book:IBook)=>{
    const newBook= bookName? bookName.slice() : [];
    if (indexToEdit==null){
      newBook.push(book)
    }else{
      newBook.splice(indexToEdit , 1 , book)
      setIndexToEdit(null);
    }

    setBookName(newBook);

  }

  const getIndexToEdit=(editIndex:number)=>{
    setIndexToEdit(editIndex);
    if (bookName){
      setEditValue(bookName[editIndex]);
    }


  }
  const deleteBook = (deleteIndex:number) => {
    const newBook=bookName?.slice() ?? [];
    newBook.splice(deleteIndex , 1 )
    setBookName(newBook);
  }

  const clearForm=()=>{
    setBookValue("");
    setBookPriceValue("");
    setBookAuthorValue(null);
    setIndexToEdit(null);
    setEditValue(null);
    formShow(true);
  }



  return (
    <React.Fragment>
      <Row>
        <Col className="author p-0 m-0">
          <div className="h1 mr-3 px-0 pr-3 mb-3">
            <h1>Books</h1>
          </div>
          <div className="mb-3 ml-0 ">
            {bookName?.length ? <BookList  bookName={bookName} getIndexToEdit={getIndexToEdit} formShow={formShow}
                                           deleteBook={deleteBook}/>: <p className={"noItemLabel"}>
              <i>No books listed here</i>
            </p>}
          </div>
          <div onClick={()=>clearForm()} >
            <h5 className="addButton mb-4 mt-2">
              <Plus className="plusIcon pb-1 me-1" /> Add Book
            </h5>
          </div>
          <Row>
                {showForm &&  <BookForm  author={author} formShow={formShow} handleBookName={handleBookName}
                                         editValue={editValue} bookValue={bookValue} bookPriceValue={bookPriceValue}
                                         bookAuthorValue={bookAuthorValue} setBookValue={setBookValue}
                                         setBookPriceValue={setBookPriceValue} setBookAuthorValue={setBookAuthorValue}
                />}
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default BookUi;
