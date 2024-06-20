import React from "react";
import { ArrowRight } from 'react-bootstrap-icons';

const LearnMore = ({ }) => {
    return (
        <div>
            <div className="learn-bg">
            </div>
            <div className="container mx-auto lg:px-36 mt-20 pink-bg">
                <div className="grid grid-cols-2 gap-14 items-center">
                    <div>
                        <video autoplay loop muted>
                            <source src="https://a.slack-edge.com/7460822/marketing/img/homepage/e2e-prospects/inline/animations/mp4/speed.mp4" type="video/mp4"></source>
                        </video>
                    </div>
                    <div>
                        <h2 className="text-5xl font-bold mb-4">Move faster with your tools in one place</h2>
                        <p className="mb-4 font-medium">Automate away routine tasks with the power of generative AI and simplify your workflow with all your favorite apps ready to go in Slack.</p>
                        <a class="flex flex items-center group text-cyan-500 transition-all duration-300 ease-in-out" href="https://slack.com/integrations">
                            <span class="bg-left-bottom bg-gradient-to-r from-cyan-500 to-cyan-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-1000 ease-out">
                                Learn more about the Slack platform
                            </span>
                            <ArrowRight className="ml-1" />
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-14 items-center mt-10">
                    <div>
                        <h2 className="text-5xl font-bold mb-4">Choose how you want to work</h2>
                        <p className="mb-4 font-medium">In Slack, you’ve got all the flexibility to work when, where and how it’s best for you. You can easily chat, send audio and video clips, or hop on a huddle to talk things out live.</p>
                        <a class="flex flex items-center group text-cyan-500 transition-all duration-300 ease-in-out" href="https://slack.com/integrations">
                            <span class="bg-left-bottom bg-gradient-to-r from-cyan-500 to-cyan-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-1000 ease-out">
                                Learn more about flexible communication
                            </span>
                            <ArrowRight className="ml-1" />
                        </a>
                    </div>
                    <div>
                        <video autoplay loop muted>
                            <source src="https://a.slack-edge.com/b211f31/marketing/img/homepage/true-prospects/animations/mp4/ia4-flexibility.mp4" type="video/mp4"></source>
                        </video>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-14 items-center mt-10 pb-10">
                    <div>
                        <video autoplay loop muted>
                            <source src="https://a.slack-edge.com/9436a9f/marketing/img/homepage/e2e-prospects/animations/mp4/connectedness.mp4" type="video/mp4"></source>
                        </video>
                    </div>
                    <div>
                        <h2 className="text-5xl font-bold mb-4">Bring your team together</h2>
                        <p className="mb-4 font-medium">At the heart of Slack are channels: organized spaces for everyone and everything you need for work. In channels, it’s easier to connect across departments, offices, time zones and even other companies.</p>
                        <a class="flex flex items-center group text-cyan-500 transition-all duration-300 ease-in-out" href="https://slack.com/integrations">
                            <span class="bg-left-bottom bg-gradient-to-r from-cyan-500 to-cyan-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-1000 ease-out">
                                Learn more about channels
                            </span>
                            <ArrowRight className="ml-1" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default LearnMore;