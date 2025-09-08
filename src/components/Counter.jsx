import React from 'react'
import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

function Counter({id}) {

  const [cart, setCart] = useContext(CartContext)


  const toyById = (id) => cart.find(item => item.id === id)
  //console.log(toyById(id))

  const quantityPerToy = toyById(id).quantity

      const [count, setCount] = useState(quantityPerToy || 0)

          

    const handleIncrement = (id) => {
      setCart((currentToys) => {
      const isToyFound = currentToys.find((item) => item.id === id)

      if(isToyFound){
        return currentToys.map((item) => {
          if(item.id === id){
            return {...item, quantity: item.quantity + 1}
          } else {
            return item
          }
        })
      }  })
    

        setCount(count + 1)
    }

    const handleDecrement = (id) => {
      setCart((currentToys) => {
      const isToyFound = currentToys.find((item) => item.id === id)

      if(isToyFound){
        return currentToys.map((item) => {
          if(item.id === id){
            return {...item, quantity: item.quantity - 1}
          } else {
            return item
          }
        })
      }  })
    

        if(count > 1)
        setCount(count - 1)
    }

    const handleDelete = (id) => {
        setCart((currentItems) => {
          if(currentItems.find((item) => item.id)?.quantity) {
            return currentItems.filter((item) => item.id !== id)
          } 
          currentItems.map(item => {
            if(item.id === id){
              return {...item}
            }
          })
        })
        setCount(0)
    }

  return (
    <div className='counter__container'>
        <FaMinus onClick={() => handleDecrement(id)} disabled={count === 1} className="counter__minus" />
        <span>{count}</span>
        <FaPlus onClick={() => handleIncrement(id)} className="counter__plus" />
         < FaRegTrashAlt onClick={() => handleDelete(id)}  className="counter__delete" /> 
    </div>
  )
}

export default Counter
