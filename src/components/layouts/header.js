import React, { useState } from "react";
import { Search, Star } from "react-bootstrap-icons";

function Header() {
    const [menu, setMenuOpen] = useState(false);
    const [dropdowns, setDropdowns] = useState({
        features: false,
        solutions: false,
        resources: false,
    });

    const handleMobileMenuToggle = () => {
        setMenuOpen(!menu);
    };

    const toggleDropdown = (key) => {
        setDropdowns({
            ...dropdowns,
            [key]: !dropdowns[key],
        });
    };

    const productLinks = ["Channels", "Slack Connect", "Messaging", "Huddles", "Clips"];
    const autoMation = ["Workflow Builder", "App & Integrations"];
    const knowledge = ["Search", "Canvas", "File Sharing", "Lists"];
    const intelligence = [<Star />, "Slack AI"];
    const enterprise = ["Security", "Enterprise Key Management", "Slack Atlas"];

    const renderLinks = (links) => (
        links.map((value, index) => (
            <li className="mb-4" key={index}>
                <a href="#" className="hover:text-cyan-900 hover:underline text-sm font-semibold">{value}</a>
            </li>
        ))
    );

    return (
        <header>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 pb-8 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl header-border">
                    <a href="/" className="flex items-center">
                        <img src="/images/logo.png" className="mr-3 h-6 sm:h-9" alt="Slack Logo" />
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
                    <div className={`${menu ? 'mobile-menu open' : 'mobile-menu'} fixed top-0 right-0 bottom-0 bg-white dark:bg-gray-800 w-64 p-4 overflow-y-auto transition-transform transform ${menu ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
                        <a href="/" className="flex items-center mb-4">
                            <img src="/images/logo.png" className="ml-3 h-10 sm:h-9" alt="Slack Logo" />
                        </a>
                        <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0 font-bold">
                            <li className="relative">
                                <a
                                    href="#"
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                    onClick={() => toggleDropdown('features')}
                                >
                                    Features
                                </a>
                                {dropdowns.features && (
                                    <div className="absolute mt-2 bg-white rounded-md shadow-lg dark:bg-gray-700 p-4 min-w-96">
                                        <h3 className="text-uppercase font-semibold mb-4">Collaboration</h3>
                                        <ul>
                                            {renderLinks(productLinks)}
                                        </ul>
                                    </div>
                                )}
                            </li>
                            <li className="relative">
                                <a
                                    href="#"
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                    onClick={() => toggleDropdown('solutions')}
                                >
                                    Solutions
                                </a>
                                {dropdowns.solutions && (
                                    <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg dark:bg-gray-700">
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200">Solution 1</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200">Solution 2</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200">Solution 3</a>
                                    </div>
                                )}
                            </li>
                            <li>
                                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Enterprise</a>
                            </li>
                            <li className="relative">
                                <a
                                    href="#"
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                    onClick={() => toggleDropdown('resources')}
                                >
                                    Resources
                                </a>
                                {dropdowns.resources && (
                                    <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg dark:bg-gray-700">
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200">Resource 1</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200">Resource 2</a>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200">Resource 3</a>
                                    </div>
                                )}
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
