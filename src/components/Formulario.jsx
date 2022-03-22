import React from "react";
import create from "../Crud/createList";
import update from "../Crud/updateList";
import remove from "../Crud/deleteList";
import { useState } from "react";
import swal from "sweetalert";
import { Col, Form, Row, Button } from "react-bootstrap-v5";
import { useEffect } from "react";

const Formulario = (props) => {
  const [information, setInformation] = useState({
    id: null,
    firstName: "",
    lastName: "",
  });

  const limpiar = () => {
    setInformation({
      id: null,
      firstName: "",
      lastName: "",
    });
  };

  const handleChange = (e) => {
    setInformation({
      ...information,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if(information.id == null && information.firstName =="" && information.lastName == ""){
     swal("Something its Wrong", "Data can't Save it!", "error");
    }else{
     create(information);
     limpiar();
    }
  };

  const onUpdate = (e) => {
    e.preventDefault();
    update(information);
    limpiar();
  };

  const onDelete = (e) => {
    e.preventDefault();
    remove(information);
    limpiar();
  };

  useEffect(() => {
    setInformation({
      id: props.info.id,
      firstName: props.info.firstName,
      lastName: props.info.lastName,
    });
  }, [props]);

  return (
    <Form id="reset">
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2" style={{ display: "none" }}>
          ID
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="name"
            placeholder="name"
            name="id"
            value={information.id}
            onChange={handleChange}
            hidden="true"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          FirstName
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="name"
            placeholder="name"
            name="firstName"
            value={information.firstName}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          LastName
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="lastname"
            placeholder="lastname"
            name="lastName"
            value={information.lastName}
            onChange={handleChange}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Actions
        </Form.Label>
        <Col sm={10}>
          <Button
            variant="primary"
            onClick={onSubmit}
            type="submit"
            className="mx-1"
          >
            Add
          </Button>
          <Button
            variant="warning"
            onClick={onUpdate}
            type="submit"
            className="mx-4"
          >
            Update
          </Button>
          <Button variant="danger" type="submit" onClick={onDelete}>
            Delete
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
};
Formulario.defaultProps = {
  info: {},
};
export default Formulario;
