import React, { useContext, useState } from 'react'
import { CartContext } from "../context/CartContext";
import { postOrder } from "../utils/api";
import CartModal from './CartModal'
import Counter from './Counter'
import { FaCartPlus } from "react-icons/fa";
import Button from './Button';
import { useNavigate } from 'react-router';



function Cart() {
    
    const [openCart, setOpenCart] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)
    const [cart, setCart] = useContext(CartContext)

const navigate = useNavigate()

  const setQuantity = cart.reduce((acc, item) => {
        return acc + item.quantity
    }, 0)

    const totalAmount = cart.reduce( (acc, item) => acc + (item.price * item.quantity), 0)

    const cartItems = cart.map((item) => ({
            productId: item.id,
            title: item.name,
            picture_url: item.img,
            quantity: item.quantity,
            unit_price: item.price
        }))

    const handleBuyCart = () => {
        navigate("/checkout")
        setOpenCart(false)
        setOpenMenu(false)
        postOrder({cartItems})   
    }



  return (
    <>
        <div className="menu-nav__cart" onClick={() => setOpenCart(true)}>
            <FaCartPlus />
            <div className='cart__badge'>
                <span>{ setQuantity || "0" }</span>
            </div>

        </div>
        <CartModal showCart={openCart} closeCart={() => setOpenCart(false)} >
            
            <div className='shoppingCart__container'>
                
                
                    {   
                        cart.map( (item ) => (
                                <div key={item.id} className='shoppingCart__content'>
                                    <div className='item__container'>
                                        <img src={item.img} alt={`Image about ${item.name}`} className='shoppingCart_image'/>
                                        <h4>{item.name}</h4>
                                    </div>
                                    <div className='item__counter'>
                                        <Counter id={item.id}/>
                                    </div>
                                    <b>Subtotal: {`$ ${item.price * item.quantity}`}</b>
                                    <hr />
                                </div>
                        )) 
                    }
                    <div className={cart.length === 0 ? 'total__amount-hidden' : 'total__amount'}>
                        <b>Total: {`$ ${totalAmount}`}</b>
                    </div>

                    <div className={cart.length === 0 ? 'buy_over__container-hidden' : 'buy_over__container'}>
                        < Button text="Finalizar Compra" className="buy_over__button" 
                        onClick={handleBuyCart}
                        closeCart={() => setOpenCart(false)}
                         />
                    </div>
                
            </div>
            
        </CartModal>

    </>
        
  )
}

export default Cart
