import React from 'react'
import {HandIndexThumb } from 'react-bootstrap-icons';
import Shake from 'react-reveal/Shake';
import { useNavigate} from 'react-router-dom';
import ParticlesBackground from './Particles.js/ParticlesBackground';

export const Intro = ()=>{
    const history =  useNavigate();
    const Clicked = event =>{
        const main = document.getElementById("up");
        main.style.visibility = "hidden"
        main.style.height = "0"
        history("/Main")
    }   
    return<>
        <ParticlesBackground/> 
        <div id="up" className='h-screen items-center justify-center flex flex-col space-y-20' onClick={Clicked}>
        <div id="test" className=''>
            <h1 className='text-5xl text-white mt-20'>
                MOHAMMED ALI HUSSAIN WARIS
            </h1>
        </div>
        <div className='justify-center flex flex-col'>
            <p className='text-2xl text-white mt-20 uppercase'>Click me</p>
            <Shake distance={50} count={5000}>
                <HandIndexThumb className="text-3xl text-white mt-5 m-auto"/>
            </Shake>
        </div>
    </div>
    </>
}