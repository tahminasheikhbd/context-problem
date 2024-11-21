/** @format */
import { Link } from "@tanstack/react-router";

import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

const Header = () => {
  const {count} = useContext(CartContext)
  console.log({count})
  return (
    <header className=' py-4 '>
      <div className='container flex items-center'>
        <div className='flex-1'>
          <Link to='/'>
            <img src='/logo.png' alt='' className='w-[50px]  ' />
          </Link>
        </div>

        <ul className='flex gap-8 items-center '>
          <Link
            to='/'
            className='font-medium [&.active]:text-teal-500 relative  before:bg-teal-500 before:h-[2px]  before:absolute before:top-full before:transition before:duration-300ms  before:scale-x-0 before:scale-y-100 1 [&.active]:before:scale-100 before:origin-right [&.active]:before:origin-left  before:bottom-0 before:left-0  text-sm  py-2   dark:bg-transparent before:w-full '>
            HOME
          </Link>
          <Link
            to='/about'
            className='font-medium [&.active]:text-teal-500 relative  before:bg-teal-500  before:h-[2px]  before:absolute before:top-full before:transition before:duration-300ms  before:scale-x-0 before:scale-y-100 1 [&.active]:before:scale-100 before:origin-right [&.active]:before:origin-left  before:bottom-0 before:left-0  text-sm  py-2   dark:bg-transparent before:w-full '>
            <p>ABOUT</p>
          </Link>
          <Link
            to='/services'
            className='font-medium [&.active]:text-teal-500 relative  before:bg-teal-500 before:h-[2px]  before:absolute before:top-full before:transition before:duration-300ms  before:scale-x-0 before:scale-y-100 1 [&.active]:before:scale-100 before:origin-right [&.active]:before:origin-left  before:bottom-0 before:left-0  text-sm  py-2   dark:bg-transparent before:w-full '>
            <p>SERVICES</p>
          </Link>
          <Link
            to='/contact'
            className='font-medium [&.active]:text-teal-500 relative  before:bg-teal-500  before:h-[2px]  before:absolute before:top-full before:transition before:duration-300ms  before:scale-x-0 before:scale-y-100  [&.active]:before:scale-100 before:origin-right [&.active]:before:origin-left  before:bottom-0 before:left-0  text-sm  py-2   dark:bg-transparent before:w-full '>
            <p>CONTACT</p>
          </Link>
        </ul>
        <div className='flex-1 flex gap-2 items-center justify-end'>
          <Button size='icon' variant='outline' className='border-none'>
            <ModeToggle />
          </Button>
          <Button variant='ghost'>Login</Button>
          <Button variant='primary'>Get Started</Button>
          <Button size='icon' variant='outline'>
            <AiOutlineShoppingCart />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
