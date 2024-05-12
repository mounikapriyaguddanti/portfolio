import React from 'react';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Hi, It's Me</h1>
          <h2 className="text-3xl font-semibold mb-4 text-red-600">Mounika Priya Guddanti</h2>
          <p className="text-lg mb-8 text-gray-600">
            Looking for a challenging role in a organization to use my technical, and management skills to grow the organization and learn about new trends.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/mounika-priya-g-7a230728b" className="text-gray-600 hover:text-red-600" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://www.instagram.com/mounika___28?igshid=MWY1NGVnMm16MnBzbQ==" className="text-gray-600 hover:text-red-600" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="https://github.com/mounikapriyaguddanti" className="text-gray-600 hover:text-red-600" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a href="https://www.facebook.com/mounikapriya.guddanti?mibextid=ZbWKwL" className="text-gray-600 hover:text-red-600" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
          </div>
        </div>
        <div className="lg:w-1/3 mt-8 lg:mt-0">
          <div className="image-container">
            <img src={profileImage} alt="Profile" className="w-full max-w-sm rounded-full border-4 border-red-500 image-effect" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;