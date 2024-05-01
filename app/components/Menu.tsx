'use client'; // Use strict mode

import React from 'react';

function Menu({ isOpen }) {
    return (
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
    );
}

export default Menu;
