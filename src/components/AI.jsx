import React from 'react'
import { Link } from 'react-router-dom'

export default function AI() {
  return (
    <Link to={'/ai'} className=' w-16 h-16 rounded-full bg-yellow-300 text-black font-bold text-2xl fixed right-5 bottom-5 flex justify-center items-center'>AI</Link>
  )
}
