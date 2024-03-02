"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  userName: string;
  userEmail: string;
  password: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    userName: "",
    userEmail: "",
    password: ""
  });

  const [emailError, setEmailError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    if (name === "userEmail") {
      validateEmail(value);
    }
  };

  const validateEmail = (email: string): void => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!emailError) {
      console.log("Form Data:", formData);
    } else {
      console.log("Please correct the errors in the form.");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className='flex flex-col bg-transparent border-2 border-[#4b573f] gap-2 font-medium justify-center items-center p-10 shadow rounded'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='flex flex-col gap-1'>
        <label>UserName:</label>
        <input
          type='text'
          name='userName'
          required
          placeholder='Enter your userName'
          className='w-full px-3 py-2 rounded shadow outline-none focus:ring-1 focus:ring-blue-700'
          value={formData.userName}
          onChange={handleChange}
        />
      </div>
      <div className='flex flex-col gap-1'>
        <label>Email:</label>
        <input
          type='email'
          name='userEmail'
          required
          placeholder='Enter your email'
          className={`w-full px-3 py-2 text-black rounded shadow outline-none focus:ring-1 focus:ring-blue-700 ${emailError ? 'border-red-500' : ''}`}
          value={formData.userEmail}
          onChange={handleChange}
        />
        {emailError && <p className="text-red-500">{emailError}</p>}
      </div>
      <div className='flex flex-col gap-1'>
        <label>Password:</label>
        <input
          type='password'
          name='password'
          required
          placeholder='Enter your password'
          className='w-full px-3 py-2 rounded shadow outline-none focus:ring-1 focus:ring-blue-700'
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button
        className='flex mt-3 px-4 py-2 rounded shadow font-medium bg-[#4b573f] text-white'
        type='submit'
      >
        Submit
      </button>
    </motion.form>
  );
};

export default Form;
