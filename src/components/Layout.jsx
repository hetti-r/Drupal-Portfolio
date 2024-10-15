import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import { LinkContainer } from "react-router-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
    return (
        <>
            <Container fluid className="px-0" layout-container>
                <Row className="mx-0">
                    <Navbar className="px-3 gradient-background">
                        <Container className="justify-content-end">
                            <Nav className="me-auto">
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
                <Row className="justify-content-center px-0 m-0">
                    <Outlet />
                </Row>

            </Container>
            <Footer />
        </>

    );
};

export default Layout;
