import { React, useState } from "react";
import Modal from "../Modal";
import { Linkedin, Instagram, Facebook, TwitterX, Youtube, Tiktok, CloudArrowDown } from "react-bootstrap-icons";

// ! explanation: хэрэггүй олон мөр сод бичхийн оронд map ашишлана.
// {
//     test.map((value, index) => {
//         return (
//             <li className="mb-4" key={index}>
//                 <a href="_" class="hover:text-cyan-900">{value}</a>
//             </li>
//         )
//     })
// }

function Footer() {
    const test = ['test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7', 'test8', 'test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7', 'test8',]

    return (
        <footer class="bg-white dark:bg-gray-900">
            <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="py-12 border-b flex justify-between">
                    <Modal />
                    <ul className="flex text-lg">
                        <li><a><Linkedin /></a></li>
                        <li className="pl-6"><a><Instagram /></a></li>
                        <li className="pl-6"><a><Facebook /></a></li>
                        <li className="pl-6"><a><TwitterX /></a></li>
                        <li className="pl-6"><a><Youtube /></a></li>
                        <li className="pl-6"><a><Tiktok /></a></li>
                    </ul>
                </div>
                <div class="mt-10 grid grid-cols-6">
                    <div class="mb-6 md:mb-0">
                        <a href="/" class="flex items-center">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" class="h-14 me-3" />
                        </a>
                    </div>
                    <div className="col-span-5 flex justify-between">
                        <div>
                            <h2 class="mb-6 text-sm font-bold text-gray-900 uppercase">Product</h2>
                            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                {
                                    test.map((value, index) => {
                                        return (
                                            <li className="mb-4" key={index}>
                                                <a href="_" class="hover:text-cyan-900">{value}</a>
                                            </li>
                                        )
                                    })
                                }

                                {/* <li class="mb-4">
                                    <a href="" class="hover:text-cyan-900">Watch Demo</a>
                                </li>
                                <li class="mb-4">
                                    <a href="" class="hover:text-cyan-900">Paid vs. Free</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">Accessibility</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">Featured Releases</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">ChangeLog</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">Status</a>
                                </li>
                                <h2 class="mb-6 text-sm font-bold text-gray-900 uppercase mt-10">
                                    <a href="" class="hover:text-cyan-900">Why Slack?</a>
                                </h2>
                                <li class="mb-4">
                                    <a href="" class="hover:text-cyan-900">Slack vs. Email</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">Enterprise</a>
                                </li>
                                <li class="mb-4">
                                    <a href="" class="hover:text-cyan-900">Small Business</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">Productivity</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">Task Management</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">Scale</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">Trust</a>
                                </li> */}
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-bold text-gray-900 uppercase">Features</h2>
                            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                <li class="mb-4">
                                    <a href="" class="hover:text-cyan-900">Channels</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">Slack Connect</a>
                                </li>
                                <li class="mb-4">
                                    <a href="" class="hover:text-cyan-900">Workflow Builder</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">Messaging</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">Huddles</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">Canvas</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">Lists</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">Clips</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">Search</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">Apps & Integrations</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">File Sharing</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">Slack AI</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">Security</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">Enterprise Key <br></br>Management</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">Slack Atlas</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-bold text-gray-900 uppercase">Solutions</h2>
                            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                <li class="mb-4">
                                    <a href="" class="hover:text-cyan-900">Engineering</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">IT</a>
                                </li>
                                <li class="mb-4">
                                    <a href="" class="hover:text-cyan-900">Customer Service</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">Sales</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">Project Management</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">Marketing</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">Security</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">Technology</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">Media</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">Financial Services</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">Retail</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">Public Sector</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">Education</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">Health & Life Sciences</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">See all solutions</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-bold text-gray-900 uppercase">Resources</h2>
                            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                <li class="mb-4">
                                    <a href="" class="hover:text-cyan-900">Help Center</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">What's New</a>
                                </li>
                                <li class="mb-4">
                                    <a href="" class="hover:text-cyan-900">Resources Library</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">Slack Blog</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">Community</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">Customer Stories</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">Events</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">Developers</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">Partners</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">Partners Offers</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">App Directory</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">Slack Certified</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 text-sm font-bold text-gray-900 uppercase">Company</h2>
                            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                <li class="mb-4">
                                    <a href="" class="hover:text-cyan-900">About Us</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">News</a>
                                </li>
                                <li class="mb-4">
                                    <a href="" class="hover:text-cyan-900">Media Kit</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">Brand Center</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">Careers</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">Swag Store</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">Engineering Blog</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">Design Blog</a>
                                </li>
                                <li className="mb-4">
                                    <a href="" class="hover:text-cyan-900">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div class="grid grid-cols-2 gap-10">
                    <div class="flex">
                        <a href="#" class="text-cyan-700 font-bold flex hover:underline">
                            <span className="text-sm">Download Slack</span> <CloudArrowDown className="ml-1 text-xl" />
                        </a>
                        <a href="#" class="text-gray-500 hover:text-cyan-700 text-sm ml-3">
                            <span>Privacy</span>
                        </a>
                        <a href="#" class="text-gray-500 hover:text-cyan-700 text-sm ml-3">
                            <span>Terms</span>
                        </a>
                        <a href="#" class="text-gray-500 hover:text-cyan-700 text-sm ml-3">
                            <span>Cookie Preferences</span>
                        </a>
                        <a href="#" class="text-gray-500 hover:text-cyan-700 flex text-sm ml-3">
                            <span>Your Privacy Choices</span>
                        </a>
                    </div>
                    <div className="text-right">
                        <span class="font-semibold text-sm text-gray-500 sm:text-center dark:text-gray-400">©2024 Slack Technologies, LLC, a Salesforce company. All rights reserved. Various trademarks held by their respective owners.
                        </span>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;