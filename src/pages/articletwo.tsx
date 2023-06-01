import React from 'react'

export const Articletwo = () => {
  return (
      <div className='flex flex-col sm:w-1/2 sm:translate-x-1/2'>
        <div className=''> 
          <h1 className='font-bold italic text-6xl'> Taiga Takahashi will forever be HIM  </h1>
        </div>
  
        <div> 
          <p className=' font-light'> May 11, 2023 <br/> Words by Simon Louisin </p>
        </div>
  
        <section className='my-5 mx-1 flex flex-col font-sanspub text-left'>
          <p> 
            <span className='font-semibold'>Self described <i>"Sartioral Archeologist"</i> Taiga Takahashi </span>
            geniously recreates vintage garments, using his near 1000 personal archived refrences. As an artist,
            designer, and visionary Takahashi experimented with the idea of time's imperfections and beauty through
            many mediums, but one in particular is cloth and textile's. The clothes Takahashi and his team makes are 
            undoubtedly next level cool. Unfortunately, Takahashi unexpectedly passed away in 2022. His team continues
            his legacy and work through his label. 

            <div className=' my-5 flex flex-col grow sm:flex-row group justify-center '>
              
              <img src= './images/artB/taigatakahashi-trouser-1.webp' alt='T.T Trouser lot 202'
              className=' sm:w-1/2 h-1/2' />

            </div>
            <i className=' font-extrabold'> T.T Lot 202 Engineer Trousers via Neighbor</i>
            <br/>
            <br/>
             
          </p> 
          How meticulous the construction and how specific the sourcing is, most dataing all most 100 years in age 
          , makes this brand really special. In particular the dyeing process's are all natural using bark, flowers,
          roots, and grasses available. You can find out more going to 
          <a href='https://taigatakahashi.com/' target='_blank' rel='noreferrer' className='text-blue-500 underline'> 
          their website.</a> 
          
          
        
  
          <div className='flex flex-col grow gap-1 sm:flex-row justify-center'> 
            <img src= './images/artB/taigatakahashi-denim-1.webp' alt='Richard Gere in Armani'
            className=' sm:w-1/2 h-1/2' />
            <img src= './images/artB/taigatakahashi-jacket-1.webp' alt='armani2'
            className=' sm:w-1/2 ' />
          </div>
          <i className=' font-extrabold'> Left: T.T Lot. 704 Denim Trousers c.1920's  &nbsp; Right: T.T Lot. 309 Buckle-Backed Jacket</i>
  
        </section>
         
      </div>
    )
};
