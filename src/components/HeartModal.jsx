import React from 'react'
import { createPortal } from "react-dom"
import { AiOutlineCloseCircle } from "react-icons/ai";

function HearthModal({
    showHeart,
    closeHeart,
    children
}) {
  return (
        showHeart ? 
            createPortal(
                <div className='heartModal__container' role='button' onClick={closeHeart}>
                    <div className='heartModal_content' onClick={e => e.stopPropagation()}>
                        <div className='title-and-closemoda__container'>
                            <div className='close_cartModal' onClick={closeHeart}>
                            < AiOutlineCloseCircle/>
                            </div>
                            <h3>Favorites</h3>
                        </div>
                        
                        {children}
                    </div>
                </div>,
                document.body
            )
            : undefined
  )
}

export default HearthModal
