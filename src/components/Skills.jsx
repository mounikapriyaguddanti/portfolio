// Skills.jsx
import React from 'react';

const Skills = () => {
  return (
    <div className="bg-gray-800 text-white py-20">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="text-center">
            <div className="bg-red-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fab fa-python fa-3x"></i>
            </div>
            <h3 className="text-xl font-semibold">Python</h3>
          </div>
          <div className="text-center">
            <div className="bg-red-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fab fa-html5 fa-3x"></i>
            </div>
            <h3 className="text-xl font-semibold">HTML</h3>
          </div>
          <div className="text-center">
            <div className="bg-red-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fab fa-css3-alt fa-3x"></i>
            </div>
            <h3 className="text-xl font-semibold">CSS</h3>
          </div>
          <div className="text-center">
            <div className="bg-red-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fab fa-js fa-3x"></i>
            </div>
            <h3 className="text-xl font-semibold">JavaScript</h3>
          </div>
          <div className="text-center">
            <div className="bg-red-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fab fa-react fa-3x"></i>
            </div>
            <h3 className="text-xl font-semibold">React</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;