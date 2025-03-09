import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Menu from './components/Menu';  // New component to show different pages
import Item from './components/Item';  // New Item component for details
import './App.css';

function App() {
    const [currentPage, setCurrentPage] = useState('Home');  // To track which page is active
    const [selectedItem, setSelectedItem] = useState(null);  // State for selected item

    // Function to handle item click in Menu
    const handleItemClick = (item) => {
        setSelectedItem(item);  // Set the selected item when clicked
    };

    return (
        <div>
            <div className="title">AL-JOINT</div>
            <NavBar onPageChange={setCurrentPage} />
            
            {/* Conditionally render Menu or Item component */}
            {selectedItem ? (
                <Item item={selectedItem} />  
            ) : (
                <Menu page={currentPage} onItemClick={handleItemClick} />  
            )}
        </div>
    );
}

export default App;
