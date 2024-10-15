import React, { useEffect, useState } from 'react';
import { fetchContent } from '../services/api';

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
        <div>
            {content && content.attributes && content.attributes.body ? (
                <>
                    <h1>{content.attributes.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: content.attributes.body.value }} />
                </>
            ) : (
                <div>No content available</div>
            )}
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">Send</button>
            </form>

        </div>
    );
};

export default Contact;
