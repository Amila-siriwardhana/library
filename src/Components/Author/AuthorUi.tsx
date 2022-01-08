import React, {useState} from "react";
import { Col, Row } from "react-bootstrap";
import { Plus } from "react-feather";
import AuthorForm from "./AuthorForm";
import AuthorList from "./AuthorList";
import {IAuthor, option} from "../../Types";

type AuthorUiProps={
   createAuthor : (name:string )=>void;
  author:IAuthor[] | null;
  handleEditAuthor:(index:number , option:option)=>void;
  editAuthor:IAuthor | null;
  formShow:(show:boolean) => void;
  showForm:boolean;
  setEditAuthor:(editAuthor:IAuthor | null)=>void;
  setIndexToEdit:(number:number | null)=>void;
}

const AuthorUi: React.FC<AuthorUiProps> = (props) => {
  const {createAuthor , author , handleEditAuthor , editAuthor , formShow , showForm  , setEditAuthor ,setIndexToEdit} = props ;

  const [authorValue , setAuthorValue ] = useState<string>("");

  const clearForm=()=>{
    setAuthorValue("");
    setIndexToEdit(null);
    setEditAuthor(null);
    formShow(true);
  }
  return (
    <React.Fragment>
      <Row className="m-0 p-0">
        <Col className="author p-0 m-0">
          <div className="h1 mr-3 px-0 pr-3 mb-3">
            <h1>Authors</h1>
          </div>
          <div>
            {author?.length ? <AuthorList author={author} handleEditAuthor={handleEditAuthor} formShow={formShow}/> : <h3>No More Authors</h3>}
          </div>
          <div onClick={()=>clearForm()}  >
            <h5 className="addButton mb-5 mt-3">
              <Plus className="plusIcon pb-1" /> Add Author
            </h5>
          </div>
          <div >
            <div>
              {showForm && <AuthorForm formShow={formShow} createAuthor={createAuthor} editAuthor={editAuthor}
                                       setAuthorValue={setAuthorValue} authorValue={authorValue}  />}
            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default AuthorUi;
