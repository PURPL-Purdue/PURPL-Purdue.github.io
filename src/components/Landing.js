import React from 'react';

const Landing = () => {
    return (
        <div className="flex flex-row justify-start items-end">
            <video className="w-full h-full object-cover opacity-100" autoPlay muted loop>
                <source src={require('../assets/video.mp4')} type="video/mp4" />
                {/* Add additional source tags for different video formats if needed */}
            </video>
            <div className="flex flex-col absolute object-fill justify-start ms-10 mb-12">
                <p className="text-9xl text-left text-white justify-start mb-2">rockets</p>
                <p className="text-5xl text-left text-white">lorem ipsum dolor</p>
            </div>
        </div>
    );
};

export default Landing;