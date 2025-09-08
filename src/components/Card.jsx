import { AiFillHeart } from "react-icons/ai";
import { useNavigate } from 'react-router';
import { AiTwotoneShopping } from "react-icons/ai";
import Button from "./Button";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { HeartContext } from "../context/HeartContext";



function Card({name, img, description, price, category, id}) {

  const [isHeartActive, setIsHeartActive] = useState(false)
  const [isAddedToCart, setIsAddedToCart] = useState(false)

  const [cart, setCart] = useContext(CartContext)
  const [favorites, setFavorites] = useContext(HeartContext)
  const navigate = useNavigate()

  const addToyToCart = () => {
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
      } else {
        return [...currentToys, { id, name, img, price, quantity: 1 }]
      }
    })
    setIsAddedToCart(true)
    
  }

  const addToyToFavorites = () => {
    setFavorites((favoritesToys) => {
      const isFavorite = favoritesToys.find((item) => item.id === id)

      if(isFavorite){
        return favoritesToys.map((item) => {
          if(item.id === id){
            return item
          }
        })
      } else {
        return [...favoritesToys, { id, name, img, quantity: 1 } ]
      }
      
    })
    setIsHeartActive(true)
  }


  
  return (
      
        <div className="product-card">
          <h3>{name}</h3>
          <div className={isHeartActive ? "icon-favorite-active" : "icon-favorite"} onClick={isHeartActive ? ()=> alert("The product is already favorite")  : addToyToFavorites} >
           < AiFillHeart />
          </div>
            <img src={img} alt={`Toy for ${name}`} 
            onClick={() => navigate(`/products/${id}`)} 
            className="product-card__images" />
          <div className="product-card__info">
              <p>Description: {description}</p>
              <p>Category: {category}</p>
              <p>Price: ${price}</p>
              <div className="btn-buy__container">
                <Button className={isAddedToCart ? "btn-buy-active" : "btn-buy"} text={isAddedToCart ? "Added" : "Add to cart"} onClick={isAddedToCart ? ()=> alert("The product is already added") : addToyToCart}></Button>
                <AiTwotoneShopping />
              </div>

          </div>

        </div>
    
  )
}

export default Card
