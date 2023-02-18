import React from 'react'
import { Facebook, Github, Instagram, Linkedin, Twitter } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

export const Footer = () =>{
    return<>
        <div className='text-center grid justify-items-center space-y-4 mb-4'>
            <h1 className='text-3xl font-bold text-gray-500'>MOHAMMED ALI HUSSAIN WARIS</h1>
            <div className='flex flex-row space-x-4'>
                 {/* <Link to = "" className='text-3xl'>
                 </Link> */}
                 <Link to="" className='text-3xl text-white rounded-full bg-gray-500 p-2 hover:bg-sky-700'>
                    <Twitter/>
                 </Link>
                 <Link to="" className='text-3xl text-white rounded-full bg-gray-500 p-2 hover:bg-sky-800'>
                    <Facebook/>
                 </Link>
                 <Link to="" className='text-3xl text-white rounded-full bg-gray-500 p-2 hover:bg-rose-500'>
                    <Instagram/>
                 </Link>
                 <Link to="" className='text-3xl text-white rounded-full bg-gray-500 p-2 hover:bg-black'>
                    <Github/>
                 </Link>
                 <Link to="" className='text-3xl text-white rounded-full bg-gray-500 p-2 hover:bg-sky-700'>
                    <Linkedin/>
                 </Link>
            </div>
            <div>
                <p>© Copyright <Link to="" className='underline decoration-sky-500 text-sky-500'>Mohammed Ali Hussain Waris.</Link> All Rights Reserved</p>
                <p>Designed by <Link to="" className='underline decoration-sky-500 text-sky-500'>Mohammed Ali Hussain Waris</Link></p>
            </div>
        </div>
    </>
}