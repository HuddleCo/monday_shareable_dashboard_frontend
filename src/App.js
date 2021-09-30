import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import DashboardUrl from "./components/DashboardUrl";
import LoginForm from "./components/LoginForm";

const App = () => {
  const [fileUrl, setFileUrl] = useState("");

  return (
    <main>
      <Container
        className="d-flex flex-column justify-content-center"
        style={{ height: "100%" }}
      >
        <h1>Login Page</h1>
        <LoginForm setFileUrl={setFileUrl} />
        <Row className="py-5 mt-4"></Row>
        { fileUrl && <DashboardUrl fileUrl={fileUrl} /> }
      </Container>
    </main>
  );
};

export default App;
