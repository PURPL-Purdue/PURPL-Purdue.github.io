import React from 'react';

const SmallButton = (props) => {
    const {text, link} = props;
    return (
        <button className="w-50 rounded-md border-stardust border-2 border-stardust px-4 py-2 mx-auto">
            <a href={link} className="text-white font-display text-md">
                {text}
            </a>
        </button>
    );
};

/*
.btn-0 {
    $btn-color: random-color($max:200);
    $btn-color-dark: shade($btn-color, 40%);
    color: tint($btn-color);
  
    &:before {
      content: '';
      @include absolute(0,0,0,0);
      background-color: $btn-color-dark;
      transform: translateX(-100%);
    }
  
    &:hover {
      color: tint($btn-color, 75%);
  
      &:before {
        transform: translateX(0);
      }
    }
  }
    */
  

export default SmallButton;