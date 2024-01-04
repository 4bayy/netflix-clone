import React from "react";

function Navbar()
{
    return(
        <div className="container mx-auto mb-3">
        <div className="flex items-center justify-between  ">
            <h1 className="text-red-500 font-semibold text-md ml-3">NETFLIX</h1>
            <div className="text-sm">
            <button className="text-white bg-black mr-2 p-1 px-2 rounded-sm text-center">Sign In </button>
            <button className="text-white bg-red-600 p-1 px-2 rounded-sm hover:bg-red-800  text-center">Sign Up</button>
            </div>
        </div>
        </div>
    )
}
export default Navbar;