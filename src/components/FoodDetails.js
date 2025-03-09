import React from 'react';
import '../css/FoodDetails.css';

function FoodDetails({ item, onClose }) {
    return (
        <div className="food-details">
            <div className="overlay" onClick={onClose}></div>
            <div className="details-content">
                <img src={`/${item.image}`} alt={item.name} />
                <h1>{item.name}</h1>
                <p>{item.desc}</p>
                <strong className='price'>{item.price}</strong>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default FoodDetails;
