import React from "react";
import "./Title.css";
import { Container, Navbar } from "react-bootstrap";

const Title = ({ children, marginBottom }) => {
  return (
    <>
      <Navbar bg="success" data-bs-theme="dark" className="titleContainer">
        <Container>
          <Navbar.Brand className="title">{children}</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Title;
