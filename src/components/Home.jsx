import React, { useEffect, useState } from 'react';
import { fetchContent } from '../services/api';
import { Button, Card, Col, Container, Form, ListGroup, Row, Spinner } from "react-bootstrap";


const Home = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchContent('node/landing')
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
    <Container fluid className="px-0 m-0">
      <Row className="justify-content-center px-0 m-0">
        <Col xs={12} md={8} lg={6} className="mt-5 text-center">

          {content && content.attributes && content.attributes.body ? (
            <>
              <h1>{content.attributes.title}</h1>

              <div

                dangerouslySetInnerHTML={{ __html: content.attributes.body.value }}
              />
            </>
          ) : (
            <div>No content available</div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
