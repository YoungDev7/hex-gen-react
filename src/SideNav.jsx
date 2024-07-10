/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import FavItem from './FavItem'

export default function SideNav({isOpen, favColors, copyFuc, favFunc, setFavColors}) {
  return (
    <>
      <div className={`h-full fixed z-[1] top-0 right-0 bg-black/50 overflow-x-hidden pt-16 transition-all duration-500 ${isOpen ? "w-[70%] sm:w-[350px]" : "w-0"}`}>{favColors.map((color) =>{
        //we are just looping through favColors and mounting each as favItem component
        return <FavItem key={color.hex} color={color} copyFuc={copyFuc} favFunc={favFunc} favColors={favColors} setFavColors={setFavColors} />
      })}</div>
    </>
  )
}
