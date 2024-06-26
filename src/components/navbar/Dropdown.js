import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Dropdown = ( {isActiveProp, menuItems} ) => {
    const [isActive, setIsActiveLocal] = useState(isActiveProp);

    useEffect(() => { // update local isActive state if the parent prop changes
        setIsActiveLocal(isActiveProp);
    }, [isActiveProp]);

    return (
        <div className="absolute">
            {isActive && (
                // Use the menuItems prop to render the dropdown items
                <div className={"flex flex-col space-y-1 text-left bg-white opacity-80 text-stardust pt-3 w-32 font-display2 text-lg text-dusk p-2 pl-3"}>
                    {menuItems.map((menuItem) => {
                        return (
                            <NavLink
                                to={menuItem.link}
                                className={"font-display2 text-lg hover:text-stardust w-32 inline-block"}
                                style={{ transition: "transform 0.3s" }}
                                onMouseEnter={(e) => {
                                    e.target.style.transform = "translateX(5px)";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.transform = "translateX(0)";
                                }}
                            >
                                {menuItem.name}
                            </NavLink>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Dropdown;