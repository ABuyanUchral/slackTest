import React from "react";

const Accom = () => {
    return (
        <div className="purple-bg py-10 md:py-20">
            <div className="container mx-auto text-center px-4">
                <h3 className="text-white mb-8 p-4 md:p-20 text-2xl md:text-5xl font-bold">
                    See all you can accomplish with Slack
                </h3>
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <a className="bg-white text-fuchsia-900 font-semibold border border-white rounded hover:border-fuchsia-900 border-2 transition duration-500 py-2 md:py-4 px-4 md:px-8 hover:rounded uppercase mb-4 md:mb-0 md:mr-2">
                        Get started
                    </a>
                    <a className="talk ml-0 md:ml-2 bg-transparent text-white font-semibold py-2 md:py-4 px-4 md:px-8 rounded uppercase">
                        Talk to sales
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Accom;
