import React, { useState } from 'react'
import { Articleview } from '../components/articleview'
import { Imageslider } from '../components/imageslider';


export const Home = () => {

    const [blogs, setBlogs] = useState([
      {title: "Summer Hitlist", desc: "The most exciting things coming soon to my closet this summer...", imglink:"./images/art-three-header.png", id:3, urlroute: "art3", category:"Recs"},
      {title: "Armani On Me", desc: "Vintage Giorgio Armani appreciation post...", imglink:"../images/armani_header.jpg", id:1, urlroute: "art1", category:"Style"},
      {title: "The tea on T.T", desc: "In remeberence of Taiga Takahashi, the sartorial archeologist.", imglink:"sherlock-hommes/images/taiga_takahashi_header.jpg", id:2, urlroute: "art2", category:"Style"},
        
      ]);


  return (

    <div>

        <section className='grid grid-cols-1 lg:grid-cols-3 bg-gray-50 border-b-black/20 border-2'>
          <div className='justify-center mx-2 px-2 border-b-black/20 sm:border-b-0  sm:border-r-black/20 border-2'>
            <h1 className=' translate-y-16 sm:translate-y-4 text-5xl underline font-bebasneue font-medium'> Looking Glass </h1>
            <Imageslider />
          </div>
          <div className='lg:col-span-2'>
            <Articleview blogs={blogs}/>
          </div>

      </section>
    </div>
  )
};

