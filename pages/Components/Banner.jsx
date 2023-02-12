import React from 'react'
import Image from 'next/image'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Banner = () => {
    return (
        <div className="relative">
            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-30" />

            <Carousel
             autoPlay
             infiniteLoop
             showStatus={false}
             showIndicators={true}
             showThumbs={false}
             interval={3000}
             >

             <div>
                 <img loading="lazy" src="https://links.papareact.com/gi1" alt="text"/>
             </div>
             <div>
                <img loading="lazy" src="https://links.papareact.com/6ff" alt="text"/>
             </div>
             <div>
                <img loading="lazy" src="https://links.papareact.com/7ma" alt="text"/>
             </div>
           </Carousel>
        </div>
    )
}

export default Banner
