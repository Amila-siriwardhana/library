import React, {useState} from "react";
import { Col, Row } from "react-bootstrap";
import { Plus } from "react-feather";
import BookList from "./BookList";
import BookForm from "./BookForm";
import {IAuthor , IBook } from "../../Types";



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
  const [bookAuthorValue , setBookAuthorValue]= useState< string  >("");


  console.log(indexToEdit);
  const addBookForm = (select:boolean)=>{
    setEditValue(null);
    setShowForm(select);
  }
  const formShow = (select:boolean) => {
    setShowForm(select);
  }

  const handleBookName=(name:string, price:string , authors:string)=>{
    const newBook= bookName? bookName.slice() : [];
    if (indexToEdit==null){
      newBook.push({name: name , price:price , author:authors})
    }else{
      newBook.splice(indexToEdit , 1 , {name: name , price:price , author:authors})
      setIndexToEdit(null);
    }

    setBookName(newBook);
    console.log(newBook);
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
    setBookAuthorValue("");
    setIndexToEdit(null);
    setEditValue(null);
    formShow(true);
  }

console.log(editValue);

  return (
    <React.Fragment>
      <Row>
        <Col className="author p-0 m-0">
          <div className="h1 mr-3 px-0 pr-3 mb-3">
            <h1>Books</h1>
          </div>
          <div className="mb-3 ml-0 ">
            {bookName?.length ? <BookList  bookName={bookName} getIndexToEdit={getIndexToEdit} formShow={formShow} deleteBook={deleteBook}/>: <h3>no elements</h3>}
          </div>
          <div onClick={()=>clearForm()} >
            <h5 className="addButton mb-4 mt-2">
              <Plus className="plusIcon pb-1" /> Add Book
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
