import React, { useState } from 'react';
import '../css/Menu.css';
import FoodDetails from './FoodDetails';

const menuData = {
    starters: [
        { name: "Spring Rolls", price: "₹150", desc: "Crispy veggie spring rolls.", image: "starter1.jpg" },
        { name: "Chapati", price: "₹250", desc: "Soft whole wheat flatbread.", image: "starter2.jpg" },
        { name: "Chicken Lollipop", price: "₹250", desc: "Spicy chicken drumsticks.", image: "starter3.jpg" },
    ],
    combos: [
        { name: "Veg Combo", price: "₹350", desc: "Complete meal with rice, curry, dessert.", image: "combo4.jpg" },
        { name: "Non-Veg Combo", price: "₹450", desc: "Chicken curry, biryani, and dessert.", image: "combo5.jpg" }
    ],
    family: [
        { name: "Family Feast", price: "₹1200", desc: "Complete meal for 4 people.", image: "family1.jpg" },
        { name: "Party Pack", price: "₹2000", desc: "Meal for 8 with starters, mains, and dessert.", image: "family2.jpg" }
    ]
};

function Menu({ page }) {
    const [selectedItem, setSelectedItem] = useState(null);
    const items = menuData[page.toLowerCase()] || [];

    return (
        <div className="menu">
            <h1>{page} Menu</h1>
            <div className="gallery">
                {items.map((item, index) => (
                    <div 
                        key={index} 
                        className="card" 
                        onClick={() => setSelectedItem(item)}
                    >
                        <img
                            src={`/${page.toLowerCase()}/${item.image}`} 
                            alt={item.name}
                            className="menu-image"
                            onError={(e) => e.target.src = '/images/placeholder.jpg'}
                        />
                        <h3>{item.name}</h3>
                        <strong>{item.price}</strong>
                    </div>
                ))}
            </div>

            {selectedItem && (
                <FoodDetails 
                    item={{ 
                        ...selectedItem, 
                        image: `${page.toLowerCase()}/${selectedItem.image}` 
                    }} 
                    onClose={() => setSelectedItem(null)} 
                />
            )}
        </div>
    );
}

export default Menu;
