import React from 'react';
import WelcomeLibrary from "../assets/images/welcome.webp";
import {Row,Col} from "react-bootstrap";


const Welcome: React.FC = () =>{
    return (
    <React.Fragment >
      <Col className={"welcomeTop "}>
      <Row>
      <h1 className={"topic"}>My Library</h1>
      </Row>
      <Row xs={12} className={"mx-0 px-0"}>
        <img src={WelcomeLibrary} className={"welcome"} alt={"Library"}></img>
      </Row>
      <Row className={"text-end"}>
       <p className={"photoCredit"}>Photo By<a
                  href="https://unsplash.com/@annahunko?utm_source=unsplash&utm_medium=referral&utm_
                    content=creditCopyText"
                  rel="noreferrer"
                  target="_blank"
              >
                  Anna Hunko
                  {" "}
              </a>
              on{" "}
              <a
                  href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_
                    content=creditCopyText"
                  rel="noreferrer"
                  target="_blank"
              >
                  Unsplash{" "}
              </a></p>
      </Row>
      </Col>
    </React.Fragment>
  );
}
export default Welcome;