import React from 'react';
import logo from './logo.svg';
import './App.css';
import Info from './components/info/Info';
import Contact from './components/contact/Contact';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#info">Info</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
      <h1>Anssif</h1>
      <h3>Welcome to my home page.</h3>
      <Info />
      <Contact />
      <Navbar expand="lg" variant="dark" bg="dark" fixed="bottom">
  <Container>
    <Navbar.Brand href="#">© 2019 Anssi Forsman</Navbar.Brand>
  </Container>
</Navbar>
    </div>
  );
}

export default App;
