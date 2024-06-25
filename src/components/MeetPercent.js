import React from "react";
import { ArrowRight } from 'react-bootstrap-icons';

const MeetPercent = () => {
    return (
        <div className="container mx-auto pt-10 pb-10 px-4">
            <div className="grid grid-cols-1 mb-10 mt-10">
                <div className="text-3xl md:text-5xl font-bold text-center mb-4">
                    Teams large and small rely on Slack
                </div>
                <div className="text-base md:text-lg text-center">
                    Slack securely scales up to support collaboration at the world’s biggest companies.
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
                    <a className="text-center">
                        <span className="bg-fuchsia-900 hover:bg-fuchsia-950 duration-100 text-white py-3 px-8 md:py-5 md:px-11 rounded uppercase font-bold text-sm md:text-base">
                            Meet Slack for Enterprise
                        </span>
                    </a>
                    <a className="text-center">
                        <span className="bg-transparent text-fuchsia-900 hover:bg-fuchsia-950 duration-100 py-3 px-8 md:py-5 md:px-11 border-2 border-fuchsia-900 rounded uppercase font-bold text-sm md:text-base hover:text-white">
                            Talk to Sales
                        </span>
                    </a>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center items-center pt-10 gap-8 md:gap-0">
                <div className="max-w-48 text-center">
                    <p>
                        <span className="text-4xl md:text-6xl font-bold text-fuchsia-900">85%</span>
                    </p>
                    <p className="text-base md:text-lg">of users say Slack has improved communication*</p>
                </div>
                <div className="max-w-48 text-center">
                    <p>
                        <span className="text-4xl md:text-6xl font-bold text-fuchsia-900">86%</span>
                    </p>
                    <p className="text-base md:text-lg">feel their ability to work remotely has improved*</p>
                </div>
                <div className="max-w-48 text-center">
                    <p>
                        <span className="text-4xl md:text-6xl font-bold text-fuchsia-900">88%</span>
                    </p>
                    <p className="text-base md:text-lg">feel more connected to their teams*</p>
                </div>
            </div>
            {/* <div className="relative mt-10 flex justify-center">
                <img src="/images/emoji-handshake.png" className="emoji-images" alt="Handshake Emoji" />
                <img src="/images/emoji-lock.png" className="emoji-images" alt="Lock Emoji" />
                <img src="/images/emoji-office.png" className="emoji-images" alt="Office Emoji" />
                <img src="/images/emoji-skyline.png" className="emoji-images" alt="Skyline Emoji" />
                <img src="/images/emoji-woman.png" className="emoji-images" alt="Woman Emoji" />
                <img src="/images/emoji-chart.png" className="emoji-images" alt="Chart Emoji" />
            </div> */}
        </div>
    )
}

export default MeetPercent;
