import React from "react";
import { ArrowRight } from 'react-bootstrap-icons';

const Blog = ({ }) => {
    return (
        <div className="pink-bg mt-10">
            <div className="container">
                <div className="grid grid-cols-4 pt-12 pb-20 justify-items-center">
                    <div className="col-span-4 text-center text-3xl font-bold mb-12"><h2>Take a deeper dive into a new way to work</h2></div>
                    <div className="blog-block p-4 bg-white max-w-64 min-h-96">
                        <a>
                            <img src="/images/promo-card.png"></img>
                            <div className="pt-5">
                                <span className="text-sm">Event</span>
                                <h3 className="mt-1 text-2xl font-bold">Ready for the future of AI in Slack?</h3>
                                <span class="flex mt-10 items-center group text-cyan-500 transition-all duration-300 ease-in-out" href="https://slack.com/integrations">
                                    <span class="cyan-500">
                                        See more customer stories
                                    </span>
                                    <ArrowRight className="ml-1" />
                                </span>
                            </div>
                        </a>
                    </div>
                    <div className="blog-block p-4 bg-white max-w-64 min-h-96">
                        <a>
                            <img src="/images/promo-card.png"></img>
                            <div className="pt-5">
                                <span className="text-sm">Event</span>
                                <h3 className="mt-1 text-2xl font-bold">Ready for the future of AI in Slack?</h3>
                                <span class="flex mt-10 items-center group text-cyan-500 transition-all duration-300 ease-in-out" href="https://slack.com/integrations">
                                    <span class="cyan-500">
                                        See more customer stories
                                    </span>
                                    <ArrowRight className="ml-1" />
                                </span>
                            </div>
                        </a>
                    </div>
                    <div className="blog-block p-4 bg-white max-w-64 min-h-96">
                        <a>
                            <img src="/images/promo-card.png"></img>
                            <div className="pt-5">
                                <span className="text-sm">Event</span>
                                <h3 className="mt-1 text-2xl font-bold">Ready for the future of AI in Slack?</h3>
                                <span class="flex mt-10 items-center group text-cyan-500 transition-all duration-300 ease-in-out" href="https://slack.com/integrations">
                                    <span class="cyan-500">
                                        See more customer stories
                                    </span>
                                    <ArrowRight className="ml-1" />
                                </span>
                            </div>
                        </a>
                    </div>
                    <div className="blog-block p-4 bg-white max-w-64 min-h-96">
                        <a>
                            <img src="/images/promo-card.png"></img>
                            <div className="pt-5">
                                <span className="text-sm">Event</span>
                                <h3 className="mt-1 text-2xl font-bold">Ready for the future of AI in Slack?</h3>
                                <span class="flex mt-10 items-center group text-cyan-500 transition-all duration-300 ease-in-out" href="https://slack.com/integrations">
                                    <span class="cyan-500">
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