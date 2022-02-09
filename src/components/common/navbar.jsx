import { Navbar,Container,Nav} from "react-bootstrap";
export function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href={`${process.env.PUBLIC_URL}`}>Anuragam Admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={`${process.env.PUBLIC_URL}`}>Disapproved</Nav.Link>
            <Nav.Link href={`${process.env.PUBLIC_URL}/approved`}>Approved</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
