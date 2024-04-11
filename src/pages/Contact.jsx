import { useState, useEffect } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages and getting the current param variable's value from URL
import { useParams, Link } from 'react-router-dom';
import Container from '../components/UI/ListItem';


export default function Contact() {
    return (
        <>
            <Container>
                <div className="card">
                    <div className="card-header">
                        <h2 className="fw-bold mb-1">Ash Lowe</h2>
                        <h5 className="mb-1">Ashloraptor</h5>
                        <a href="mailto:ashloraptor@gmail.com">ashloraptor@gmail.com</a>
                        <a href={`tel:(210)-797-4428`} className="ms-2 me-auto">
                            (210)-797-4428
                        </a>
                    </div>
                </div>
            </Container>
            <footer className="profile-footer">
                {/* Link the user back to the homepage. The to prop is used in place of an href */}
                <Link to="/">← Go Back</Link>
            </footer>
        </>
    );
}
