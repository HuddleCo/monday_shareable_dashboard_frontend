import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const Login = ({ setFileUrl }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [dashboardUrl, setDashboardUrl] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/getDashboard", {
        username: username,
        password: password,
        dashboardUrl: dashboardUrl,
      })
      .then((res) => {
        if (res.data.message === "success") {
          setFileUrl(
            `http://localhost:5000/share?filename=${res.data.filename}`
          );
          window.open(
            `http://localhost:5000/share?filename=${res.data.filename}`
          );
        }
      });
  };

  return (
    <>
      <Form onSubmit={submitHandler}>
        <h1>Login Page</h1>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="url">
          <Form.Label>Dashboard Url</Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter dashboard url"
            value={dashboardUrl}
            onChange={(e) => setDashboardUrl(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button className="my-2" type="submit" variant="primary">
          Sign In
        </Button>
      </Form>
    </>
  );
};

export default Login;
