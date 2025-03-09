import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Menu from './components/Menu';
import './App.css';

function App() {
    const [currentPage, setCurrentPage] = useState('Home');

    return (
        <div>
            <div className="title">AL-JOINT ✨</div>
            <NavBar onPageChange={setCurrentPage} />
            <Menu page={currentPage} />
        </div>
    );
}

export default App;
