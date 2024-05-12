import React, { useEffect, useRef } from 'react';

const Header = () => {
  const headerNameRef = useRef(null);

  useEffect(() => {
    const handleTypeWriter = () => {
      const headerName = headerNameRef.current;
      const textArray = headerName.textContent.split('');

      let index = 0;
      const typeWriter = () => {
        if (index < textArray.length) {
          headerName.textContent = textArray.slice(0, index + 1).join('');
          index++;
          setTimeout(typeWriter, 100);
        } else {
          index = 0;
          headerName.textContent = '';
          setTimeout(typeWriter, 1000);
        }
      };

      typeWriter();
    };

    handleTypeWriter();
  }, []);

  const handleNavClick = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-gray-800 text-white py-6">
      <nav className="container mx-auto flex items-center">
        <div className="text-3xl font-bold mr-auto">
          <span className="typewriter-effect" ref={headerNameRef}>
            MOUNIKA PRIYA GUDDANTI
          </span>
        </div>
        <ul className="flex space-x-8 text-lg">
          <li>
            <a href="#" onClick={(e) => handleNavClick(e, 'hero')} className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => handleNavClick(e, 'skills')} className="hover:text-gray-400">
              Skills
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => handleNavClick(e, 'Projects')} className="hover:text-gray-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => handleNavClick(e, 'Contact')} className="hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;