import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [pizzaData, setPizzaData] = useState(null);

  useEffect(() => {
    // Get the data from sessionStorage
    const savedData = sessionStorage.getItem('data');
    if (savedData) {
      setPizzaData(JSON.parse(savedData));
    }
  }, []);

  const navigate = useNavigate();

  const changeHandler=()=>{

    navigate("/Order");

  }


  // Helper function to count the selected toppings
  const getSelectedToppingsCount = () => {
    if (pizzaData) {
      return Object.values(pizzaData).filter(value => value === true).length;
    }
    return 0;
  };

  const count = getSelectedToppingsCount();



  // Helper function to check if there are any selected toppings
  const hasSelectedToppings = pizzaData && Object.values(pizzaData).includes(true);

  return (
    <div className='bg-gray-800 text-yellow-600 flex flex-col items-center mt-20 justify-center gap-4 border-2 border-black m-auto w-fit p-10 rounded-md'>
      <h2 className='font-bold text-2xl underline'>Order Summary</h2>
      {pizzaData ? (
        <>
          {hasSelectedToppings ? (
            <div>
              <h3 className='font-semibold text-xl '>Your Pizza Toppings :</h3>
              <ul className='list-decimal'>
                

                {Object.keys(pizzaData).map(
                  (topping) =>
                    pizzaData[topping] && <li key={topping}>{topping}</li>
                )}
              
              </ul>
              <div>
<button onClick={changeHandler} className='text-white font-bold bg-yellow-400 px-7 py-3 mt-5 rounded-full shadow-md hover:scale-105 transition-all duration-100'>Pay Now ${count*10}</button>

              </div>
            </div>
          ) : (
            <>
              <p>No toppings selected. Please go back and customize your pizza.</p>
              <NavLink to={"/"}><button  className='text-white bg-yellow-400 px-7 py-3 mt-5 rounded-full shadow-md hover:scale-105 transition-all duration-100'>Select Toppings</button></NavLink>


            </>


          )}
        </>
      ) : (
        <p>No pizza data found. Please customize your pizza first.</p>
      )}
    </div>
  );
};

export default Checkout;
 