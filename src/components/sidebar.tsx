"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { navLinks } from '@/lib/data';
import Link from 'next/link';
import right from "../../public/rightArrow-icon.png";
import left from "../../public/leftArrow-icon.png";
import Image from 'next/image';

interface NavLink {
  name: string;
  hash: string;
}

const Sidebar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleSidebar = (): void => {
    setIsVisible(prevState => !prevState);
  };

  return (
    <div className="fixed top-0 left-0 z-[1000]">
      <motion.aside
        className={`w-[300px] h-screen bg-[#4b573f]/80 rounded shadow-xl text-white flex justify-center ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}
        transition={{ duration: 0.5, ease: 'easeInOut' }} // Adjust duration and add easing
      >
        <div className="flex flex-col gap-5 mt-10">
          <div className="flex">
            <input type="text" placeholder="Search..." className="w-full outline-none px-4 py-2 rounded shadow-xl bg-black/85 text-white" />
          </div>
          
          <nav className="flex flex-col gap-3 items-center">
            {navLinks && navLinks.map((link: NavLink, index: number) => (
              <Link href={link.hash} key={index}>
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </motion.aside>

      <motion.button
        className="absolute top-1/2 transform -translate-y-1/2 bg-transparent border-none text-white"
        onClick={toggleSidebar}
        style={{ left: isVisible ? "10px" : "0" }}
        whileTap={{ scale: 0.9 }}
      >
        <Image src={isVisible ? left : right} alt="arrow icon" width={24} height={24} />
      </motion.button>
    </div>
  );
}

export default Sidebar;
