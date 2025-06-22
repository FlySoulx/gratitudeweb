import React from 'react';
import { motion } from 'framer-motion';
import { Coins, User } from 'lucide-react';
import { Screen } from '../App';

interface HeaderProps {
  onNavigate: (screen: Screen) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.button
            onClick={() => onNavigate('landing')}
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <span className="text-gray-900 font-bold text-sm">I</span>
              </div>
            </div>
            <span className="text-xl font-bold text-white">IKE Coin</span>
          </motion.button>

          {/* User Profile */}
          <motion.button
            onClick={() => onNavigate('account')}
            className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <User className="h-4 w-4 text-gray-300" />
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;