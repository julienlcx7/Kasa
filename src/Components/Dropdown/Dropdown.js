import React, { useState } from 'react';
import './Dropdown.scss';

function Dropdown({ title, content }) {
    // State to control the visibility of the dropdown content
    const [visible, setVisible] = useState(false);

    // Function to toggle the visibility of the dropdown content
    const toggleVisibility = () => {
        setVisible(!visible);
    };

    return (
        <div className="dropdown">
            <button className={`dropdown-btn ${visible ? 'rotate-up' : ''}`} onClick={toggleVisibility}>
                {title}
                <i className="fas fa-chevron-down"></i>
            </button>
            {/* Show the dropdown content only if visible is true */}
            {visible && (
                <ul className="dropdown-content">
                    {content}
                </ul>
            )}
        </div>
    );
}

export default Dropdown;
