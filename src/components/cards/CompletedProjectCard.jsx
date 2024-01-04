import React from 'react';
import image from "../../assets/images/jk_qatar22.jpg"

const CompletedProjectCard = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 overflow-hidden">
            <div className="rounded overflow-hidden shadow-lg flex flex-col bg-white">
                <div className="relative">
                    <a href='#'>
                        <img className="w-full" src={image} alt='image'></img>
                        <div className="hover:bg-transparent transition duration-300 absolute
                         bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                    </a>
                    <a href='#!'>
                        <div className="absolute bottom-0 left-0 bg-indigo-900 px-4 py-2 text-white
                         text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                            Github link
                         </div>
                    </a>
                    <a href='#!'>
                        <div className="absolute text-sm top-0 right-0 bg-indigo-600 px-4 text-white rounded-full
                         h-16 w-16 flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600
                          transition duration-500 ease-in-out">
                            Demo link
                        </div>
                    </a>
                </div>
                
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                    <p className="text-gray-700 text-base h-[1rem]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold
                    text-gray-700 mr-2 mb-2">#reactjs</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold
                    text-gray-700 mr-2 mb-2">#appwrite</span>
                </div>
            </div>
        </div>
    );
};



export default CompletedProjectCard;