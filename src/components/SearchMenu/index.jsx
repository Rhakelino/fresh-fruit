import React, { useState, useRef, useEffect } from 'react';

const SearchMenu = ({ isMobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);
  
  return (
    <div className={`flex w-full ${isMobile ? 'flex-col' : 'flex-row'}`}>
      {/* Categories Dropdown */}
      <div className={`relative ${isMobile ? 'w-full mb-2' : ''}`} ref={dropdownRef}>
        <button 
          className={`flex items-center justify-between bg-[#559416] text-white px-5 py-3 font-medium focus:outline-none h-12 ${isMobile ? 'w-full' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-base uppercase">ALL CATEGORIES</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {/* Dropdown content */}
        {isOpen && (
          <div className={`absolute z-10 mt-1 bg-white border border-gray-200 shadow-lg ${isMobile ? 'w-full' : 'w-full'}`}>
            <ul className="py-1">
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Fruits</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Vegetables</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Meat</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Poultry</a></li>
            </ul>
          </div>
        )}
      </div>
      
      {/* Search Input */}
      <div className={`relative ${isMobile ? 'w-full' : 'flex-1'}`}>
        <input 
          type="text" 
          placeholder="Search Products..." 
          className="w-full h-12 px-4 border border-gray-300 focus:outline-none text-base" 
        />
        <button className="absolute right-0 top-0 h-full bg-[#559416] text-white px-5">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchMenu;