import React from 'react'

const HighFashion = () => {
  return (
    <div className='w-full h-[150vh] bg-[#f4efde]  flex justify-center flex-col'>
        <div className='w-full h-[30%]  flex bg-none flex-col justify-center items-center'>
        <h6 className='tracking-[10px] mt-[30px]'>CATSCARF</h6>
        <h1 className='text-7xl tracking-[5px] '>High Fashion</h1>
        <div className='w-[30%] h-px bg-black mt-[20px]  '></div>
        <h2 className='mt-10 text-lg'>Born from a need for high quality, artisan hand-knit pet fashion for all 
        seasons. Our collections have a little something for every beloved feline in your life. </h2>


      
 
        </div>
        <div className='w-full h-[80vh] bg-[#f4efde] flex flex-row items-center justify-center'>
            <div className="w-[20%] h-[55%] mr-[10px] bg-cover bg-[url('https://cdn.shopify.com/s/files/1/0261/4687/t/7/assets/img_premiumyarns.gif?v=119302633523907339871397336769')]"></div>
            <div className="w-[20%] h-[55%] mr-[10px] bg-cover bg-[url('https://cdn.shopify.com/s/files/1/0261/4687/t/7/assets/img_custom_fit.gif?v=98937897637121300621397336761')]"></div>
            <div className="w-[20%] h-[55%] mr-[10px] bg-cover bg-[url('https://cdn.shopify.com/s/files/1/0261/4687/t/7/assets/img_knitbyhand.gif?v=118745573634136733721397336767')]"></div>
            
        </div>
        <div className='w-full h-[50vh] bg-[#f4efde] flex justify-center items-center'>
        <div className="w-[25%] h-[100%] mr-[50px]  bg-none flex flex flex-col items-center ">
            <h2 className='text-4xl'>PREMIUM YARNS</h2>
            <div className='w-[60%] h-px bg-black mt-[20px]'></div>
            <h4 className='mt-[20px]'>From the Andes in Peru to South of Beijing, we scoured the globe to find yarns that are both animal-friendly and of the upmost quality. Alpaca, mink, and recycled silk are just some of the fibers we have in our arsenal. When it comes to your cat's comfort, we don't play dice.</h4>
        </div>
        <div className="w-[25%] h-[100%]  bg-none  flex flex flex-col items-center">
            <h2 className='text-4xl'>CUSTOM FIT</h2>
            <div className='w-[60%] h-px bg-black mt-[20px]'></div>
            <h4 className='mt-[20px]'>Fat cat, skinny cat, small cat, tall cat – there's a CatScarf for all. We're here to cater to your cat's specific needs. You tell us your cat's measurements and we craft your loved one a scarf that is not only fashionable and made with love, but has an impeccable fit.</h4>
        </div>
        <div className="w-[25%] h-[100%] ml-[50px] bg-none flex flex flex-col items-center">
            <h2 className='text-4xl'>KNIT BY HAND</h2>
            <div className='w-[60%] h-px bg-black mt-[20px]'></div>
            <h4 className='mt-[20px]'>Each scarf is painstakingly knit by hand for the cat it was purchased for. We understand how important your cat is and what they deserve. Hours are spent clacking away, knitting until the scarf is flawless. Not all scarves make the cut; we accept nothing less than perfection.</h4>
        </div>
        </div>
      
        
        
        

    </div>
    
  )
}

export default HighFashion