import React from "react";
import {Col, Row} from "react-bootstrap";
import {Edit, Trash2} from "react-feather";
import {IAuthor, option} from "../../Types";
import Swal, {SweetAlertOptions} from "sweetalert2";

type AuthorProps={
    oneAuthor:IAuthor;
    index:number;
    handleEditAuthor:(index:number, option:option)=>void;
    formShow:(show:boolean) => void;
}


const Author: React.FC<AuthorProps> = (props) => {
    const {oneAuthor, index , handleEditAuthor , formShow}=props;





  return (
    <Row className="authors m-0 p-0 py-1 flex align-items-center ">
      <Col xs={10} className="m-0 my-2  p-0">
        <div className=" px-0 mx-0">
          <h5 className=" m-0 p-0">{index+1}. {oneAuthor.name}</h5>
        </div>
      </Col>
      <Col xs={2} className="icons py-0 my-0 d-flex justify-content-end">
        <Edit className="icons text-warning mx-2 my-0" size={20} onClick={()=> {
            handleEditAuthor(index, option.edit);
            formShow(true);
        }} />
        <Trash2 className="icons text-danger mx-2 my-0" size={20} onClick={()=>{
            Swal.fire({
                title: 'Are you sure?',
                text: `Do you want to delete ${oneAuthor.name} ?`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            } as SweetAlertOptions).then((result) => {
                if (result.value) {
                    handleEditAuthor(index,option.delete);
                    formShow(false);
                    Swal.fire(
                        'Deleted!',
                        'Item has been deleted',
                        'success'
                    )
                }
            });

        }}/>
      </Col>
    </Row>
  );
};

export default Author;
