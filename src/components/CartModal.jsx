import React from 'react'
import { createPortal } from "react-dom"
import { AiOutlineCloseCircle } from "react-icons/ai";

function CartModal({
    showCart,
    closeCart,
    children
}) {
  return (
        showCart ? 
            createPortal(
                <div className='cartModal__container' role='button' onClick={closeCart}>
                    <div className='cartModal_content' onClick={e => e.stopPropagation()}>
                        <div className='close_cartModal' onClick={closeCart}>
                            < AiOutlineCloseCircle/>
                        </div>
                        <h3>Shopping Cart</h3>
                        {children}
                    </div>
                </div>,
                document.body
            )
            : undefined
  )
}

export default CartModal
