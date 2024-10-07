"use client";
import React from 'react'
import Link from "next/link";
import { FaUserAlt } from 'react-icons/fa';



export default function Header() {

 

  return (
    <header className="bg-[#304ffe] text-white rounded-[12px] my-5 p-5 items-center justify-between flex ">
      <div>
        <ul className="flex list-none ">
            <li className="ml-7">
            <Link className="mx-0 my-1 w-full font-normal hover:border-b-2 border-gray-600 border-solid" href="/"> Home</Link>
            </li>
            <li className="ml-7">
            <Link className="mx-0 my-1 w-full font-normal hover:border-b-2 border-gray-600 border-solid" href="/users/"> users</Link>
            </li>
            <li className="ml-7">
            <Link className="mx-0 my-1 w-full font-normal hover:border-b-2 border-gray-600 border-solid" href="/todos/"> Todo</Link>
            </li>
            <li className="ml-7">
            <Link className="mx-0 my-1 w-full font-normal hover:border-b-2 border-gray-600 border-solid" href="/posts/">posts</Link>
            </li>
        </ul>
      </div>
      <div>
      <Link className="flex items-center bg-white rounded-[5px] px-2 py-1 text-[#304ffe] transition ease-in delay-150 hover:bg-[#304ffe] hover:text-white"href="/dashboard">
               <FaUserAlt className="text-2xl" />
               
             </Link>
      </div>
      
      
    </header>
  )
}
