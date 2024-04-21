import React from 'react';

const Landing = () => {
    return (
        <div className="flex flex-row justify-center items-center">
            <video className="w-full h-full object-cover opacity-100" autoPlay muted loop>
                <source src={require('../assets/video.mp4')} type="video/mp4" />
                {/* Add additional source tags for different video formats if needed */}
            </video>
            <div className="flex absolute inset-0">
                <p className="text-9xl text-white m-auto">purpl</p>
            </div>
        </div>
    );
};

export default Landing;