import React, { useState } from 'react'
import { Data } from './Data'

const Food = () => {
    // console.log(Data)
    const [Foods, setFoods] =useState(Data)
    const filtertype = (catagary) =>{
        setFoods(Data.filter((item) =>{
            return item.catagary === catagary
        }))
    }
    const filterPrice =(Price) =>{
        setFoods(Data.filter((item) =>{
            return item.Price === Price
        }))
    }
  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12'>
        <h1 className='text-4xl text-orange-600 font-extrabold text-center'>TOP RATED MENU ITEMS</h1>
        {/* Filter row */}
        <div className='flex flex-col lg:flex-row justify-between'>
            {/* Filter Type */}
            <div>
            <p className='font-bold text-gray-700'>Filter Types</p>
            <div className='flex justify-between flex-wrap'>
                <button onClick={() => setFoods(Data)} className='m-1 border border-orange-600 text-orange-600 px-2 py-1 rounded-xl hover:bg-orange-600 hover:text-white'>All</button>
                <button onClick={ () =>filtertype('Burgur')} className='m-1 border border-orange-600 text-orange-600 px-2 py-1 rounded-xl hover:bg-orange-600 hover:text-white'>Burgur</button>
                <button onClick={() => filtertype('Pizza')} className='m-1 border border-orange-600 text-orange-600 px-2 py-1 rounded-xl hover:bg-orange-600 hover:text-white'>Pizza</button>
                <button onClick={() =>filtertype('salads')} className='m-1 border border-orange-600 text-orange-600 px-2 py-1 rounded-xl hover:bg-orange-600 hover:text-white'>Salads</button>
                <button onClick={() =>filtertype('chicken')} className='m-1 border border-orange-600 text-orange-600 px-2 py-1 rounded-xl hover:bg-orange-600 hover:text-white'>Chicken</button>
            </div>
            </div>
                {/* Filter Price */}
                <div>
                <p className='font-bold text-gray-700'>Filter Prices</p>
            <div className='flex justify-between max-w-[390px]'>
                <button onClick={() =>filterPrice('$')} className='m-1 border border-orange-600 text-orange-600 px-2 py-1 rounded-xl hover:bg-orange-600 hover:text-white'>$</button>
                <button onClick={() =>filterPrice('$$')} className='m-1 border border-orange-600 text-orange-600 px-2 py-1 rounded-xl hover:bg-orange-600 hover:text-white'>$$</button>
                <button onClick={() =>filterPrice('$$$')} className='m-1 border border-orange-600 text-orange-600 px-2 py-1 rounded-xl hover:bg-orange-600 hover:text-white'>$$$</button>
                <button onClick={() =>filterPrice('$$$$')} className='m-1 border border-orange-600 text-orange-600 px-2 py-1 rounded-xl hover:bg-orange-600 hover:text-white'>$$$$</button>
            </div>
                </div>
              </div>
              {/* DisplayFood */}
           <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
           {Foods.map((items,index) =>(
            <div key={index} className='border shadow-lg hover:scale-105 duration-300 rounded-lg'>
                <img src={items.image} alt={items.name}
                className='w-full h-[200px] object-cover rounded-t-lg' />
                <div className='flex justify-between px-2 py-4'>
                    <p>{items.name}</p>
                    <p>
                        <span className='bg-orange-500 text-white p-1 rounded-full'>{items.Price}</span>
                    </p>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Food