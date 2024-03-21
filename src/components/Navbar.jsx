import React, {useState} from 'react'
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { TbTruckDelivery } from "react-icons/tb";
import { FaHeart,FaWallet, FaQuestionCircle, FaUserFriends } from "react-icons/fa";
import { BsFillSaveFill } from "react-icons/bs";
const Navbar = () => {
    const [Nav, setNav] = useState(false);
  return (
   <div className='max-w-[1640px] mx-auto flex p-4 justify-between items-center'>
    <div  className='flex items-center'>
     <div onClick={() => setNav(!Nav)} className='cursor-pointer'>
         <AiOutlineMenu size={30} />
     </div>
     <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
        Best <span className='font-bold'>Eats</span>
     </h1>
     <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
        <p className='bg-black text-white rounded-full p-2'>Delevry</p>
        <p className='p-2'>Pick up</p>
     </div>
    </div>
    {/* Search Input */}
    <div className='bg-gray-200 flex items-center rounded-full px-2 
    w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} />
        <input className='bg-transparent focus:outline-none w-full p-2'
         type='text' placeholder='Search Food' />
    </div>
    <button className='bg-black text-white hidden
     md:flex items-center py-3 px-4 rounded-full'>
    <TfiShoppingCartFull size={20} className='mr-2'/> Cart
    </button>
    {/* Mobile Menu */}
    {/* overlay */}
    {Nav ?  <div className=' fixed bg-black/80 w-full h-screen z-10 top-0 left-0'>
    </div>:''}
   
    {/* side Drawer Menu */}
    <div className={Nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' 
    : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>

    <AiOutlineClose  onClick={() => setNav(!Nav)} size={30} className='absolute right-4 top-4 cursor-pointer' />
    <h2 className='text-2xl p-4'>
        Best <span className='font-bold'>Eats</span>
    </h2>
    <nav>
        <ul className='flex flex-col p-4 text-gray-800'>
            <li className='text-2xl py-4 flex'>
            <TbTruckDelivery size={25}
             className='mr-4 mt-1' />Orders</li>

            <li className='text-2xl py-4 flex'>
            <FaHeart size={25} 
            className='mr-4 mt-1' />Favorites</li>

            <li className='text-2xl py-4 flex'>
            <FaWallet size={25} 
            className='mr-4' />Wallet</li>

            <li className='text-2xl py-4 flex'>
            <FaQuestionCircle size={25} 
            className='mr-4 mt-1'  />Help</li>

            <li className='text-2xl py-4 flex'>
            <AiFillTag size={25} 
            className='mr-4 mt-1' />Promtions</li>


            <li className='text-2xl py-4 flex'>
            <BsFillSaveFill size={25} 
            className='mr-4 mt-1' />Best Ones</li>
            
            <li className='text-2xl py-4 flex'>
            <FaUserFriends size={25} 
            className='mr-4 mt-1' />Invite friends</li>
        </ul>
    </nav>
    </div>
   </div>
  )
}

export default Navbar