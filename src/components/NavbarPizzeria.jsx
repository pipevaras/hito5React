import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './Navbar.css'

const NavbarPizzeria = () => {
  const total = 25000
  const token = false
  return (
    <Navbar
      bg="dark"
      data-bs-theme="light"
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand href="#home" style={{ color: 'white' }}>
          ¡Pizzería Mamma Mia!
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#link" style={{ color: 'white' }}>
              <img src="/src/assets/icons8-pizza-16.png" alt="" />
              Home
            </Nav.Link>
            <Nav.Link
              style={{ color: 'white' }}
              className={token ? null : 'hidden-element'}
              href="#link"
            >
              <img
                style={{ width: '16px' }}
                src="src/assets/icons8-padlock-48.png"
                alt=""
              />
              Profile
            </Nav.Link>
            <Nav.Link
              style={{ color: 'white' }}
              className={token ? null : 'hidden-element'}
              href="#link"
            >
              <img
                style={{ width: '16px' }}
                src="src/assets/icons8-locked-48.png"
                alt=""
              />
              Logout
            </Nav.Link>
            <Nav.Link
              style={{ color: 'white' }}
              className={token ? 'hidden-element' : null}
              href="#"
            >
              <img
                style={{ width: '16px' }}
                src="src/assets/icons8-locked-with-key-48.png"
                alt=""
              />
              Login
            </Nav.Link>
            <Nav.Link
              style={{ color: 'white' }}
              className={token ? 'hidden-element' : null}
              href="#"
            >
              <img
                style={{ width: '16px' }}
                src="src/assets/icons8-locked-with-key-48.png"
                alt=""
              />
              Register
            </Nav.Link>
            <Nav.Link style={{ color: 'white' }} href="#link">
              <img
                style={{ width: '16px' }}
                src="src/assets/icons8-cart-48.png"
                alt=""
              />
              Total: ${total.toLocaleString()}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarPizzeria
