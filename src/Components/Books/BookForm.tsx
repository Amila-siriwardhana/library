import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {Col, Form, Row} from "react-bootstrap";
import {XCircle} from "react-feather";
import Select, {SingleValue} from "react-select";
import {IAuthor, IBook, ISelector} from "../../Types";


type BookFormProps = {
    author:IAuthor [] | null;
    formShow:(select:boolean)=>void;
    handleBookName:(book:IBook)=>void;
    editValue:IBook | null;
    bookValue:string | " ";
    bookPriceValue:string | " ";
    bookAuthorValue:IAuthor | null;
    setBookValue:(name:string | " ")=>void;
    setBookPriceValue:(name:string | " ")=>void;
    setBookAuthorValue:(author:IAuthor)=>void;


}

const selectorBorderColorValue = "#A5A5A5";

const customStyles = {
    control: (provided: any) => ({
        ...provided,
        border: `2px solid ${selectorBorderColorValue}`,
        borderRadius: '0px',
    }),
}
const BookForm: React.FC<BookFormProps> = (props) => {
    const { author , formShow ,handleBookName , editValue , bookValue , bookPriceValue , bookAuthorValue , setBookValue ,
        setBookPriceValue ,setBookAuthorValue } = props;
    const [selectorValidate, setSelectorValidate] = useState<boolean>(false);
    const [formValidate, setFormValidate] = useState<boolean>(false);
    const [selector , setSelector] = useState<ISelector [] >([]);



    useEffect(()=>{
        if(editValue){
            setBookValue(editValue.name);
            setBookPriceValue(editValue.price);
            setBookAuthorValue(editValue.author);


        }

    },[editValue])


    const handleOnSubmit = (e: FormEvent ) => {
        e.preventDefault();
        if(!bookValue || !bookPriceValue || !bookAuthorValue){
            setFormValidate(true);
            if(!bookAuthorValue){
                setSelectorValidate(true);
            }
            return;
        }
        handleBookName({name:bookValue, price:bookPriceValue, author:bookAuthorValue});
        formShow(false);


        return;
    }


    useEffect(()=>{
        const selectArray:ISelector[] = [];
        author?.map((authors)=>{
            selectArray.push({value:authors.id , label:authors.name})
        })
        setSelector(selectArray);

    },[author])
    const handleBook = (e:ChangeEvent<HTMLInputElement>) =>{
            setBookValue(e.target.value);
    }
    const handleBookPrice = (e:ChangeEvent<HTMLInputElement>) =>{
            setBookPriceValue(e.target.value);
    }
    const handleBookAuthorValue = (e: SingleValue<ISelector>) =>{
        if(e){
            setBookAuthorValue({name:e.label , id:e.value});
            setSelectorValidate(false)
        }else{
            setSelectorValidate(true)
        }
    }


    return (

        <Row className="book-form m-0 mt-3">
            <Col xs={12} md={8} className="p-0">
                <h5 className=" m-0 p-0 ">
                    <span className="authorTopic  ">Create Book </span>
                    <XCircle onClick={()=>formShow(false)} className="closeButton  p-0  float-end"/>
                </h5>
            </Col>
            <Row className="m-2">
                <Col xs={12} md={8} className="ml-4 p-0 mt-3">
                    <Form noValidate validated={formValidate} onSubmit={handleOnSubmit} className="ml-3">
                        <Form.Group>
                            <Form.Label className="label mb-0">Title of the Book </Form.Label>
                            <Form.Control size="sm" required type="text"  onChange={handleBook} value={bookValue} />
                            <Form.Control.Feedback type="invalid">
                                Please enter book title
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="label mb-0 mt-2 ">Price</Form.Label>
                            <Form.Control size="sm"  required type="number" onChange={handleBookPrice} value={bookPriceValue} />
                            <Form.Control.Feedback type="invalid">
                                Please enter price
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="label mb-0 mt-2">Author</Form.Label>
                            <Select
                                onChange={handleBookAuthorValue}
                            className="select-control"
                            classNamePrefix="select-control"
                            isSearchable
                            styles={customStyles}
                            isClearable
                                value={selector?.filter(option => option.value === bookAuthorValue?.id)}
                            options={selector}
                            />

                            {selectorValidate &&
                            <small className="invalid-feedback text-danger" style={{'display': 'block'}}>Please Select
                                an
                                Author Name</small>}
                        </Form.Group>
                        <div className="py-4">
                            <button type="submit" className="button py-1 px-4 float-end float-end">
                                {editValue ? "Update" : "Create"}
                            </button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Row>
    );
};

export default BookForm;
