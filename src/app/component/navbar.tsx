'use client'
import { useState } from "react"

export default function Navbar(){
    const [isClick, setisClick]=useState(false);
    const toggleNavbar=()=>{
        setisClick(!isClick)
    }
    return(
        <div className="lg:bg-black bg-white">
<div className="flex mx-auto py-3 justify-center text-center items-center bg-black text-white">
  <h1 className="max-w-[54px] h-[32px] text-orange-500 text-[24px] leading-[32px] bg-black  font-serif font-bold">Food<span className="w-[55px] h-[32px] text-[24px] leading-[32px] text-white  font- bold ">Luck</span></h1>
</div>
       <nav className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="flex items-center justify-between h-16 ">
                <div className="flex items-center  ">
                    <div className="flex-shrink-0 ">
                        <a href="/" className="text-[22px] font-bold font-serif   leading-[24px] tracking-[3%] lg:text-white">
                        <span className="text-orange-500  ">Foo</span>dLuck
                        </a>
                    </div>
                </div>
                <div className="hidden md:block ">
                    <div className="  ml-4 flex items-center space-x-4  gap-[15px] ">
                        <a  href="/" className=" hover:bg-orange-400 text-white rounded-lg p-2"> Home</a>
                        <a  href="/about" className=" hover:bg-orange-400 text-white rounded-lg p-2 "> Menu</a>
                        <a  href="/contact" className=" hover:bg-orange-400 text-white rounded-lg p-2 "> Blog</a>
                        <a  href="/services" className=" hover:bg-orange-400 text-white rounded-lg p-2 k"> Page</a>
                        <a  href="/" className=" hover:bg-orange-400 text-white rounded-lg p-2 "> About</a>
                        <a  href="/about" className=" hover:bg-orange-400 text-white rounded-lg p-2"> Shop</a>
                        <a  href="/contact" className=" hover:bg-orange-400 text-white rounded-lg p-2 "> Contact</a>
                        <a  href="/services" className=" hover:bg-orange-400 text-white rounded-lg p-2 "> page</a>

 
                        <div className="rounded-;g  w-[273px] h-[38px] gap-[24px] ">
                        <input className="bg-[#F5F5F5] rounded-;g  border border-orange-400 w-[273px] h-[38px] px-[15px] py-[8px] gap-[4px] text-[18px] font-normal"
                        type="text"
                        id="text"
                        placeholder="What are you looking for"/>
                        
                        </div>
                        

                    </div>
                   
                </div>
                <div className="md:hidden flex items-center bg-black">
                    <button className="inline-flex items-center justify-center p-2 rounded-md  
                    hover:text-white focus:outline-orange-500 focus:ring-2 focus:ring-inset focus:ring-orange-500 text-orange-500 "
                    onClick={toggleNavbar}>
                        { isClick ? (
                            <svg 
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24  24"
                            stroke="currentColor">
                                <path 
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"/>
                                
                                
                            </svg>
                        ) : (
                            <svg 
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24  24"
                            stroke="currentColor">
                                <path 
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"/>
                                
                                
                            </svg>

                        )}
                    </button>

                </div>
            </div>
        </div>
        {
            isClick && (
                <div className="md:hidden ">
                    <div className="px-2 pt-2 space-y-1 sm:px-3 ">
                     
                    <a  href="/" className=" hover:bg-black hover:text-white rounded-lg p-2"> Home</a><br />
                        <a  href="/about" className=" hover:bg-black hover:text-white rounded-lg p-2"> Menu</a><br />
                        <a  href="/contact" className=" hover:bg-black hover:text-white rounded-lg p-2"> Blog</a><br />
                        <a  href="/services" className=" hover:bg-black hover:text-white rounded-lg p-2"> Page</a><br />
                        <a  href="/" className=" hover:bg-black hover:text-white rounded-lg p-2"> About</a><br />
                        <a  href="/about" className=" hover:bg-black hover:text-white rounded-lg p-2"> Shop</a><br />
                        <a  href="/contact" className=" hover:bg-black hover:text-white rounded-lg p-2"> Contact</a><br />
                        <a  href="/services" className=" hover:bg-black hover:text-white rounded-lg p-2"> page</a><br />

                        
                        <div className=" ">
                        <input className="bg-[#F5F5F5]  w-[347px] h-[38px] gap-[24px]  border border-orange-400 px-[15px] py-[8px]  text-[18px] font-normal mb-[45px]"
                        type="text"
                        id="text"
                        placeholder="What are you looking for"/>
                        
                        
                        </div>
                  

                    </div>
                </div>
            )
        }

       </nav>
        </div>
    )
}