import React from 'react'
import order from "../assets/PizzaMan.png"
import { useNavigate } from 'react-router-dom'

const Order = () => {
    const navigate = useNavigate();

    const changeHandler=()=>{
        navigate("/")
    }
        return (
        <div className='flex flex-col justify-center items-center mt-10'>
            <img src={order} alt="" />
            <h2>We Have Recieved your order,Thankyou </h2>
            <p>Order id: #050245</p>
            <p>
                Will be Ready in 20-30 min.

            </p>

            <button onClick={changeHandler} className='bg-yellow-400 px-7 py-3 mt-5 rounded-full shadow-md hover:scale-105 transition-all duration-100'> Order Again</button>

        </div>
    )
}

export default Order