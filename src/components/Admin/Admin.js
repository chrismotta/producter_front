import React, { useState, useEffect } from "react";
import { Button, Card, Form } from "react-bootstrap";
import firebase from "../../config/firebase";
import "firebase/firestore";

function Admin() {
  const db = firebase.firestore();

  const [usersList, setUsersList] = useState([]);

  const getAllUsers = () => {
    db.collection("users").onSnapshot(querySnapshot => {
      let _userList = [];
      querySnapshot.forEach(user => {
        _userList.push({ ...user.data(), uid: user.id });
      });
      setUsersList(_userList);
    });
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  const useFormField = initialValue => {
    const [value, setValue] = useState(initialValue);
    const handleChange = event => {
      setValue(event.target.value);
    };
    const clear = () => {
      setValue("");
    };
    return { value, clear, onChange: handleChange };
  };

  const firstName = useFormField("");
  const lastName = useFormField("");
  const email = useFormField("");
  const password = useFormField("");

  const clearFields = () => {
    firstName.clear();
    lastName.clear();
    email.clear();
    password.clear();
  };

  const handleSubmit = event => {
    event.preventDefault();
    db.collection("users")
      .add({
        firstname: firstName.value,
        lastname: lastName.value,
        email: email.value,
        password: password.value
      })
      .then(() => {
        clearFields();
      })
      .catch(function(error) {
        console.error("Error writing new message to database", error);
      });
  };

  const handleDelete = event => {
    db.collection("users")
      .doc(event.target.dataset.uid)
      .delete();
  };

  return (
    <div style={{ padding: "20px" }}>
      <div>
        <Card
          style={{
            width: "100%",
            margin: "0 auto 20px auto",
            background: "burlywood"
          }}
        >
          <Card.Header>Nuevo Usuario</Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Ingresar nombre"
                  value={firstName.value}
                  onChange={firstName.onChange}
                  name="firstnname"
                  autoComplete="firstname"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Ingresar apellido"
                  value={lastName.value}
                  onChange={lastName.onChange}
                  name="lastname"
                  autoComplete="lastname"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="email"
                  placeholder="Ingresar email"
                  value={email.value}
                  onChange={email.onChange}
                  name="name"
                  autoComplete="email"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="password"
                  placeholder="Ingresar contraseña"
                  value={password.value}
                  onChange={password.onChange}
                  name="password"
                  autoComplete="password"
                />
              </Form.Group>
              <Button variant="info" type="submit" style={{ width: "100%" }}>
                Enviar
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
      <div>
        {usersList.length
          ? usersList.map((item, index) => (
              <Card
                key={index}
                style={{
                  width: "100%",
                  margin: "auto",
                  background: "burlywood"
                }}
              >
                <Card.Body>
                  <span>{`Nombre: ${item.firstname} || Email: ${item.email}`}</span>
                  <Button
                    variant="danger"
                    style={{ float: "right", fontWeight: "bold" }}
                    onClick={handleDelete}
                    data-uid={item.uid}
                  >
                    X
                  </Button>
                </Card.Body>
              </Card>
            ))
          : "Cargando lista de usuarios..."}
      </div>
    </div>
  );
}

export default Admin;
