import React, { useState} from "react";
import { Col, Row, Container } from "react-bootstrap";
import Welcome from "./Welcome";
import AuthorUi from "./Author/AuthorUi";
import BookUi from "./Books/BookUi";
import {IAuthor, option} from "../Types";
import {nanoid} from "nanoid";



type HomePageProps = {
    author ?: IAuthor[]  ;
}

const HomePage: React.FC<HomePageProps> = (props) => {

    const [author , setAuthor]=useState< IAuthor[] | null >(null);
    const [editAuthor , setEditAuthor]=useState<IAuthor | null>(null);
    const [indexToEdit , setIndexToEdit] = useState<number | null>(null);
    const[showForm , setShowForm] = useState(false);
    const [authorValue , setAuthorValue ] = useState<string>("");


    const formShow = (show:boolean) => {
        setShowForm(show);
    }



    const handleEditAuthor=(index:number , options:option)=>{
        if(options===option.edit){
            editAuthors(index);
        }else{
            deleteAuthors(index)
        }

    }




    const createAuthor=(name: string  )=> {
        let newAuthor = author?.slice() ?? [];
        let id=nanoid();
        if (indexToEdit===null) {
            newAuthor.push({name: name , id:id});
        } else {
        // newAuthor.splice(indexToEdit , 1 , {name: name})
            newAuthor[indexToEdit].name=name;
            setIndexToEdit(null);

        }
        setAuthor(newAuthor);
        setEditAuthor(null);
    }
    const editAuthors=(index:number)=>{
        if(author){
            setEditAuthor(author[index]);
            setIndexToEdit(index);
        }

    }
    const deleteAuthors = (index:number) => {
        const newAuthors=author?.slice() ?? [];
        newAuthors.splice(index , 1 )
        setAuthor(newAuthors);
    }



  return (
    <Container fluid={true}>
      <Row>
        <Welcome />
      </Row>
      <Row>
        <Col xs={12} md={6}  className="mx-0 px-4 px-md-5">
                         <BookUi author={author} />
        </Col>
        <Col xs={{ span: 12, order: 'first' }} className="mx-0 px-2 px-md-5" md={{ span: 6, order: 'last' }}>
          <AuthorUi
              createAuthor={createAuthor} author={author} handleEditAuthor={handleEditAuthor}
              editAuthor={editAuthor} formShow={formShow} showForm={showForm}
              setEditAuthor={setEditAuthor} setIndexToEdit={setIndexToEdit} authorValue={authorValue}
              setAuthorValue={setAuthorValue}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
