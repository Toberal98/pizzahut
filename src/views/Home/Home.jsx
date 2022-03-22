import React from "react";
import { Col, Container, Row } from "react-bootstrap-v5";
import List from "../../components/list";
import Formulario from "../../components/Formulario";
import { useState } from "react";

const Home = () => {
    const [data,setdata] = useState({
        id: null,
        firstName: '',
        lastName: ''
    });

    const getData = (info) =>{
        setdata(info);
    }
  return (
    <Container style={{ "margin-top": "50px", "background-color": "#fff" }}>
      <h1 className="d-flex justify-content-center">CRUD</h1>
      <hr style={{ "background-color": "#000" }} />
      <Row>
        <Col md={6}>
          <List getData={getData}/>
        </Col>
        <Col md={6}>
          <Formulario info={data}/>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
