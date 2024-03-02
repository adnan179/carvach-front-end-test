"use client";
import React from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';
import { Dancing_Script } from "next/font/google";
import { navLinks } from '@/lib/data'; 

interface NavLink {
  name: string;
  hash: string;
}

const genos = Dancing_Script({ subsets: ["latin"] });

const Header: React.FC = () => {
  
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-black/40 shadow-lg sm:top-6 sm:h-[3.25rem] sm:w-[35rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          <motion.li className='text-[#4b573f] font-bold text-sm sm:text-2xl justify-center items-center relative flex h-3/4'
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}>
            <h1 className={`${genos.className} hover:scale-105 duration-300 ease-in-out transition cursor-pointer`} >
            CarVach
            </h1>  
          </motion.li>
          {navLinks.map((link: NavLink) => ( // Add type annotation for link
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className="flex w-full items-center justify-center px-3 py-3 hover:text-white transition"
                href={link.hash}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
