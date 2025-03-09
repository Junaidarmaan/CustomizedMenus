import React from 'react';
import '../css/Item.css';  // Make sure to style it appropriately

function Item({ item }) {
    return (
        <div className="item">
            <img
                src={`/${item.image}`}  // Image path for the clicked item
                alt={item.name}
                className="item-image"
            />
            <div className="item-details">
                <h1>{item.name}</h1>
                <p>{item.desc}</p>
                <strong>{item.price}</strong>
            </div>
        </div>
    );
}

export default Item;
