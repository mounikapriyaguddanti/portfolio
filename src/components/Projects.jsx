// Projects.jsx
import React from 'react';

const Projects = () => {
  return (
    <div className="bg-lavender-900 text-black py-20">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold mb-8">My Projects</h2>
        
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row items-center md:space-x-4">
            <div className="md:w-1/3">
              <h3 className="text-2xl font-semibold mb-4">Tribute website</h3>
              <a
                href="https://tribute-site-qs3m.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-300"
              >
                Visit Website
              </a>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg mb-4">
                "Discover the legacy of APJ Abdul Kalam through our React-based tribute website. Dive into his remarkable journey from a scientist to the President of India. Explore his achievements, inspirational quotes, and lasting impact on education and innovation."
              </p>
              <p className="text-lg mb-4">
                Experience the essence of APJ Abdul Kalam's life and contributions with our React tribute site. Featuring key milestones, inspiring quotes, and a visually engaging design, delve into the legacy of India's Missile Man. Explore, learn, and be inspired.
              </p>
            </div>
          </div>
          <hr/>
          <div className="flex flex-col md:flex-row items-center md:space-x-4">
            <div className="md:w-1/3">
              <h3 className="text-2xl font-semibold mb-4">Grocery App</h3>
              <a
                href="https://grocery-app-phi-eight.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-300"
              >
                Visit Website
              </a>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg mb-4">
                React-based ecommerce site for groceries offers a seamless shopping experience. With a user-friendly interface, customers can easily browse, search, and purchase a wide range of grocery items.
              </p>
              <p className="text-lg mb-4">
                Shop for all your grocery needs effortlessly on our React-powered ecommerce platform. Browse through a diverse selection of products, enjoy smooth checkout processes, and experience.
              </p>
            </div>
          </div>
          <hr/>
          <div className="flex flex-col md:flex-row items-center md:space-x-4">
            <div className="md:w-1/3">
              <h3 className="text-2xl font-semibold mb-4">Expense tracker</h3>
              <a
                href="https://expense-tracker-via1.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-300"
              >
                Visit Website
              </a>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg mb-4">
                React-based expense tracker simplifies financial management. With intuitive interfaces, users can effortlessly track expenses, categorize transactions, and analyze spending patterns. Through responsive design and seamless integration, it offers a convenient solution for individuals to monitor their finances effectively.
              </p>
              <p className="text-lg mb-4">
                Take control of your finances with our React expense tracker. Easily record expenses, set budgets, and visualize spending trends for better financial management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;