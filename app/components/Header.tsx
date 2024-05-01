'use client'; // Use strict mode
import React, { useRef, useEffect } from "react";
import { MenuIcon, XIcon, SearchIcon } from '@heroicons/react/outline'; // Import the SearchIcon
import Menu from "./Menu";

// Custom hook to handle menu and search state
function useMenu() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false); // Add search state

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const toggleSearch = () => {
    setIsSearchOpen(prev => !prev);
  };

  return { isOpen, toggleMenu, isSearchOpen, toggleSearch, setIsSearchOpen }; // Include setIsSearchOpen in return
}

function Header() {
  const { isOpen, toggleMenu, isSearchOpen, toggleSearch, setIsSearchOpen } = useMenu(); // Destructure setIsSearchOpen
  const searchRef = useRef(null);

  // Close search bar when clicking outside of it
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false); // Use setIsSearchOpen from useMenu hook
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside); // Listen for touch events

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [setIsSearchOpen]); // Include setIsSearchOpen in the dependency array

  return (
    <header className="fixed w-full">
      <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <a href="#" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">School Name</span>
          </a>
          <div className="flex items-center lg:order-2">
            <button onClick={toggleMenu} data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded={isOpen}>
              <span className="sr-only">Open main menu</span>
              {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
            {/* Search Icon and Search Bar */}
            <button onClick={toggleSearch} type="button" className="ml-4 lg:hidden text-gray-500 hover:text-gray-700 focus:outline-none">
              <SearchIcon className="w-6 h-6" />
            </button>
          </div>
          {/* Animated Search Bar */}
          <div className={`absolute top-0 right-0 h-full bg-white transition-all duration-300 ease-in-out ${isSearchOpen ? 'w-full' : 'w-0'} overflow-hidden`} onClick={(e) => e.stopPropagation()}>
            <input ref={searchRef} type="text" className={`border-b border-gray-300 focus:outline-none px-4 py-2 w-full ${isSearchOpen ? 'block' : 'hidden'}`} placeholder="Search..." />
          </div>
          <Menu isOpen={isOpen} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
