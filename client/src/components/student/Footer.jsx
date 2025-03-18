import React from 'react'

const Footer = () => {
  return (
    <>
   
    <footer className="bg-gray-900 text-white py-8 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section - Logo & About */}
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span className="text-blue-500 text-3xl">⚡</span> Edemy
          </h2>
          <p className="text-gray-400 mt-2 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        {/* Middle Section - Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About us</a></li>
            <li><a href="#" className="hover:text-white">Contact us</a></li>
            <li><a href="#" className="hover:text-white">Privacy policy</a></li>
          </ul>
        </div>

        {/* Right Section - Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Subscribe to our newsletter</h3>
          <p className="text-gray-400 text-sm mb-3">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex items-center bg-gray-800 rounded-lg p-1">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none flex-grow p-2 text-sm placeholder-gray-400 text-white"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-800 pt-4">
        © 2024 Edemy. All Rights Reserved.
      </div>
    </footer>
 
    </>
  )
}

export default Footer
