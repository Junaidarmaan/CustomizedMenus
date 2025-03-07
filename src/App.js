import React, { useState, useEffect } from 'react';
import Preloader from './components/PreLoader';
import NavBar from './components/NavBar';
import Menu from './components/Menu';  // New component to show different pages

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState('Home');  // To track which page is active

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);  // Hide preloader after 4 seconds
        }, 4000);

        return () => clearTimeout(timer);  // Cleanup
    }, []);

    return (
        <>
            {isLoading && <Preloader />}
            {!isLoading && (
                <div>
                    <NavBar onPageChange={setCurrentPage} />
                    <Menu page={currentPage} />   {/* Pass page name to Menu */}
                </div>
            )}
        </>
    );
}

export default App;
