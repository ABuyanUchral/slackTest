import React from 'react'
import { Stars } from 'react-bootstrap-icons'
import Modal from '../components/Modal'

function SignIn() {
  return (
    <div className="flex flex-col items-center min-h-full">
      <div className="pt-10 pb-10 grid grid-cols-3 w-full">
        <div className='grid grid-cols-subgrid col-span-2 justify-items-center'>
          <a href="/" className='col-start-2'>
            <img src="https://a.slack-edge.com/bv1-13/slack_logo-ebd02d1.svg" className='h-6'></img>
          </a>
        </div>
        <div className="justify-self-end pr-10 text-sm text-right">
          <p className='text-slate-400'>New to Slack?</p>
          <a href='#' className='font-semibold text-cyan-700 hover:underline'>Create an account</a>
        </div>
      </div>
      <div className='text-center mb-8'>
        <h1 className='text-5xl font-bold tracking-tight mb-2.5'>Sign in to Slack</h1>
        <p className='text-slate-500 text-lg'>We suggest using the <span className='text-black semi-bold'>email address you use at work.</span></p>
      </div>
      <div>
        <div class="px-6 sm:px-0 max-w-full w-96 ">
          <button type="button" class="text-black w-full outline outline-2 outline-gray-400 h-11 bg-white hover:shadow-md font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center justify-center mr-2 mb-2 "><svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign In With Google<div></div></button>
          <button type="button" class=" mt-4 text-black w-full outline outline-2 outline-gray-400 h-11 bg-white hover:shadow-md font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center justify-center mr-2 mb-2 "><svg class="mr-2 -ml-1 w-5 h-5" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>Sign In With Apple<div></div></button>
        </div>
      </div>
      <div className='mt-6 mb-6'>
        <div className='grid grid-cols-3 items-center text-center'>
          <hr className='border-t-2 w-32'></hr>
          <div className=""><p>OR</p></div>
          <hr className='border-t-2 w-32'></hr>
        </div>
      </div>
      <div className='w-96 mb-6'>
        <input type="email" id="email" class="text-lg bg-gray-50 border border-gray-300 text-gray-900 rounded  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="name@work-email.com" required />
      </div>
      <div className='w-96 mb-6'>
        <button type="button" class="w-full text-white bg-fuchsia-950 font-semibold rounded-lg text-lg px-5 py-2 text-center items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
          <p>Sign In With Email</p>
        </button>
      </div>
      <div className='w-96 flex text-slate-500 font-semibold bg-slate-100 px-6 py-3 rounded-md mb-5'>
        <Stars className='text-xl' /><p className='pl-3'>We’ll email you a magic code for a password-free sign in. Or you can <a href='#' className='text-cyan-700 hover:underline'>sign in manually instead.</a></p>
      </div>
      <div className='py-6'>
        <a href='#' className='text-slate-500 hover:underline mr-4'>Privacy & Terms</a>
        <a href='#' className='text-slate-500 hover:underline mr-4'>Contact Us</a>
        <Modal />
      </div>
    </div>
  )
}

export default SignIn