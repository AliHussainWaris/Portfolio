import React from 'react'
import Typed from 'react-typed'

export const Home = () =>{
    const image = "https://i.ibb.co/LNpQX1J/320075919-1348011149302017-8643250846350799781-n.jpg";    
    return(
        <>
        <div className='h-full' id="Home">
            <div className='flex flex-row text-grey-500'>
                <div className='lg:float-left grid place-content-center mt-80 lg:mt-0'>
                    <p className='text-5xl md:text-7xl text-center'>MOHAMMED ALI HUSSAIN WARIS</p>
                    <div className='text-3xl md:text-4xl text-center'>
                        <p>I AM <Typed className='underline underline-offset-8 decoration-sky-500'
                            strings={["UI / UX DESIGNER" , "MERN STACK DEVELOPER"]}
                            typeSpeed={150}
                            backSpeed={100}
                            loop
                        /></p>
                    </div>
                </div>
                <img src={image} alt="Myimage" className="object-cover h-screen invisible hidden lg:visible lg:block"/>
            </div>
        </div>
        </>
    )
}