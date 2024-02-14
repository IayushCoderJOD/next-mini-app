import React from 'react'
import Link from 'next/link'
import SearchBar from './SearchBar'

const NavBar = () => {
    return (
        <>
            <div className='flex justify-between  bg-gray-700 pl-20 pr-28 p-5 text-white'>
                <Link href={"./"} className='font-bold text-2xl '>WikiRocket!</Link>
                <SearchBar />
            </div>
        </>
    )
}

export default NavBar