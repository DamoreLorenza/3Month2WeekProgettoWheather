import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="p-3">
      <Container fluid>
        <Navbar.Brand href="#" className='fw-bolder text-info'><i class="bi bi-cloud-sun"></i>  EPIMETEO</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/temperature" className='fw-bold'>Home</Nav.Link>
            
            <Nav.Link href="/detail" className='fw-bold'>Oggi</Nav.Link>
            
            <NavDropdown title="Meteo" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3" >Oggi</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Settimana
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Prossime settimane
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              News
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-warning">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;