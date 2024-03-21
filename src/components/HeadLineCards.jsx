import React from 'react'

const HeadLineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3  gap-6'>
    {/* Card */}
        <div className='rounded-xl relative'>
        {/* overlay */}
           <div className='absolute w-full h-full bg-black/50 text-white rounded-xl'>
             <p className='font-bold text-2xl px-2 pt-4'>Sun's Out BOGO's Out Too</p>
             <p className='px-2 mt-1'>Through 8/26</p>
             <button className='border-white bg-white text-black rounded-xl mx-2 absolute   px-3 py-2 mt-1 lg:mt-12'>Order Now</button>
           </div>
           <img  className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
           src='https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/'/>
        </div>
        <div className='rounded-xl relative'>
        {/* overlay */}
           <div className='absolute w-full h-full bg-black/50 text-white rounded-xl'>
             <p className='font-bold text-2xl px-2 pt-4'>Newly Open Resturants</p>
             <p className='px-2 mt-1'>Added Daily</p>
             <button className='border-white bg-white text-black rounded-xl mx-2 absolute  px-3 py-2 mt-1 lg:mt-12'>Order Now</button>
           </div>
           <img  className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
           src='https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/'/>
        </div>
         {/* Card */}
         <div className='rounded-xl relative'>
        {/* overlay */}
           <div className='absolute w-full h-full bg-black/50 text-white rounded-xl'>
             <p className='font-bold text-2xl px-2 pt-4'>We Delever Desserts Too</p>
             <p className='px-2 mt-1'>Through 8/26</p>
             <button className='border-white bg-white text-black rounded-xl mx-2 absolute  px-3 py-2 mt-1 lg:mt-12'>Order Now</button>
           </div>
           <img  className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
           src='https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/'/>
        </div>
    </div>
  )
}

export default HeadLineCards