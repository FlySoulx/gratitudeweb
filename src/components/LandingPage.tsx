import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Coins, ArrowRight, Sparkles } from 'lucide-react';
import { Screen } from '../App';

interface LandingPageProps {
  onGetStarted: () => void;
  onNavigate: (screen: Screen) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted, onNavigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-200 via-teal-100 to-cyan-200">
      {/* Side Panels with Mobile PWA Container */}
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-sm w-full bg-gray-900 text-white rounded-3xl shadow-2xl overflow-hidden border border-teal-300/30">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between p-6"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <span className="text-gray-900 font-bold">IKE</span>
              </div>
              <div>
                <div className="text-lg font-bold">The Gratitude Web</div>
                <div className="text-xs text-teal-400">Powered by IKE Coin</div>
              </div>
            </div>
            <motion.button
              onClick={onGetStarted}
              className="bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded-full text-sm font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </motion.header>

          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="px-6 py-8 text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center space-x-2 bg-teal-500/20 border border-teal-500/30 rounded-full px-4 py-2 mb-6"
            >
              <Coins className="h-4 w-4 text-teal-400" />
              <span className="text-sm font-medium text-teal-300">
                Introducing Web3 Gratitude Rewards from IKE Coin
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl font-bold mb-4 leading-tight"
            >
              Give Ikes, Not Likes.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 mb-8 leading-relaxed"
            >
              The World's First Gratitude Coin. Tip any creator, website, or person to build a public record of human excellence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-4 mb-12"
            >
              <motion.button
                onClick={onGetStarted}
                className="w-full bg-teal-500 hover:bg-teal-600 py-4 rounded-full font-semibold transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Join the Movement
              </motion.button>
              
              <motion.button
                className="w-full bg-gray-800 hover:bg-gray-700 border border-gray-600 py-4 rounded-full font-semibold transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-3 gap-4"
            >
              <div className="text-center">
                <div className="text-sm text-gray-400 mb-1">Give Real</div>
                <div className="text-lg font-bold text-teal-400">Value</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-400 mb-1">A New</div>
                <div className="text-lg font-bold text-yellow-400">Gratitude Economy</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-400 mb-1">Permanently on</div>
                <div className="text-lg font-bold text-green-400">Algorand</div>
              </div>
            </motion.div>
          </motion.section>

          {/* Mission Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="px-6 py-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-teal-500/20 to-blue-500/20 border border-teal-500/30 rounded-2xl p-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Heart className="h-6 w-6 text-teal-400 fill-current" />
                <h2 className="text-xl font-bold">Our Mission</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We're building a world where gratitude has real value. Every IKE Coin represents 
                genuine appreciation, creating a permanent record of human excellence on the blockchain.
              </p>
            </motion.div>
          </motion.section>

          {/* Features Preview */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="px-6 py-8"
          >
            <h3 className="text-xl font-bold mb-6 text-center">How It Works</h3>
            
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-800 border border-gray-700 rounded-xl p-4 flex items-center space-x-4"
              >
                <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <div className="font-medium">Send Gratitude</div>
                  <div className="text-sm text-gray-400">Tip creators with IKE Coins</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gray-800 border border-gray-700 rounded-xl p-4 flex items-center space-x-4"
              >
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-gray-900 font-bold">
                  2
                </div>
                <div>
                  <div className="font-medium">Build Records</div>
                  <div className="text-sm text-gray-400">Create permanent appreciation</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gray-800 border border-gray-700 rounded-xl p-4 flex items-center space-x-4"
              >
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <div className="font-medium">Earn Value</div>
                  <div className="text-sm text-gray-400">Receive IKE for excellence</div>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Footer CTA */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="px-6 py-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-6 text-center"
            >
              <h3 className="text-lg font-bold mb-3">Ready to Start?</h3>
              <p className="text-gray-400 text-sm mb-6">
                Join thousands building the future of gratitude
              </p>
              <motion.button
                onClick={onGetStarted}
                className="w-full bg-gradient-to-r from-teal-500 to-blue-500 py-3 rounded-full font-semibold flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Get Started Now</span>
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </motion.div>
          </motion.section>

          {/* Footer Links */}
          <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="px-6 py-8 border-t border-gray-800"
          >
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
              <motion.button
                onClick={() => onNavigate('community-guidelines')}
                className="hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Guidelines
              </motion.button>
              <button className="hover:text-white transition-colors">
                Privacy
              </button>
              <button className="hover:text-white transition-colors">
                Terms
              </button>
            </div>
            <div className="text-center text-xs text-gray-500 mt-4">
              © 2025 The Gratitude Web
            </div>
          </motion.footer>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;