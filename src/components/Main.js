import React, { useEffect, useState } from 'react';
// get api endpoints  here
import requests from '../Requests';
import Navbar from './Navbar';
import Row from './Row';
const Main = () => {


    return (
        <div>
                <div className="bg-black sm:h-[550px] relative">
                    <div className="  bg-gradient-to-r from-black"></div>
                    <img
                        src="https://c4.wallpaperflare.com/wallpaper/136/128/878/stranger-things-bicycle-tv-netflix-wallpaper-preview.jpg"
                        alt=""
                        className="w-full  object-cover rounded-md "
                        ></img>
                    <div class="absolute bottom-0 start-0 px-4 py-3 bg-gray-500/50 w-full">
                        <h1 class="text-white font-semibold text-5xl">
                            {' '}
                            Kittens are cute{' '}
                        </h1>
                        <p class="text-gray-200">
                            I love kittens very much. They are amazing.
                        </p>
                        <div className='p-6'>
                        <button class="bg-white text-black-500  py-1 px-4 font-semibold h-8 text-center rounded-sm ">Play Now</button>
                        <button class="bg-black text-white   py-1 px-4  font-semibold  h-8 text-center ml-6 rounded-sm">Play Now </button>
                        </div>

                </div> 
            </div>

        </div>
    );
};
export default Main;
