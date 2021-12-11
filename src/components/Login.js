import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Link,Router,Routes,Route} from "react-router-dom"
import "./Login.css"
import Register from "./Register";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 8;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
      

    <div className="Login">
        
      <Form onSubmit={handleSubmit}>
      <h1 className="head">Login</h1>
        <Form.Group className="email" size="lg" controlId="email">
          <Form.Label>Email </Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="password" size="lg" controlId="password">
          <Form.Label>Password </Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button className="submit" block size="lg" type="submit" disabled={!validateForm()}>
          Submit
        </Button>
        <Link as={Link} to="/register">
        <Button className="register" block size="lg">
          Registration
        </Button>
        </Link>
        
      </Form>
    </div>
 
  );
}