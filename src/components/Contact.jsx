import React from 'react'
import {FaEnvelope, FaMapMarkedAlt, FaPhone} from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='bg-black text-white py-20' id='contact'>
          <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>Contact Me</h2>
            <div className='flex flex-col md:flex-row items-center md:space-x-12'>
              
              <div className='flex-1'>
                <h3 className='text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-orange-500 mb-4'>Let's Talk</h3>
                <p>I'm open to discussing web development projects or partenership opportunities.</p>
                <div className='mb-4 mt-8'>
                  <FaEnvelope className='inline-block text-red-400 mr-2'></FaEnvelope>
                  <a href="mailto:aashish123@gmail.com" className='hover:underline'>
                    sanchijamkar01@gmail.com
                  </a>
                </div>
                <div className='mb-4'>
                  <FaPhone className='inline-block text-blue-400 mr-2'></FaPhone>
                  <span>+91 8624046413</span>
                </div>
                <div className='mb-4'>
                  <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
                  <span> Bodhan Nagar, latur</span>
                </div>
                
                
              </div>
              <div className='flex-1 w-full'>
                <form className='space-y-4' action="/" method='post'>
                  <div>
                    <label htmlFor="name" className='block mb-2'>Your Name</label>
                    <input type="text" className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-orange-400' placeholder='Enter your name' />
                  </div>
                  <div>
                    <label htmlFor="email" className='block mb-2'>Email Address</label>
                    <input type="email" className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-orange-400' placeholder='Enter your email id' />
                  </div>
                  <div>
                    <label htmlFor="message" className='block mb-2'>Message</label>
                    <textarea type="text" className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-orange-400' placeholder='Enter your message' rows="5" />
                  </div>
                  <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send</button>
                
                </form>


              </div>
            </div>
          </div>
        </div>
        
        
  )

}

export default Contact