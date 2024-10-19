import React, { useEffect, useState } from 'react';
import { fetchContent } from '../services/api';
import { Button, Card, Col, Container, Form, ListGroup, Row, Spinner } from "react-bootstrap";

const Contact = () => {
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchContent('node/contact')
            .then((data) => {
                console.log('Fetched data:', data); // Log the fetched data
                setContent(data.data[0]); // Access the first item in the data array
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching content:', error); // Log any errors
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading content: {error.message}</div>;
    }

    return (
        <Container fluid>
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={3} className="mt-5 text-center">
                    {content && content.attributes && content.attributes.body ? (
                        <>
                            <h1>{content.attributes.title}</h1>
                            <div dangerouslySetInnerHTML={{ __html: content.attributes.body.value }} />
                        </>
                    ) : (
                        <div>No content available</div>
                    )}
                    <Form onSubmit={(e) => e.preventDefault()}>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} required />
                        </Form.Group>

                        <Button className="form-submit" variant="primary" type="submit">
                            Send
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
