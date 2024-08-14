import React from "react";
import { Link } from "react-router-dom";
import "./Pages.css";



export function Menu() {
  return (
    <nav className="fixed top-0 bg-white w-full flex flex-row gap-30 justify-between pl-10 pt-10 pr-20 pb-5 nav-menu z-50">
      
        < div className="hind-semibold text-teal-600 sm:text-xl md:text-2xl lg:text-3xl">
        <Link to="/"> HOLIDAY<span className="text-amber-700 text-4xl">S</span> INN</Link>
         
        </div>
        <div>
         
        <ul className="text-cyan-700 font-menu text-md traking-wide  flex-row gap-5 font-medium hidden lg:flex md:flex">
          <li ><Link to="/" className="hover:text-amber-400 font-semibold">HOME</Link> </li>
          <li   ><Link to="/room" className="hover:text-amber-400 font-semibold">SERVICES</Link></li>
          <li><Link to="/about" className="hover:text-amber-400 font-semibold"> ABOUT</Link></li>
          <li><Link to="/contact" className="hover:text-amber-400 font-semibold"> CONTACT</Link></li>
          <li><Link to="/addRoom" className="hover:text-amber-400 font-semibold"> ADD ROOM</Link></li>


        </ul>
        </div>
        <div className="flex flex-row gap-5">
        <Link to="/login" className="bg-cyan-500 pl-5 pr-5 font-semibold
         text-white text-md p-2 rounded-md hover:text-white hover:bg-cyan-600">Login</Link>
        <Link to="/signup" className="bg-cyan-500 pl-5 pr-5 font-semibold
         text-white text-md p-2 rounded-md hover:text-white hover:bg-cyan-600">Signin</Link>
        </div>
       
      
    </nav>
  );
}



   

export default Menu;
