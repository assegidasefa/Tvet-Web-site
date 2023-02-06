import React from 'react'
import { Link } from "react-scroll";
import Logo from '../../assets/logo.png'

const navbar = () => {
    return (
        <div className='w-full bg-green-600  h-full flex justify-between py-2'>
            <div className='bg-red-500 w-1/5'>
            <img src={Logo} alt="Logo Image" style={{ width: "50px" }}></img>
            </div>

                <ul className='w-1/2 flex justify-around'>
                    <li>
                        <Link activeClass="active" to="home" smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="about" smooth={true} duration={500}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="service" smooth={true} duration={500}>
                        Service
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="contact" smooth={true} duration={500}>
                        Contact
                        </Link>
                    </li>
                </ul>
            
        </div>
    )
}

export default navbar