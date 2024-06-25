
import React from "react";
import Modal from "../Modal";
import { Linkedin, Instagram, Facebook, TwitterX, Youtube, Tiktok, CloudArrowDown } from "react-bootstrap-icons";

function Footer() {
    const productLinks = [
        "Watch Demo",
        "Paid vs. Free",
        "Accessibility",
        "Featured Releases",
        "ChangeLog",
        "Status",
        "Slack vs. Email",
        "Enterprise",
        "Small Business",
        "Productivity",
        "Task Management",
        "Scale",
        "Trust"
    ];
    const featureLinks = [
        'Channels', 'Slack Connect', 'Workflow Builder', 'Messaging', 'Huddles', 'Canvas', 'Lists', 'Clips', 'Search', 'Apps & Integrations', 'File Sharing', 'Slack AI', 'Security', 'Enterprise Key Management', 'Slack Atlas'
    ];
    const solutionLinks = [
        'Engineering', 'IT', 'Customer Service', 'Sales', 'Project Management', 'Marketing', 'Security', 'Technology', 'Media', 'Financial Services', 'Retail', 'Public Sector', 'Education', 'Health & Life Sciences', 'See all solutions'
    ];
    const resourceLinks = [
        'Help Center', "What's New", 'Resources Library', 'Slack Blog', 'Community', 'Customer Stories', 'Events', 'Developers', 'Partners', 'Partners Offers', 'App Directory', 'Slack Certified'
    ];
    const companyLinks = [
        'About Us', 'News', 'Media Kit', 'Brand Center', 'Careers', 'Swag Store', 'Engineering Blog', 'Design Blog', 'Contact Us'
    ];

    const renderLinks = (links) => (
        links.map((value, index) => (
            <li className="mb-4" key={index}>
                <a href="#" className="hover:text-cyan-900">{value}</a>
            </li>
        ))
    );

    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="container mx-auto max-w-screen-xl px-4 py-6 lg:py-8">
                <div className="py-6 border-b flex flex-col md:flex-row justify-between items-center">
                    <Modal />
                    <ul className="flex text-lg mt-4 md:mt-0">
                        <li><a href="#"><Linkedin /></a></li>
                        <li className="pl-6"><a href="#"><Instagram /></a></li>
                        <li className="pl-6"><a href="#"><Facebook /></a></li>
                        <li className="pl-6"><a href="#"><TwitterX /></a></li>
                        <li className="pl-6"><a href="#"><Youtube /></a></li>
                        <li className="pl-6"><a href="#"><Tiktok /></a></li>
                    </ul>
                </div>
                <div className="mt-10 grid grid-cols-2 md:grid-cols-6 gap-8">
                    <div className="mb-6 md:mb-0 col-span-2 md:col-span-1">
                        <a href="/" className="flex items-center justify-center md:justify-start">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" className="h-14" alt="Slack Logo" />
                        </a>
                    </div>
                    <div className="col-span-2 md:col-span-5 flex flex-col md:flex-row justify-between">
                        <div>
                            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase">Product</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                {renderLinks(productLinks)}
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase">Features</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                {renderLinks(featureLinks)}
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase">Solutions</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                {renderLinks(solutionLinks)}
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                {renderLinks(resourceLinks)}
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase">Company</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                {renderLinks(companyLinks)}
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 dark:border-gray-700 lg:my-8" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="flex flex-wrap md:justify-start items-baseline">
                        <a href="#" className="text-cyan-700 font-bold flex items-center hover:underline">
                            <span className="text-sm">Download Slack</span> <CloudArrowDown className="ml-1 text-xl" />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-cyan-700 text-sm ml-3">
                            <span>Privacy</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-cyan-700 text-sm ml-3">
                            <span>Terms</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-cyan-700 text-sm ml-3">
                            <span>Cookie Preferences</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-cyan-700 text-sm ml-3">
                            <span>Your Privacy Choices</span>
                        </a>
                    </div>
                    <div className="text-center md:text-right">
                        <span className="font-semibold text-sm text-gray-500 dark:text-gray-400">
                            ©2024 Slack Technologies, LLC, a Salesforce company. All rights reserved. Various trademarks held by their respective owners.
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
