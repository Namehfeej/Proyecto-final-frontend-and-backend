
import { useState } from "react";
import { AiOutlineUpload } from "react-icons/ai";
import { AiOutlineIdcard } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router";
import Cart from "../components/Cart";
import MenuModal from "../components/MenuModal";
import Favorites from "../components/Favorites";

function Navbar() {

  const [openMenu, setOpenMenu] = useState(false)
  

  

  return (
    <header>
      <div>
        
        <div  className="logo">
          </div>
          <div className="navbar-container">
            <ul className="navbar-container__items">
                <li><AiOutlineUpload /> <NavLink to="/upload">Upload</NavLink> </li>
                <li><AiOutlineIdcard /> <NavLink to="/about-us">About Us</NavLink></li>
                <li><AiOutlinePhone /> <NavLink to="/contact">Contact</NavLink></li>
                <Favorites />
                <Cart />
                <div className="menu-nav__user">
                    <FaRegUserCircle/> 
                </div>
            </ul>

              <div className="menu-btn" onClick={() => setOpenMenu(true)}>
                <span className="menu-btn__burger">
                  <AiOutlineMenu />
                  </span> 
                
              </div>
           </div>

          <MenuModal showMenu={openMenu} closeMenu={() => setOpenMenu(false)}>
            <div className="navbar-container__menuBurger">
              <ul className="navbar-container__items__menuBurger">
                  <li><AiOutlineUpload /> <NavLink to="/upload" onClick={() => setOpenMenu(false)}>Upload</NavLink> </li>
                  <li><AiOutlineIdcard /> <NavLink to="/about-us" onClick={() => setOpenMenu(false)}>About Us</NavLink></li>
                  <li><AiOutlinePhone /> <NavLink to="/contact" onClick={() => setOpenMenu(false)}>Contact</NavLink></li>
                  <div className="menu-burger__cart" >
                    <Favorites />
                  </div>
                  <div className="menu-burger__cart" >
                    <Cart />
                  </div>

                  <div className="menu-nav__user" >
                      <FaRegUserCircle/> 
                  </div>
              </ul>
            </div>
            </MenuModal>
      </div>
    </header>
    
  )
}

export default Navbar
