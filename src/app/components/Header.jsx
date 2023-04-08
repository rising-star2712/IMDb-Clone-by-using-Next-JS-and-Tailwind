import Link from 'next/link'
import React from 'react'
import Menuitem from './Menuitem'
import { AiFillHome } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
function HomeHeader() {
  return (
    <div className="flex mx-2 max-w-8xl sm:mx-auto items-center py-6">
        <div className="flex ">
            <Menuitem title="Home" address="/" Icon ={AiFillHome}/>
            <Menuitem title="About" address="/" Icon ={BsInfoCircleFill}/>   
        </div>
            
        <div className="flex ">
            <Link href="/">
              <h2 className="text-2xl">
                <span className="font-bold bg-amber-500 py-3 px-2 rounded-lg mr-1 text-right">
                  IMDb
                </span>
                <span className="text-xl hidden sm:inline text-right">
                  Clone
                </span>
              </h2>
            </Link>
        </div>

        <div>

        </div>
    </div>
  )
}

export default HomeHeader
