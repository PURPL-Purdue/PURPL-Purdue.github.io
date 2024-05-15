import React from 'react';

const Button = (props) => {
    const {text, link} = props;
    return (
        <button className="w-64 rounded-md border-stardust border-2 border-stardust px-9 py-5">
            <a href={link} className="text-white font-display2 text-xl">
                {text}
            </a>
        </button>
    );
};

export default Button;