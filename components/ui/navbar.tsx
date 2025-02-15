import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

export default function Navigation(){

    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          {/* Brand/Logo */}
          <Navbar.Brand href="/" className="fw-bold">
            LOGO
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Navigation Links */}
            <Nav className="mx-auto">
              <Nav.Link href="/services" className="mx-3">SERVICES</Nav.Link>
              <Nav.Link href="/about" className="mx-3">ABOUT US</Nav.Link>
              <Nav.Link href="/domains" className="mx-3">DOMAINS</Nav.Link>
              <Nav.Link href="/faqs" className="mx-3">FAQS</Nav.Link>
            </Nav>
            
            {/* Login Button */}
            <Button variant="outline-light">LOGIN</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}