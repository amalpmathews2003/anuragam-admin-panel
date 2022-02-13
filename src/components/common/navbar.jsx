import {
  Navbar,
  Container,
  Nav,
  Image,
  OverlayTrigger,
  Tooltip,
  Button,
  NavDropdown,
} from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";
export function NavBar() {
  const [user] = useAuthState(auth);
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href={`${process.env.PUBLIC_URL}`}>
          Anuragam Admin
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href={`${process.env.PUBLIC_URL}`}>Disapproved</Nav.Link>
            <Nav.Link href={`${process.env.PUBLIC_URL}/approved`}>
              Approved
            </Nav.Link> */}
            <NavDropdown title="Messages" id="basic-nav-dropdown">
              <NavDropdown.Item href={`${process.env.PUBLIC_URL}`}>
                Disapproved
              </NavDropdown.Item>
              <NavDropdown.Item href={`${process.env.PUBLIC_URL}/approved/message`}>
                Approved
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Songs" id="basic-nav-dropdown">
              <NavDropdown.Item href={`${process.env.PUBLIC_URL}/disapproved/songs`}>
                Disapproved
              </NavDropdown.Item>
              <NavDropdown.Item href={`${process.env.PUBLIC_URL}/approved/songs`}>
                Approved
              </NavDropdown.Item>
            </NavDropdown>
            <Button
              variant="dark"
              onClick={() => {
                signOut(auth);
              }}
            >
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>

        <Image
          src={user.photoURL}
          width={45}
          roundedCircle={true}
          fluid
        ></Image>
      </Container>
    </Navbar>
  );
}
