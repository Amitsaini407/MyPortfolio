import React from 'react';
import pic1 from '../../public/amitimg.jpeg';

import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped, Typed } from "react-typed";

function Home() {
    return (
        <>
            
            <div 
            name="Home"
            className='max-w-screen-2xl container  mx-auto px-4 md:px-20 my-20'>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                        <span className='text-xl'>Welcome In My Feed </span>
                        <div className='flex space-x-1 text-2xl md:text-4xl'>
                            <h1>Hello, I'm a</h1>
                            {/* <span className='text-red-700 font-bold'>Developer</span> */}
                            <ReactTyped
                                // typedRef={setTyped}
                                className='text-red-700 font-bold'
                                strings={["Developer", "Programmer", "Coder"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            />
                        </div>
                        <br />
                        <p className='text-sm md:text-md text-justify'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Sunt sit soluta libero error. Ea placeat enim omnis aperiam
                            autem sapiente commodi provident delectus minus? Mollitia eos
                            pariatur sequi eaque ipsum?Lorem ipsum dolor sit amet consectetur.
                            Sunt sit soluta libero error. Ea placeat enim omnis aperiam
                            autem sapiente commodi provident delectus minus? Mollitia eos
                            pariatur sequi eaque ipsum?

                        </p>

                        <br />
                        {/* social media icons */}
                        <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
                            <div className='space-y-2 '>
                                <h1 className='font-bold'>Available On</h1>
                                <ul className='flex gap-3'>
                                    <li>
                                        <a href="https://www.facebook.com/" target='_blank'>
                                            <FaFacebook className=' text-2xl cursor-pointer' />
                                        </a>
                                    </li>

                                    <li>
                                        <a href="https://www.linkedin.com/" target='_blank'>
                                            <FaLinkedin className=' text-2xl cursor-pointer' />
                                        </a>
                                    </li>
                                    <li>
                                    <a href="https://www.youtube.com/" target='_blank'>
                                        <FaYoutube className='  text-2xl cursor-pointer' />
                                     </a>
                                    </li>
                                    <li>
                                    <a href="https://t.me/" target='_blank'>
                                        <FaTelegram className=' text-2xl cursor-pointer' />
                                     </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='space-y-2 '>
                                <h1 className='font-bold'>Currently Working On</h1>
                                <div className='flex gap-6'>
                                    <SiExpress className='text-xl md:text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]' />
                                    <FaReact className=' text-xl md:text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]' />
                                    <FaNodeJs className=' text-xl md:text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]' />
                                    <SiMongodb className=' text-xl md:text-2xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2 md:ml-48 md:mt-14 mt-8 hover:scale-110 duration-500 order-1 cursor-pointer'>
                        <img src={pic1} alt="" className='rounded-full md:w-[450px] md:h-[450px] object-cover object-bottom  ' />
                    </div>
                </div>

            </div>

            <hr/>
        </>
    )
}

export default Home