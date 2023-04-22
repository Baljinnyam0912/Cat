import React from 'react';
import {AiFillMail } from 'react-icons/ai';
import {ImInstagram} from 'react-icons/im';
import {AiFillTwitterCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='w-full h-[50vh] bg-[#dba539] flex items-center justify-center flex-col'>
        <div className='w-[400px] h-[100px] bg-none flex flex-row justify-center items-center'>
   
        <AiFillMail/>
        <ImInstagram/>
        <AiFillTwitterCircle/>
            
        
           
         
        </div>
      
        <h1 className='text-white text-2xl'>A portion of every CatScarf goes to help animals in need</h1>
        <div className='w-full h-[50px] bg-[#805f1e] absolute mt-[23%] flex justify-center items-center text-white'>
            <h5>©2015 CatScarf</h5>
        </div>
    </div>
  )
}

export default Footer