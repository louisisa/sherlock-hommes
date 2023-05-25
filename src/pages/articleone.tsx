import React from 'react'


export const Articleone = () => {
  return (
    <div className='flex flex-col sm:w-1/2 sm:translate-x-1/2'>
      <div className=''> 
        <h1 className='font-bold italic text-6xl'> Why Vintage Armani Fucks </h1>
      </div>

      <div> 
        <p className=' font-light'> May 11, 2023 <br/> Words by Simon Louisin </p>
      </div>

      <section className='my-5 mx-1 flex flex-col font-sanspub text-left'>
        <p> 
          <span className='font-semibold'>If you want swagger with an effortless chic </span>... 
          you're already wanting Armani just may not know it.
          Giorgio Armani dominated the 80's and 90's when it came to casual-but-elegant tailoring,
          basically inventing the dressing up while dressing down high-low.

          
          <div className=' my-5 flex flex-col grow sm:flex-row group justify-center '>
            
            <img src= './images/artA/armani-causual.jpg' alt='armani3'
            className=' sm:w-1/2 h-1/2' />

            <img src= './images/artA/Armani-suit-80s-556x770.jpg' alt='armani4'
            className=' sm:w-1/2 h-1/2' />
          </div>
          <i className=' font-extrabold'> Giorgio Armani Magazine Ad 90's</i>
          <br/>
          <br/>
           Leading into the early 2000's however,
          they unfotnunatley let off the gas, changing their design aesthetic and haven't been the same since. 
          That late 80's, 90's type of formal sleaze wtih great design is hard to come by without spending an arm and leg,
          fortunatley many gems are available and affordable shopping secondhand. Ideally you would want 
          to look for Giorgio Armani, Giorgio Armani Le Collezioni, Borgonuovo 21 and MANI.
          Amani Exchange and Emporio Armani I would reccomend as not ideal for shopping second hand as the original design and materials are 
          lesser than their sister brands. 
        </p>
        <br/>
        
      

        <div className='flex flex-col grow gap-1 sm:flex-row justify-center'> 
          <img src= './images/artA/armani-1-richard-gere.webp' alt='Richard Gere in Armani'
          className=' sm:w-1/2 h-1/2' />
          <img src= './images/artA/armani-casual-2.jpg' alt='armani2'
          className=' sm:w-1/2 ' />
        </div>
        <i className=' font-extrabold'> Left: Richard Gere in Armani 90's &nbsp; Right: Late 80's Giorgio Armani Magazine Ad </i>

      </section>
       
    </div>
  )
};

