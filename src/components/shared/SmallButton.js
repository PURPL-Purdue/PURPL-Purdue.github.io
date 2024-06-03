import React from 'react';

const SmallButton = (props) => {
    const {text, link} = props;
    return (
        <button className="w-50 rounded-md border-stardust border-2 border-stardust px-4 py-2 mx-auto">
            <a href={link} className="text-white font-display2 text-md">
                {text}
            </a>
        </button>
    );
};

export default SmallButton;