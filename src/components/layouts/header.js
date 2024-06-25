import React, { useState } from "react";
import { Search } from "react-bootstrap-icons";


function Header() {
    const [menu, sedMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        sedMenuOpen(!menu);
    };

    return (
        <header>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 pb-8 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl header-border">
                    <a href="/" className="flex items-center">
                        <img src="/images/logo.png" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                    </a>
                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded={menu}
                        onClick={handleMobileMenuToggle}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="flex items-center lg:order-2 header-buttons">
                        <Search />
                        <a href="signin" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 font-bold">Sign in</a>
                        <a className="header-talk ml-2 bg-transparent text-white font-semibold py-2 px-4 rounded uppercase">Talk to sales</a>
                        <a className="ml-6 bg-fuchsia-900 hover:bg-fuchsia-950 duration-100 text-white py-2 px-4 rounded uppercase font-semibold">Get Started</a>
                    </div>
                    <div className={`${menu ? 'flex' : 'hidden'} justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}>
                        <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0 font-bold">
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Features</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Solutions</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:underline lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Enterprise</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Resources</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:underline lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
