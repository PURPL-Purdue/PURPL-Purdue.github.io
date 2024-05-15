import React from 'react';


const ImageBox = (props) => {
    const { imageUrl, imageAlt, header, subheader, caption, imageRelWidth } = props;
    
    return (
        <div className="text-dusk">
            <div className="flex flex-col align-middle mt-auto mb-14 p-8 bg-white w-[400px] h-[500px] bg-off-white space-y-6 text-left">
                <div className="flex flex-row h-[50%] items-center">
                    <img className={`${imageRelWidth} mx-auto`} src={imageUrl} alt={imageAlt} />
                </div>
                <div>
                    <p className="font-display-bold text-6xl" >{header}</p>
                    <p className="font-display-light text-xl mb-4" >{subheader}</p>
                    <p className="font-display2-light">{caption}</p>
                </div>
            </div>
        </div>
    );
};

export default ImageBox;