'use client'
import React from "react";
import { MenuIcon, XIcon } from '@heroicons/react/outline'; // Import the XIcon for the close menu state
import HeaderMenu from "./HeaderMenu";

// Custom hook to handle menu state
function useMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) =>!prev);
  };

  return { isOpen, toggleMenu };
}

function Header() {

  const { isOpen, toggleMenu } = useMenu();

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
              {isOpen? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
          <div className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li><a href="#" className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white" aria-current="page">Home</a></li>
                <li className="relative group">
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 group-hover:bg-gray-100 group-hover:text-purple-700">About School</a>
                <ul className="absolute left-0 hidden w-48 mt-2 bg-white border border-gray-200 rounded shadow-lg dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700 group-hover:block">
                    <li><a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">Submenu Item 1</a></li>
                    <li><a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">Submenu Item 2</a></li>
                    <li><a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">Submenu Item 3</a></li>
                </ul>
                </li>
            </ul>
</div>




        </div>
      </nav>
    </header>
  );
}

export default Header;