import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineX } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";


function Footer() {
  return (
    <div className="footer-container">
        <p>© 2025 Project Integrator with React. All rights reserved.</p>
        <div className="footer-social-medias">
            <AiOutlineGithub />
            <AiOutlineInstagram />
            <AiOutlineX />
            <AiOutlineFacebook />
        </div>
    </div>
  )
}

export default Footer
