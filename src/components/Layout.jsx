import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import { LinkContainer } from "react-router-bootstrap";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <Container fluid className="px-0" layout-container>
            <Row className="mx-0">
                <Navbar variant="light" className="px-3">
                    <Container className="justify-content-end">
                        <Nav fill variant="tabs" defaultActiveKey="/home">
                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/about">
                                <Nav.Link>About Me</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/projects">
                                <Nav.Link>Projects</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/contact_me">
                                <Nav.Link>Contact</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Container>
                </Navbar>
            </Row>
            <Row>
                <Outlet />
            </Row>
        </Container>
    );
};

export default Layout;
