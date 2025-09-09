import React, { useContext, useState } from 'react'
import { HeartContext } from "../context/HeartContext";
import HeartModal from './HeartModal'
import { AiFillHeart } from "react-icons/ai";
import { FaRegTrashAlt } from "react-icons/fa";

function Favorites({id}) {

  const [openHeart, setOpenHeart] = useState(false)

    const  [favorites, setFavorites] = useContext(HeartContext)

    const heartQuantity = favorites.reduce((acc, item) => {
        return acc + item.quantity
    }, 0)


     const handleDelete = (id) => {
        setFavorites((currentItems) => {
          if(currentItems.find((item) => item.id)?.quantity === 1) {
            return currentItems.filter((item) => item.id !== id)
          } 
          else {
            return currentItems.map((item) => {
                if(item.id === id) {
                    return {...item}
                }
            })
          }
        })
    }


  return (
    <>
        <div className="menu-nav__cart" onClick={() => setOpenHeart(true)}>
            <AiFillHeart/>
            <div className='heart__badge'>
                <span>{ heartQuantity || "0" }</span>
            </div>

        </div>
        <HeartModal showHeart={openHeart} closeHeart={() => setOpenHeart(false)}>
            <div className='favorites__container'>
                    
                    {  
                        favorites.map( (item ) => (
                            <div key={item.id} className='favorites__content'>
                                <div className='item__container'>
                                    <img src={item.img} alt={`Image about ${item.name}`} className='favorites_image'/>
                                    <h4>{item.name}</h4>
                                </div>
                                <div onClick={() => handleDelete(id)}  className="favorites__delete">
                                    < FaRegTrashAlt />
                                </div>
                                <hr />
                            </div>
                    )
                    
                        ) 
                    }
                
            </div>
            
        </HeartModal>
    </>
        
  )
}

export default Favorites
