import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import ProductFeed from './Components/ProductFeed'


export default function Home({products}) {

  return (
    <> 
    <div className="bg-gray-100">
      <Head>
        <title>Amazon Clone!</title>
      </Head>

      <Navbar />
      <main className="max-w-screen-2xl mx-auto">
          {/**banners */}
        <Banner />
        <ProductFeed products={products} />
       
          {/** */}

        </main>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const products = await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json()
  )

  return {
    props: {
      products
    }
  }
}