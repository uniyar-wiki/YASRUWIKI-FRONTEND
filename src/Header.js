import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/"><img src="https://i.postimg.cc/8cYfnLBL/uniyar-wiki-transformed.webp" className="header_logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">На главную</Nav.Link>
            <Nav.Link as={Link} to="/teachers">Преподаватели</Nav.Link>
            <Nav.Link as={Link} to="/buildings">Корпуса</Nav.Link>
            <Nav.Link as={Link} to="/departments">Кафедры</Nav.Link>
            <Nav.Link as={Link} to="/about">О проекте</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login">Вход/Регистрация</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;