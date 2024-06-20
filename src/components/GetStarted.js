import React from "react";

const GetStarted = ({ }) => {
    return (
        <div className="container mx-auto lg:px-36">
            <div className="grid grid-cols-1 mb-7">
                <div className="text-5xl font-bold text-center mb-4">Made for people. <span className="text-fuchsia-900">Built for productivity.</span></div>
                <div className="text-5xl text-center mb-8"><a class="bg-fuchsia-900 hover:bg-fuchsia-950 duration-100 text-white py-5 px-11 rounded uppercase font-bold text-sm">Get Started</a></div>
                <div className="text-lg text-center"><span className="font-bold ">Slack is free to try</span> for as long as you’d like</div>
            </div>
            <div className="grid grid-cols-6 justify-items-center items-center mb-8">
                <div><img src="/images/airbnb.png"></img></div>
                <div><img src="/images/nasa.png"></img></div>
                <div><img src="/images/uber.png"></img></div>
                <div><img src="/images/target.png"></img></div>
                <div><img src="/images/nyt.png"></img></div>
                <div><img src="/images/etsy.png"></img></div>
            </div>
            <div className="grid grid-cols-1 flex justify-items-center items-center">
                <video autoplay loop muted width="70%" height="900" className="rounded-lg">
                    <source src="https://a.slack-edge.com/49b2831/marketing/img/homepage/true-prospects/revamp-exp/animation/hero@2x.webm" type="video/webm"></source>
                    <source src="https://a.slack-edge.com/49b2831/marketing/img/homepage/true-prospects/revamp-exp/animation/hero@2x.mp4" type="video/mp4"></source>
                </video>

            </div>
        </div>
    )
}

export default GetStarted;