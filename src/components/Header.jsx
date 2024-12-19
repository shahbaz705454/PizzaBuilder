import React from 'react'
import pizzalogo from "../assets/pizzalogo.png"

const Header = () => {
  return (
    <div className='bg-gray-800 text-yellow-500 font-sans items-center flex pl-8 gap-5 font-bold text-3xl py-5'>
      <img src={pizzalogo} width={50} alt="" />
       <h1 >Pizza Customization</h1>
    </div>
  )
}

export default Header