import React from "react";
import { Globe2 } from 'react-bootstrap-icons';
// onClick={() => setShowModal(false)}
export default function Modal() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <button
                className="text-black text-md"
                type="button"
                onClick={() => setShowModal(true)}
            >
                <p className="flex items-center"> <Globe2 /> <span className="ml-1 font-bold">Change Region</span></p>
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl text-black">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div class="flex items-center justify-between p-4 md:p-5">
                                    <h3>
                                        <span className="font-bold">Change Region</span>
                                        <p className="text-base">Selecting a different region will change the language and content of slack.com.</p>
                                    </h3>

                                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal" onClick={() => setShowModal(false)}>
                                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                        <span class="sr-only">Close modal</span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="p-6 grid grid-cols-3">
                                    <div>
                                        <h4 className="font-bold mb-4">Americas</h4>
                                        <p className="mb-6 text-base"> <a href="">Latinoamérica (español)</a></p>
                                        <p className="mb-6 text-base"> <a href="">Latinoamérica (español)</a></p>
                                        <p className="mb-6 text-base"> <a href="">Latinoamérica (español)</a></p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-4">Americas</h4>
                                        <p className="mb-6 text-base"> <a href="">Latinoamérica (español)</a></p>
                                        <p className="mb-6 text-base"> <a href="">Latinoamérica (español)</a></p>
                                        <p className="mb-6 text-base"> <a href="">Latinoamérica (español)</a></p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-4">Americas</h4>
                                        <p className="mb-6 text-base"> <a href="">Latinoamérica (español)</a></p>
                                        <p className="mb-6 text-base"> <a href="">Latinoamérica (español)</a></p>
                                        <p className="mb-6 text-base"> <a href="">Latinoamérica (español)</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>

    );
}