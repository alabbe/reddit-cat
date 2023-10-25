import React from "react";
import { NavLink } from "react-router-dom";

function Header({
    showBest,
    showHot,
    showNew,
    showTop 
}) {
    return (
        <div id='header' className='bg-teal-300 left-0 top-0 w-full h-[70px] fixed flex justify-start items-center'>
            <div className='grid grid-cols-6 px-2 w-full items-center'>
                <div className='col-span-4 lg:col-span-2 inline-flex items-center gap-3'>
                    <div className='rounded-full w-8 h-8 bg-teal-500 flex justify-center items-center overflow-clip'>
                        <img src='cat.png' className='w-7 h-7'></img>
                    </div>
                    <div>
                        <span className="text-pink-400 text-2xl lg:text-3xl font-semibold">Reddit</span>
                        <span className="text-fuchsia-600 text-2xl font-normal">/</span>
                        <span className="text-pink-400 text-base lg:text-2xl font-normal">cats</span>
                    </div>
                </div>
                <div id="categories" className="lg:col-span-2 bottom-2 fixed lg:static w-64 bg-teal-300 rounded-lg place-self-center">
                    <div className="grid grid-cols-4 justify-between h-full items-center px-2 py-1">
                        <div className="">
                            <NavLink to="/best" className={
                                ({ isActive }) => isActive ?
                                    "text-fuchsia-800 flex flex-col items-center rounded-lg" :
                                    "text-white hover:text-fuchsia-600 flex flex-col items-center rounded-lg"} onClick={showBest}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                </svg>
                                Best
                            </NavLink>
                        </div>
                        <div className="">
                            <NavLink to="/hot" className={
                                ({ isActive }) => isActive ?
                                    "text-fuchsia-800 flex flex-col items-center rounded-lg" :
                                    "text-white hover:text-fuchsia-600 flex flex-col items-center rounded-lg"} onClick={showHot}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clipRule="evenodd" />
                                </svg>
                                Hot
                            </NavLink>
                        </div>
                        <div className="">
                            <NavLink to="/new" className={
                                ({ isActive }) => isActive ?
                                    "text-fuchsia-800 flex flex-col items-center rounded-lg" :
                                    "text-white hover:text-fuchsia-600 flex flex-col items-center rounded-lg"} onClick={showNew}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>

                                New
                            </NavLink>
                        </div>
                        <div className="">
                            <NavLink to="/top" className={
                                ({ isActive }) => isActive ?
                                    "text-fuchsia-800 flex flex-col items-center rounded-lg" :
                                    "text-white hover:text-fuchsia-600 flex flex-col items-center rounded-lg"} onClick={showTop}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z" clipRule="evenodd" />
                                </svg>

                                Top
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className='col-span-2 justify-self-end'>
                    <button id="search" className='text-white hover:text-fuchsia-600 rounded-xl px-2 py-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 lg:w-8 lg:h-8">
                            <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;