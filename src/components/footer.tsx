"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  return (
    <AnimatePresence>
      <motion.footer
        initial={{ y: 50, opacity: 0 }} // Initial position and opacity
        animate={{ y: 0, opacity: 1 }} // Animation to move up and fade in
        exit={{ y: 50, opacity: 0 }} // Exit animation to move down and fade out
        transition={{ duration: 0.5 }} // Animation duration
        className="mt-10 px-4 text-center text-gray-500"
      >
        <small className="mb-2 block text-xs">
          &copy; 2024 Adnan Shaik. All rights reserved.
        </small>
        <p className="text-xs">
          <span className="font-semibold">About this website:</span> built with
          React & Next.js, TypeScript, Tailwind CSS,
          Framer Motion, Vercel hosting.
        </p>
      </motion.footer>
    </AnimatePresence>
  );
};

export default Footer;
