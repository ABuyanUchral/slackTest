import React from "react";
import { ArrowRight } from 'react-bootstrap-icons';

const Quote = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center mt-10">
            <div>
                <video autoPlay loop muted className="rounded-r-full w-full" title="Video featuring a Slack customer">
                    <source src="https://a.slack-edge.com/1b4e2a3/marketing/img/homepage/true-prospects/customer-showcase/IBM_08.mp4" type="video/mp4"></source>
                </video>
            </div>
            <div>
                <h2 className="text-2xl md:text-3xl mb-4">
                    “Whether you’re a small or large organization, executing anything from a discrete modernization program to a digital transformation initiative, Slack is an incredibly powerful tool in the hybrid world.”
                </h2>
                <p className="font-bold">Jennifer Quinlan</p>
                <p className="mb-4 font-medium">
                    Managing Partner, IBM iX Americas Leader - Customer and Experience Transformation, IBM
                </p>
                <a className="flex items-center group text-cyan-500 transition-all duration-300 ease-in-out" href="https://slack.com/integrations">
                    <span className="bg-left-bottom bg-gradient-to-r from-cyan-500 to-cyan-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-1000 ease-out">
                        See more customer stories
                    </span>
                    <ArrowRight className="ml-1" />
                </a>
            </div>
            <div className="text-center col-span-1 md:col-span-2 text-slate-500 text-sm mt-6 md:mt-0">
                <p>* Weighted average. Based on 2,707 survey responses from weekly Slack users in the U.S., UK, Australia and Canada with a ± 2% margin of error at 95% CI (December 2021).</p>
            </div>
        </div>
    );
}

export default Quote;
