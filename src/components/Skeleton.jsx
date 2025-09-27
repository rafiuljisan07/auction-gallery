import React from 'react';
import Container from './Container';

const Skeleton = () => {
    return (
        <Container>
            <div className="flex w-full flex-col gap-4">
                <div className="skeleton h-64 w-full"></div>
                <div className="skeleton h-4 w-1/2"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>
        </Container>
    );
};

export default Skeleton;