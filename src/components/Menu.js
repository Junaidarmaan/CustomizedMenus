import React from 'react';
import '../css/Menu.css';  // Link to external CSS

const menuData = {
    starters: [
        { name: "Spring Rolls", price: "₹150", desc: "Crispy veggie spring rolls.", image: "starter1.jpg" },
        { name: "Chapati", price: "₹250", desc: "Spicy chicken drumsticks.", image: "starter2.jpg" },
        { name: "Chicken Lollipop", price: "₹250", desc: "Spicy chicken drumsticks.", image: "starter3.jpg" },
        { name: "Chicken Lollipop", price: "₹250", desc: "Spicy chicken drumsticks.", image: "starter4.jpg" },
        { name: "Chicken Lollipop", price: "₹250", desc: "Spicy chicken drumsticks.", image: "starter5.jpg" }
    ],
    combos: [
        { name: "Veg Combo", price: "₹350", desc: "Complete meal with rice, curry, dessert.", image: "combo1.jpg" },
        { name: "Non-Veg Combo", price: "₹450", desc: "Chicken curry, biryani, and dessert.", image: "combo2.jpg" }
    ],
    family: [
        { name: "Family Feast", price: "₹1200", desc: "Complete meal for 4 people.", image: "family1.jpg" },
        { name: "Party Pack", price: "₹2000", desc: "Meal for 8 with starters, mains, and dessert.", image: "family2.jpg" }
    ]
};

function Menu({ page }) {
    const items = menuData[page.toLowerCase()] || [];

    return (
        <div className="menu">
            <h1>{page} Menu</h1>
            <div className="gallery">
                {items.map((item, index) => (
                    <div key={index} className="card">
                        <img
                            src={`/${page.toLowerCase()}/${item.image}`}
                            alt={item.name}
                            className="menu-image"
                        />
                        <h3>{item.name}</h3>
                        <p>{item.desc}</p>
                        <strong>{item.price}</strong>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Menu;
