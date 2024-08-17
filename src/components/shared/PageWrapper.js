import React from 'react';

const PageWrapper = ({ children }) => {
    return (
        <div className="bg-dusk pb-16">
            {children}
        </div>
    );
};

export default PageWrapper;