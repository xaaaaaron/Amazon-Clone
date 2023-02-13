import React from 'react'
import Image from 'next/image'
import { MagnifyingGlassIcon, ShoppingCartIcon, Bars4Icon } from "@heroicons/react/24/outline"
import {useEffect, useState} from 'react'

const Navbar = () => {

    const [items, setItems] = useState()

    useEffect(() => {
        const items = localStorage.getItem('cart')
        setItems(items)
    }, [items])

    return (
        <header>
            {/*navbar */}
            <div className="sticky-top z-0 flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image
                        src="https://links.papareact.com/f90"
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                        alt="text"
                    />
                </div>
            {/*searchbar */}
                <div className="hidden mx-10 sm:flex items-center h-10 rounded-md cursor-pointer flex-grow bg-yellow-400 hover:bg-yellow-500">
                    <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md px-2 focus:outline-none" type="text" placeholder="Search here"/>
                    <MagnifyingGlassIcon className="h-12 p-4"/>
                </div>
            {/* right*/}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div className="link">
                        <p>Aaron Alcarde</p>
                        <p className="bolded">Account & Lists</p>
                    </div>
                       
                    <div className="link">
                        <p>Returns</p>
                        <p className="bolded">& Orders</p>
                    </div>
                        
                    <div className="relative link flex items-center">
                        <span className="absolute top-0 right-0 md:right-5 h-4 w-4 bg-yellow-400 text-center text-black font-bold rounded-lg">{items}</span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="bolded">Cart</p>
                    </div>
                </div>            
            </div>
            {/*bottom */}
               
            <div className="flex space-x-3 p-2 pl-6 items-center bg-amazon_blue-light text-white">
                    <p className="link flex items-centerfs">
                        <Bars4Icon className="h-6 mr-1" />
                        All
                    </p>
                    <p className="link">Prime Video</p>
                    <p className="link">Amazon Business</p>
                    <p className="link">Today's Deals</p>
                    <p className="link hidden lg:inline-flex">Electronics</p>
                    <p className="link hidden lg:inline-flex">Food & Groceries</p>
                    <p className="link hidden lg:inline-flex">Prime</p>
                    <p className="link hidden lg:inline-flex">Buy Again</p>
                    <p className="link hidden lg:inline-flex">Health</p>
                </div>
        </header>
            
        )
}

export default Navbar
