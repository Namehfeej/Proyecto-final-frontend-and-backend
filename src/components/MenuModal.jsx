import React from 'react'
import { createPortal } from "react-dom"
import { AiOutlineCloseCircle } from "react-icons/ai";

function MenuModal({
    showMenu,
    closeMenu,
    children
}) {
  return (
        showMenu ? 
            createPortal(
                <div className='menuModal__container' role='button' onClick={closeMenu}>
                    <div className='menuModal_content' onClick={e => e.stopPropagation()}>
                        <div className='close_menuModal' onClick={closeMenu}>
                            < AiOutlineCloseCircle/>
                        </div>
                        {children}
                    </div>
                </div>,
                document.body
            )
            : undefined
  )
}

export default MenuModal
