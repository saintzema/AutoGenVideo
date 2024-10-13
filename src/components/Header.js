import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CogIcon } from '@heroicons/react/solid';

const Header = ({ isLoggedIn, onLogout }) => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <motion.div whileHover={{ scale: 1.05 }}>
            <svg className="w-8 h-8 text-purple-600 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
              <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
            </svg>
          </motion.div>
          <span className="text-xl font-bold text-purple-600">AutoGenVid.ai</span>
        </Link>
        <nav className="flex items-center">
          <Link to="/pricing">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-4 py-2 rounded-full mr-4 flex items-center shadow-lg hover:bg-purple-700 transition duration-300"
            >
              <CogIcon className="w-5 h-5 mr-2" />
              Upgrade
            </motion.button>
          </Link>
          {isLoggedIn ? (
            <>
              <Link to="/dashboard">
                <motion.span 
                  className="text-purple-600 hover:text-purple-800 mx-3 font-medium"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Dashboard
                </motion.span>
              </Link>
              <Link to="/affiliates">
                <motion.span
                  className="text-purple-600 hover:text-purple-800 mx-3 font-medium"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Affiliates
                </motion.span>
              </Link>
              <motion.span
                onClick={onLogout}
                className="text-purple-600 hover:text-purple-800 mx-3 font-medium cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Logout
              </motion.span>
            </>
          ) : (
            <>
              <Link to="/signup">
                <motion.span
                  className="text-purple-600 hover:text-purple-800 mx-3 font-medium"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Sign Up
                </motion.span>
              </Link>
              <Link to="/login">
                <motion.span
                  className="text-purple-600 hover:text-purple-800 mx-3 font-medium"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Sign In
                </motion.span>
              </Link>
            </>
          )}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;