import { TbShoppingBag } from "react-icons/tb"; 
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu} from "react-icons/rx";
import { useState } from "react";

export function Nav() {

const ROUTES = ["Home","About","Services","Pricing","Contact"]

const[isMobileMenuShow,setIsMobileMenuShow]= useState(false)

return (

<nav className="items-center flex justify-between flex-wrap" >

{/* Logo */}
  
<a href="">
<NikeLogo className="w-20 h-20" />
</a>
 

{/* Hamburger button */}
<button onClick={ ()=>setIsMobileMenuShow(!isMobileMenuShow)} className=" lg:hidden rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-gray-200">
<RxHamburgerMenu size={25} />
</button>

{/* Menu List */}
<div className={` ${isMobileMenuShow===false && "hidden"} w-full lg:w-auto lg:block`}>
<ul className=" lg:space-x-8 lg:bg-transparent lg:border-none flex flex-col  lg:flex-row  bg-gray-100 rounded-lg border p-4 border-gray-100 text-lg ">{ROUTES.map((route, i )=>{ return <li key={i} className= {`cursor-pointer rounded px-3 py-2 ${(i === 0 )? "text-white lg:bg-transparent lg:text-blue-500 bg-blue-500 " : "hover:bg-gray-200"}`}>{route}</li> }) }
</ul>
</div>

{/* Panier: cart button */}
<div className="fixed bottom-4 left-4 lg:static">
<div className="h-12 w-12 lg:cursor-pointer rounded-full flex-center bg-white shadow-md ">
<TbShoppingBag />
</div>
</div>
</nav>
    )
}
