import React from "react";
import { ArrowRight } from 'react-bootstrap-icons';

const Blog = () => {
    return (
        <div className="pink-bg mt-10">
            <div className="container mx-auto px-4 lg:px-36">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 pt-12 pb-20 justify-items-center">
                    <div className="col-span-1 lg:col-span-4 text-center text-2xl lg:text-3xl font-bold mb-12">
                        <h2>Take a deeper dive into a new way to work</h2>
                    </div>
                    <div className="blog-block p-4 bg-white w-full max-w-sm lg:max-w-64 min-h-96">
                        <a href="#">
                            <img src="/images/promo-card.png" className="w-full h-auto" alt="Promo" />
                            <div className="pt-5">
                                <span className="text-sm">Event</span>
                                <h3 className="mt-1 text-xl lg:text-2xl font-bold">Ready for the future of AI in Slack?</h3>
                                <span className="flex mt-10 items-center group text-cyan-500 transition-all duration-300 ease-in-out" href="https://slack.com/integrations">
                                    <span className="cyan-500">
                                        See more customer stories
                                    </span>
                                    <ArrowRight className="ml-1" />
                                </span>
                            </div>
                        </a>
                    </div>
                    <div className="blog-block p-4 bg-white w-full max-w-sm lg:max-w-64 min-h-96">
                        <a href="#">
                            <img src="/images/promo-card.png" className="w-full h-auto" alt="Promo" />
                            <div className="pt-5">
                                <span className="text-sm">Event</span>
                                <h3 className="mt-1 text-xl lg:text-2xl font-bold">Ready for the future of AI in Slack?</h3>
                                <span className="flex mt-10 items-center group text-cyan-500 transition-all duration-300 ease-in-out" href="https://slack.com/integrations">
                                    <span className="cyan-500">
                                        See more customer stories
                                    </span>
                                    <ArrowRight className="ml-1" />
                                </span>
                            </div>
                        </a>
                    </div>
                    <div className="blog-block p-4 bg-white w-full max-w-sm lg:max-w-64 min-h-96">
                        <a href="#">
                            <img src="/images/promo-card.png" className="w-full h-auto" alt="Promo" />
                            <div className="pt-5">
                                <span className="text-sm">Event</span>
                                <h3 className="mt-1 text-xl lg:text-2xl font-bold">Ready for the future of AI in Slack?</h3>
                                <span className="flex mt-10 items-center group text-cyan-500 transition-all duration-300 ease-in-out" href="https://slack.com/integrations">
                                    <span className="cyan-500">
                                        See more customer stories
                                    </span>
                                    <ArrowRight className="ml-1" />
                                </span>
                            </div>
                        </a>
                    </div>
                    <div className="blog-block p-4 bg-white w-full max-w-sm lg:max-w-64 min-h-96">
                        <a href="#">
                            <img src="/images/promo-card.png" className="w-full h-auto" alt="Promo" />
                            <div className="pt-5">
                                <span className="text-sm">Event</span>
                                <h3 className="mt-1 text-xl lg:text-2xl font-bold">Ready for the future of AI in Slack?</h3>
                                <span className="flex mt-10 items-center group text-cyan-500 transition-all duration-300 ease-in-out" href="https://slack.com/integrations">
                                    <span className="cyan-500">
                                        See more customer stories
                                    </span>
                                    <ArrowRight className="ml-1" />
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
