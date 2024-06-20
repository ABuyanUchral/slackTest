import React from "react";
import { ArrowRight } from 'react-bootstrap-icons';


const MeetPercent = ({ }) => {
    return (
        <div className="container pt-10 pb-10">
            <div className="grid grid-cols-1 mb-10 mt-10">
                <div className="text-5xl font-bold text-center mb-4">Teams large and small rely on Slack</div>
                <div className="text-lg text-center">Slack securely scales up to support collaboration at the world’s biggest companies.</div>
                <div className="flex item-center justify-center gap-2">
                    <a className="text-5xl text-center mt-8"><span class="bg-fuchsia-900 hover:bg-fuchsia-950 duration-100 text-white py-5 px-11 rounded uppercase font-bold text-sm">Meet Slack for Enterprise</span></a>
                    <a className="text-5xl text-center mt-8"><span class="bg-fuchsia-900 bg-transparent text-fuchsia-900 hover:bg-fuchsia-950 duration-100 py-5 px-11 border-2 border-fuchsia-900  rounded uppercase font-bold text-sm hover:text-white">Talk to Sales</span></a>
                </div>
            </div>
            <div className="grid grid-cols-3 justify-items-center items-center pt-10 gap-0">
                <div className="max-w-48">
                    <p><span className="text-6xl font-bold text-fuchsia-900">85%</span></p>
                    <p>of users say Slack has improved communication*</p>
                </div>
                <div className="max-w-48">
                    <p><span className="text-6xl font-bold text-fuchsia-900">86%</span></p>
                    <p>feel their ability to work remotely has improved*</p>
                </div>
                <div className="max-w-48">
                    <p><span className="text-6xl font-bold text-fuchsia-900">88%</span></p>
                    <p>feel more connected to their teams*</p>
                </div>
            </div>
            <div className="emoji">
                <img src="/images/emoji-handshake.png" className="absolute emoji-images"></img>
                <img src="/images/emoji-lock.png" className="absolute emoji-images"></img>
                <img src="/images/emoji-office.png" className="absolute emoji-images"></img>
                <img src="/images/emoji-skyline.png" className="absolute emoji-images"></img>
                <img src="/images/emoji-woman.png" className="absolute emoji-images"></img>
                <img src="/images/emoji-chart.png" className="absolute emoji-images"></img>
            </div>
        </div>
    )
}

export default MeetPercent;