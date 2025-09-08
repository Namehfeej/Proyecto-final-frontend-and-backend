import { CartContext } from "./CartContext";
import { useState } from "react";

function CartProvider( {children} ) {

    const [cart, setCart] = useState([]); // {prod: {}, quantity: number}

  return (
        <CartContext.Provider value={
          [cart,
          setCart]
        }>
            {children}
        </CartContext.Provider>
  )
}

export default CartProvider
