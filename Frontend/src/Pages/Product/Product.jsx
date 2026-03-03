import React, { useState } from 'react'
import SearchBox from '../../Components/SearchBox/SearchBox'

const Product = () => {
  return (
    <section className='w-full min-h-screen bg-black flex flex-col items-center pt-20'>
      <h1 className='text-white text-4xl font-bold mb-8'>Explore Topics</h1>
      <SearchBox />
    </section>
  )
}

export default Product
