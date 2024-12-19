import React, { useState } from 'react'
import Pizzabase from "../assets/PizzaBase.png"
import Cheese from "../assets/BaseCheese.png"
import Basil from "../assets/Basil.png"
import Mushroom from "../assets/Mushroom.png"
import Olive from "../assets/Olive.png"
import Pineapple from "../assets/Pineapple.png"
import Tomato from "../assets/Tomato.png"
import { useNavigate } from 'react-router-dom'
import {motion} from "framer-motion";


const Customize = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState(
    {
      Pineapple: false,
      Basil: false,
      Olive: false,
      Tomato: false,
      Mushroom: false,
      Cheese: false







    }
  )

  const changeHandler = (event) => {
    const {name,checked} = event.target;
    setFormData((prevData)=>({
      ...prevData,
      [name]:checked,

    }));
    
  }
  const submitHandler=(event)=>{
    event.preventDefault();
    // console.log(formData);
    sessionStorage.setItem("data",JSON.stringify(formData));
    navigate("/Checkout");


  }


  return (
    <div className='flex justify-center mt-10 gap-5 overflow-hidden flex-wrap'>
      <div className='border-4 p-5 border-black'>
        <img className=' relative' src={Pizzabase} width={300} alt="" />

        <motion.div
        initial={{opacity:0}}
        animate={{
          y:formData.Cheese?-460:100,
          opacity:formData.Cheese?1:0,
        }}
        transition={{duration:0.2}}
        ><img className='ingredients absolute top-40' src={Cheese} width={300} alt="" /></motion.div>

<motion.div
        initial={{opacity:0}}
        animate={{
          y:formData.Pineapple?-460:100,
          opacity:formData.Pineapple?1:0,
        }}
        transition={{duration:0.2}}
        ><img className='ingredients absolute top-40' src={Pineapple} width={300} alt="" /></motion.div>
       
       
       <motion.div
        initial={{opacity:0}}
        animate={{
          y:formData.Basil?-460:100,
          opacity:formData.Basil?1:0,
        }}
        transition={{duration:0.2}}
        ><img className='ingredients absolute top-40' src={Basil} width={300} alt="" /></motion.div>


<motion.div
        initial={{opacity:0}}
        animate={{
          y:formData.Olive?-460:100,
          opacity:formData.Olive?1:0,
        }}
        transition={{duration:0.2}}
        ><img className='ingredients absolute top-40' src={Olive} width={300} alt="" /></motion.div>

<motion.div
        initial={{opacity:0}}
        animate={{
          y:formData.Tomato?-460:100,
          opacity:formData.Tomato?1:0,
        }}
        transition={{duration:0.2}}
        ><img className='ingredients absolute top-40' src={Tomato} width={300} alt="" /></motion.div>
        
        
        <motion.div
        initial={{opacity:0}}
        animate={{
          y:formData.Mushroom?-460:100,
          opacity:formData.Mushroom?1:0,
        }}
        transition={{duration:0.2}}
        ><img className='ingredients absolute top-40' src={Mushroom} width={300} alt="" /></motion.div>
     

      </div>
      <div className='border-4 border-black p-10'>
        <h3 className='font-bold text-2xl'>CHOOSE YOUR TOPPINGS</h3>

        <form className='flex flex-col gap-2 py-6' onSubmit={submitHandler}>
          <div>

            <input className='checkbox' type="checkbox" name='Pineapple' id='Pineapple' checked={formData.Pineapple} onChange={changeHandler} />
            <label htmlFor="Pineapple"> Pineapple</label>
          </div>

          <div>

            <input className='checkbox' type="checkbox" name='Basil' id='Basil' checked={formData.Basil} onChange={changeHandler} />
            <label htmlFor="Basil"> Basil</label>

          </div>


          <div>

            <input  className='checkbox' type="checkbox" name='Olive' id='Olive' checked={formData.Olive} onChange={changeHandler} />
            <label htmlFor="Olive"> Olive</label>

          </div>


          <div>

            <input className='checkbox' type="checkbox" name='Tomato' id='Tomato' checked={formData.Tomato} onChange={changeHandler} />
            <label htmlFor="Tomato"> Tomato</label>

          </div>

          <div>

            <input className='checkbox' type="checkbox" name='Mushroom' id='Mushroom' checked={formData.Mushroom} onChange={changeHandler} />
            <label htmlFor="Mushroom"> Mushroom</label>

          </div>
          <div>


            <input className='checkbox' type="checkbox" name='Cheese' id='Cheese' checked={formData.Cheese} onChange={changeHandler} />
            <label htmlFor="Cheese"> Cheese</label>

          </div>


          <button className='bg-yellow-400 px-7 py-3 mt-5 rounded-full shadow-md hover:scale-105 transition-all duration-100'> Proceees To Checkout</button>

        </form>


      </div>
    </div>
  )
}

export default Customize