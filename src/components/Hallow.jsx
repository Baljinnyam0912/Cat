import React from 'react'

const Hallow = () => {
  return (
    <div className='w-full h-[100vh] bg-white  flex justify-center flex-col'>
        <div className='w-full h-[30%]  flex bg-none flex-col justify-center items-center'>
        <h6 className='tracking-[10px] mt-[30px]'>CATSCARF</h6>
        <h1 className='text-7xl tracking-[5px] '>The Hallow's Eve</h1>
        <div className='w-[30%] h-px bg-black mt-[15px]  '></div>
        <h2 className='mt-10 text-2xl'>Reversible. Comfortable. Badass. </h2>


      
 
        </div>
        <div className='w-full h-[80vh] bg-white flex flex-row items-center justify-center'>
            <div className="w-[25%] h-[80%] mr-[10px] bg-cover bg-[url('https://cdn.shopify.com/s/files/1/0261/4687/products/the_hallows_eve_skull_bones_detail_large.jpg?v=1382844328')]"></div>
            <div className="w-[25%] h-[80%] mr-[10px] bg-cover bg-[url('https://cdn.shopify.com/s/files/1/0261/4687/products/the_hallows_eve_solid_large.jpg?v=1381798982')]"></div>
           
          
        </div>
        

    </div>
  )
}

export default Hallow