import React from 'react'
import Image from 'next/image';
import { StarIcon } from "@heroicons/react/24/solid"
import {useState, useEffect} from 'react'
import Currency from "react-currency-formatter"

const Product = ({id, title, price, description, category, image}) => {
    const [items, setItems] = useState(0)
    const MAX_RATING = 5;
    const MIN_RATING = 1;
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
        )
    const [hasPrime] = useState(Math.random() < 0.5)

    function addItems() {
        setItems(items + 1)
        localStorage.setItem('cart', items)
    }
    
    


    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-10">
            <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
            <Image className="my-auto mx-auto" src={image} height={200} width={200} objectFit="contain" alt="text" />
            <h4 className="my-3 font-semibold">{title}</h4>
            <div className="flex">
                {Array(rating)
                .fill()
                .map((_, i) => (
                    <StarIcon key={i} className="h-5 text-yellow-500" />
                ))}
            </div>

            <p className="text-xs my-2">{description}</p>

            <div className="mb-5">
                <Currency quantity={price} currency="PHP"/>
            </div>

            {hasPrime && (
                <div className="flex items-center space-x-2 -mt-5">
                    <img className="w-12" src="https://links.papareact.com/fdw" alt="test" />
                    <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                </div>
            )}

            <button className="mt-auto button" onClick={addItems}>Add to Cart</button>
        </div>
    )
}

export default Product
