import React, { useEffect, useRef } from 'react';
import certificate1 from '../assets/certificate1.jpg'; // Replace with your actual image file
import certificate2 from '../assets/certificate2.jpg';
import certificate3 from '../assets/certificate3.jpg';
import certificate4 from '../assets/certificate4.jpg';

const Certifications = () => {
    const certificatesRef = useRef(null);
  
    useEffect(() => {
      const handleAnimation = () => {
        const certificates = certificatesRef.current;
        if (certificates) {
          const certificateElements = certificates.children;
          Array.from(certificateElements).forEach((certificate, index) => {
            setTimeout(() => {
              certificate.style.opacity = 1;
              certificate.style.transform = 'translateY(0)';
            }, 200 * (index + 1));
          });
        }
      };
  
      handleAnimation();
    }, []);
  
    return (

    <div className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">My Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={certificate1} alt="Certificate 1" className="w-full" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2"> Cloud Computing,NPTEL</h3>
              <p className="text-gray-600">Issued by: Swayam (IIT Kharagpur)</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={certificate2} alt="Certificate 2" className="w-full" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Machine Learning with Python</h3>
              <p className="text-gray-600">Issued by:Spypro Security Solutions Pvt.Ltd</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={certificate3} alt="Certificate 3" className="w-full" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Artifical Intelligence</h3>
              <p className="text-gray-600">Issued by: BIST Technologies Pvt.Ltd</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={certificate4} alt="Certificate 4" className="w-full" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Ethical Hacking, NPTEL</h3>
              <p className="text-gray-600">Issued by:Swayam (IIT Kharagpur) </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;