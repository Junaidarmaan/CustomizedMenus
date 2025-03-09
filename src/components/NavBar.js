import React from 'react';
import "../css/Nav.css";

function NavBar({ onPageChange }) {
    return (
        <div className="top-navbar">
            <div className="nav-links">
                <div className="nav-item" onClick={() => onPageChange('Starters')}>
                    <img src="starters/starter1.jpg" alt="Starters" />
                    <a href="#">Starters</a>
                </div>
                <div className="nav-item" onClick={() => onPageChange('Combos')}>
                    <img src="combos/combo2.jpg" alt="Combos" />
                    <a href="#">Combos</a>
                </div>
                <div className="nav-item" onClick={() => onPageChange('Family')}>
                    <img src="family/family3.jpg" alt="Family" />
                    <a href="#">Family</a>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
