import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

const Dropdown = ({ isActiveProp, menuItems, id, labelledBy, onClose }) => {
    const [isActive, setIsActiveLocal] = useState(isActiveProp);
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const itemRefs = useRef([]);

    useEffect(() => { // update local isActive state if the parent prop changes
        setIsActiveLocal(isActiveProp);
        if (isActiveProp) {
            setFocusedIndex(0); // Reset focus to first item when opening
        }
    }, [isActiveProp]);

    // Focus the item when focusedIndex changes
    useEffect(() => {
        if (isActive && focusedIndex >= 0 && itemRefs.current[focusedIndex]) {
            itemRefs.current[focusedIndex].focus();
        }
    }, [focusedIndex, isActive]);

    const handleKeyDown = (e, index) => {
        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setFocusedIndex((index + 1) % menuItems.length);
                break;
            case 'ArrowUp':
                e.preventDefault();
                setFocusedIndex((index - 1 + menuItems.length) % menuItems.length);
                break;
            case 'Escape':
                e.preventDefault();
                onClose?.();
                // Return focus to trigger button
                document.getElementById(labelledBy)?.focus();
                break;
            case 'Tab':
                // Allow natural tab, close dropdown
                onClose?.();
                break;
            case 'Home':
                e.preventDefault();
                setFocusedIndex(0);
                break;
            case 'End':
                e.preventDefault();
                setFocusedIndex(menuItems.length - 1);
                break;
            default:
                break;
        }
    };

    return (
        <div className="absolute top-full left-0">
            {isActive && (
                // Use the menuItems prop to render the dropdown items
                <ul
                    id={id}
                    role="menu"
                    aria-labelledby={labelledBy}
                    className={"flex flex-col space-y-1 text-left bg-white opacity-90 text-stardust pt-3 min-w-32 font-display2 text-lg p-2 pl-3 pr-6"}
                >
                    {menuItems.map((menuItem, index) => {
                        return (
                            <li key={menuItem.name} role="none">
                                <NavLink
                                    ref={el => itemRefs.current[index] = el}
                                    to={menuItem.link}
                                    role="menuitem"
                                    tabIndex={focusedIndex === index ? 0 : -1}
                                    className={"font-display text-xl hover:text-stardust min-w-32 inline-block focus:outline-2 focus:outline-stardust"}
                                    style={{ transition: "transform 0.3s" }}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = "translateX(5px)";
                                        setFocusedIndex(index);
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = "translateX(0)";
                                    }}
                                >
                                    {menuItem.name}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;