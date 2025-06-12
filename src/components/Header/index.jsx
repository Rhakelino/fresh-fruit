import React, { useState } from 'react';
import SearchMenu from '../SearchMenu';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Scroll function to navigate to sections
    const scrollToSection = (sectionId) => {
        // Close mobile menu if open
        if (mobileMenuOpen) {
            setMobileMenuOpen(false);
        }
        
        // Get the section element
        const section = document.getElementById(sectionId);
        
        if (section) {
            // Calculate header height to offset scroll position
            const headerHeight = document.querySelector('header').offsetHeight;
            
            // Scroll to section with smooth behavior and offset
            window.scrollTo({
                top: section.offsetTop - headerHeight,
                behavior: 'smooth'
            });
        }
    };

    return (
        <header className="shadow-sm sticky top-0 z-50 bg-white">
            {/* Main Header */}
            <div className="bg-white py-4">
                <div className="container mx-auto px-4">
                    {/* Mobile Layout */}
                    <div className="flex items-center justify-between md:hidden">
                        <div className="flex-shrink-0">
                            <img 
                                src="/images/logo.png" 
                                alt="Fresh Fruit Logo" 
                                className="h-14 w-auto" 
                                onClick={() => scrollToSection('home')}
                                style={{ cursor: 'pointer' }}
                            />
                        </div>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-gray-600 hover:text-green-600 focus:outline-none"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden md:p-0 md:-my-10 md:flex md:items-center md:justify-between">
                        <div 
                            className="flex-shrink-0 mr-6 cursor-pointer" 
                            onClick={() => scrollToSection('home')}
                        >
                            <img src="/images/logo.png" alt="Fresh Fruit Logo" className="w-40 h-40" />
                        </div>
                        <div className="flex-grow max-w-2xl">
                            <SearchMenu />
                        </div>

                        <div className="flex-shrink-0 w-32"></div>
                    </div>

                    {/* Mobile Search - Below Logo */}
                    <div className="mt-4 md:hidden">
                        <SearchMenu isMobile={true} />
                    </div>
                </div>
            </div>

            {/* Navigation Bar */}
            <div className="bg-gray-200">
                {/* Desktop Navigation */}
                <div className="hidden md:block container mx-auto px-4">
                    <nav className="flex space-x-10 py-3">
                        <button 
                            onClick={() => scrollToSection('home')}
                            className="text-green-600 hover:text-green-700 font-medium"
                        >
                            Home
                        </button>
                        <button 
                            onClick={() => scrollToSection('about')}
                            className="text-gray-700 hover:text-green-600 font-medium"
                        >
                            About
                        </button>
                        <button 
                            onClick={() => scrollToSection('shop')}
                            className="text-gray-700 hover:text-green-600 font-medium"
                        >
                            Shop
                        </button>
                        <button 
                            onClick={() => scrollToSection('products')}
                            className="text-gray-700 hover:text-green-600 font-medium"
                        >
                            Products
                        </button>
                        <button 
                            onClick={() => scrollToSection('contact')}
                            className="text-gray-700 hover:text-green-600 font-medium"
                        >
                            Contact
                        </button>
                    </nav>
                </div>

                {/* Mobile Navigation */}
                <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
                    <nav className="flex flex-col py-2">
                        <button 
                            onClick={() => scrollToSection('home')}
                            className="text-left text-green-600 hover:text-green-700 font-medium py-3 px-4 border-b border-gray-300"
                        >
                            Home
                        </button>
                        <button 
                            onClick={() => scrollToSection('about')}
                            className="text-left text-gray-700 hover:text-green-600 font-medium py-3 px-4 border-b border-gray-300"
                        >
                            About
                        </button>
                        <button 
                            onClick={() => scrollToSection('shop')}
                            className="text-left text-gray-700 hover:text-green-600 font-medium py-3 px-4 border-b border-gray-300"
                        >
                            Shop
                        </button>
                        <button 
                            onClick={() => scrollToSection('products')}
                            className="text-left text-gray-700 hover:text-green-600 font-medium py-3 px-4 border-b border-gray-300"
                        >
                            Products
                        </button>
                        <button 
                            onClick={() => scrollToSection('contact')}
                            className="text-left text-gray-700 hover:text-green-600 font-medium py-3 px-4"
                        >
                            Contact
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;