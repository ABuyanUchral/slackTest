import React from "react";

const GetStarted = () => {
    return (
        <div className="container mx-auto px-4 lg:px-36">
            <div className="grid grid-cols-1 mb-7 text-center">
                <div className="text-3xl lg:text-5xl font-bold mb-4">
                    Made for people. <span className="text-fuchsia-900">Built for productivity.</span>
                </div>
                <div className="mb-8">
                    <a className="bg-fuchsia-900 hover:bg-fuchsia-950 duration-100 text-white py-3 px-8 lg:py-5 lg:px-11 rounded uppercase font-bold text-sm inline-block" href="#">
                        Get Started
                    </a>
                </div>
                <div className="text-lg">
                    <span className="font-bold">Slack is free to try</span> for as long as you’d like
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 justify-items-center items-center mb-8 gap-4 lg:gap-0">
                <div><img src="/images/airbnb.png" alt="Airbnb" /></div>
                <div><img src="/images/nasa.png" alt="NASA" /></div>
                <div><img src="/images/uber.png" alt="Uber" /></div>
                <div><img src="/images/target.png" alt="Target" /></div>
                <div><img src="/images/nyt.png" alt="NYT" /></div>
                <div><img src="/images/etsy.png" alt="Etsy" /></div>
            </div>
            <div className="flex justify-center items-center mb-8">
                <video autoPlay loop muted className="w-full lg:w-3/4 rounded-lg">
                    <source src="https://a.slack-edge.com/49b2831/marketing/img/homepage/true-prospects/revamp-exp/animation/hero@2x.webm" type="video/webm" />
                    <source src="https://a.slack-edge.com/49b2831/marketing/img/homepage/true-prospects/revamp-exp/animation/hero@2x.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    );
}

export default GetStarted;
