import React from 'react';
import { Container, Home } from '../components/index';

const HomePage = () => {
    return (
        <Container>
            {/* This page will contain only the display portion so it will not have component, all work done in 
            pages */}
            <Home />
        </Container>
    );
};


export default HomePage;