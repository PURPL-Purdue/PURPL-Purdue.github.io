import React from 'react';

const ImageBox = ({ imageUrl, imageAlt, header, caption }) => {
    return (
        <div>
        <div className="flex flex-col align-middle mt-auto mb-14 p-8 bg-white w-[400px] h-[500px] bg-off-white space-y-6 text-left">
            <div className="h-[50%]">
                <img className="h-[100%] mx-auto" src={imageUrl} alt={imageAlt} />
            </div>
            <p className="font-display-bold text-6xl" >{header}</p>
            <p className="font-display2">{caption}</p>
        </div>
        </div>
    );
};

export default ImageBox;