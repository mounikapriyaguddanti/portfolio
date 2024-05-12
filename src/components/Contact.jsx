import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-800 py-20">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold text-white mb-8">Contact me!</h2>
        <p className="text-center text-lg text-gray-400 mb-8">
          For inquiries, please email me at{' '}
          <a href="mailto:mounikapriyaguddanti@gmail.com" className="text-white hover:text-gray-300">
            mounikapriyaguddanti@gmail.com
          </a>
          . I'll get back to you as soon as possible.
        </p>

        {/* Add your social media links here */}
        <div className="flex justify-center space-x-4 mb-8">
        <a href="  https://www.linkedin.com/in/mounika-priya-g-7a230728b " className="text-gray-600 hover:text-red-600">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://www.instagram.com/mounika___28?igsh=MWY1NGVnMm16MnBzbQ==" className="text-gray-600 hover:text-red-600">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="https://github.com/mounikapriyaguddanti" className="text-gray-600 hover:text-red-600">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a href="https://www.facebook.com/mounikapriya.guddanti?mibextid=ZbWKwL" className="text-gray-600 hover:text-red-600">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
        </div>

        {/* Add a contact form or additional information here */}
      </div>
    </div>
  );
};

export default Contact;