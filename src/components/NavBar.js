import React from 'react';
import "../css/Nav.css";

function NavBar({ onPageChange }) {
    return (
        <div className="top-navbar">
            <div className="nav-links">
                <a href="#" onClick={() => onPageChange('Starters')}>Starters</a>
                <a href="#" onClick={() => onPageChange('Combos')}>Combos</a>
                <a href="#" onClick={() => onPageChange('Family')}>Family</a>
            </div>
        </div>
    );
}


export default NavBar;
