import { Navbar, Nav, Container, Form } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useEffect, useState } from 'react';

function NavbarComponent() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const handleToggle = () => setDarkMode(!darkMode);

  return (
    <Navbar bg="dark" variant="dark" expand="md" className="mb-4">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Marvel Manager</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <LinkContainer to="/characters">
              <Nav.Link>Characters</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/create">
              <Nav.Link>Create</Nav.Link>
            </LinkContainer>
          </Nav>
          <Form className="d-flex align-items-center">
            <Form.Check
              type="switch"
              id="darkModeToggle"
              label="Dark Mode"
              checked={darkMode}
              onChange={handleToggle}
              className="text-light"
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;