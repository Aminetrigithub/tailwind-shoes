import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";

export function Nav() {

const ROUTES = ["Home","About","Services","Pricing","Contact"]
  return (

<nav className="items-center flex justify-between flex-wrap" >

{/* Logo */}
  
<a href="">
<NikeLogo className="w-20 h-20" />
</a>


{/* Hamburger button */}
<button className="  rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-gray-200">
<RxHamburgerMenu size={25} />
</button>

{/* Menu List */}
<div className="w-full">
<ul className="bg-gray-100 rounded-lg border p-4 border-gray-100 text-lg ">{ROUTES.map((route, i )=>{ return <li key={i} className= {`cursor-pointer rounded px-3 py-2 ${(i === 0 )? "bg-blue-500 " : "hover:bg-gray-400"}`}>{route}</li> }) }
</ul>
</div>

</nav>
    )
}
