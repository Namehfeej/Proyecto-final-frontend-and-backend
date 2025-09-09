import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { Wallet } from '@mercadopago/sdk-react';
import { CartContext } from "../context/CartContext";
import { postPreferenceMp } from '../utils/api';


function Checkout() {
    const [preferenceId, setPreferenceId] = useState("");
    const [cart, setCart] = useContext(CartContext)


    useEffect(() => {
        const itemList = cart.map((item) => ({
            id: item.id,
            title: item.name,
            picture_url: item.img,
            quantity: item.quantity,
            unit_price: item.price
        }))
        
        postPreferenceMp({
            items: itemList
        })
        .then( data => setPreferenceId(data.preferenceId))
    }, [cart])

    const totalAmount = cart.reduce( (acc, item) => acc + (item.price * item.quantity), 0)
    const customization = {
                            texts: {
                            valueProp: 'smart_option',
                            },      
                        }

  return (
<main className='main-container'>
        <div className="main-container__checkout">
        {   
            cart.map( (item ) => (
                    <div key={item.id} className='checkout__content'>
                        <div className='item__container'>
                            <img src={item.img} alt={`Image about ${item.name}`} className='checkout_image'/>
                            <h4>{item.name}</h4>
                        </div>
                        <b>Subtotal: {`$ ${item.price * item.quantity}`}</b>
                        <hr />
                    </div>
                    
                )

            ) 
        }
            <div className='total__amount-checkout'>
                <b>Total: {`$ ${totalAmount}`}</b>
            </div>
            {
                preferenceId && 
                    <div className='wallet__container'>
                        <Wallet
                            initialization={{ preferenceId: preferenceId }}
                            customization={customization}
                        />
                    </div>
            }

    </div>
</main>
    
  )
}

export default Checkout
