import React from "react";
import { Col, Row } from "react-bootstrap";
import { Edit, Trash2 } from "react-feather";
import {IBook, option} from "../../Types";
import Swal, {SweetAlertOptions} from "sweetalert2";

type BookProps= {
    oneBook: IBook;
    index: number;
    getIndexToEdit:(editIndex:number)=>void;
    formShow:(select:boolean)=>void;
    deleteBook:(deleteIndex:number)=>void;
}
const Book: React.FC <BookProps>= (props) => {
    const {oneBook, index , getIndexToEdit,formShow,deleteBook }=props;
    return (
    <Row className="authors my-2 py-0 flex align-items-center">
      <Col xs={10} className="m-0 my-2  p-0">
        <div className=" p-0 m-0">
          <h5 className=" m-0 p-0">0{index+1}.{oneBook.name}</h5>
        </div>
      </Col>
      <Col xs={2} className="icons px-0 m-0 mb-0 d-flex justify-content-end">
        <Edit className="icons text-warning mx-2 my-0" size={20} onClick={()=>{
            getIndexToEdit(index);
            formShow(true);
            ;
        }}/>
        <Trash2 className="icons text-danger mx-2 my-0" size={20} onClick={()=>{
            Swal.fire({
                title: 'Are you sure?',
                text: 'You won\'t be able to revert this!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            } as SweetAlertOptions).then((result) => {
                if (result.value) {
                    deleteBook(index);
                    formShow(false);
                    Swal.fire(
                        'Deleted!',
                        'Item has been deleted',
                        'success'
                    )
                }
            });


        }} />
      </Col>
    </Row>
  );
};

export default Book;
