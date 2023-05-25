import {   ChevronLeftRounded, ChevronRightRounded } from '@material-ui/icons';
import React, { useState } from 'react'


export const Imageslider = () => {

    const slideIMG = [
        {
            fpath: "./images/80s-Armani-robe-coat-500x694.jpg", desc: "Vintage Armani 80/90's"
        },
        {
            fpath: "./images/Armani-suit-80s-556x770.jpg", desc: "Vintage Armani 80/90's"
        },
        {
            fpath: "./images/Armani-ties-and-suits-eighties-509x770.jpg", desc: "Vintage Armani 80/90's"
        },
        {
            fpath: "./images/WALK_CON_COQUETTE.PNG", desc: "Vintage Armani 80/90's"
        },
        {
            fpath: "./images/615A8916_a8ba6ba4-736f-45fa-b6b7-95866034fc00_480x.webp", desc: "Taiga Takashi via Neighborshop"
        },
    ]

    const[currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slideIMG.length - 1: currentIndex - 1;

        setCurrentIndex(newIndex);
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === slideIMG.length - 1;
        const newIndex = isLastSlide ? 0: currentIndex + 1;

        setCurrentIndex(newIndex);
        
    }
  return (
    // <div className='justify-center bg-gray-200  shadow-md'>
        
        <div className='flex max-w-xl h-[800px] justify-center w-full relative items-center group'>
            
        
            
            <div style={{backgroundImage: `url(${slideIMG[currentIndex].fpath})`}} 
            className='absolute w-full h-2/3 sm:h-5/6 max-w-md rounded-md bg-center bg-cover duration-500 flex justify-around shadow-lg'> 

            

            <div 
                className='  sm:hidden group-hover:block scale-100 absolute top[50%] -translate-x-0 sm:-translate-x-[100%] translate-y-[500%] left-5 text-xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
                onClick={prevSlide}
            > 
                <ChevronLeftRounded/>
            </div>

            <div 
                className='  sm:hidden group-hover:block scale-100 absolute top[50%] -translate-x-0 sm:translate-x-[100%]   translate-y-[500%] right-5 text-xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
                onClick={nextSlide} 
            >

                <ChevronRightRounded /> 
            </div>

            <div className='absolute inset-x-1/2 inset-y-full font-semibold' > 
                <p>{`${currentIndex+1}/${slideIMG.length}`}  </p>
            </div>

            <div className='absolute -inset-y-11 font-extrabold'>
                <i className='font-sanspub text-md'> {`${slideIMG[currentIndex].desc}`}</i>
            </div>

            </div>


            
        </div>
    // </div>
  );
};
