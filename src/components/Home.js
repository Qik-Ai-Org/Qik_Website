// Home.js

// Importing necessary libraries and components
import React from 'react';
import './Home.css';
import Header from './Header';
import Footer from './Footer';

// Home component definition
const Home = () => {
    // State to manage the visibility of modal
    const [isModalOpen, setModalOpen] = React.useState(false);

    // Function to open the modal
    const openModal = () => setModalOpen(true);

    // Function to close the modal
    const closeModal = () => setModalOpen(false);

    return (
        <div className="home">
            {/* Rendering Header component */}
            <Header />

            {/* Main content area */}
            <main>
                <h1>Welcome to Our Website!</h1>
                <p>This is the home page where you can find various resources.</p>
                <button onClick={openModal}>Open Modal</button>
                {/* Conditional rendering for modal */}
                {isModalOpen && (
                    <div className="modal">
                        <h2>Modal Title</h2>
                        <p>This is a modal popup.</p>
                        <button onClick={closeModal}>Close</button>
                    </div>
                )}
            </main>

            {/* Rendering Footer component */}
            <Footer />
        </div>
    );
};

// Exporting Home component for use in other parts of the application
export default Home;