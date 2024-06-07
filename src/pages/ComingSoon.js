import React from 'react';
import Button from '../components/shared/button/Button.js';

const ErrorPage = () => {
    return (
        <div className="top-0 w-full bg-dusk">
            <div className="w-[1200px] mx-auto">
                <div className="flex flex-col w-full h-full py-96 items-center space-y-12">
                    <p className="text-stardust text-6xl font-display-bold">Coming Soon!</p>
                    <Button text="Return Home" link="/" />
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;