import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Users, Zap, Award, Shield, TrendingUp } from 'lucide-react';
import { Screen } from '../App';
import Hero from './Hero';
import Features from './Features';
import HowItWorks from './HowItWorks';
import IKECoinSection from './IKECoinSection';
import Community from './Community';
import Footer from './Footer';

interface LandingPageProps {
  onGetStarted: () => void;
  onNavigate: (screen: Screen) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted, onNavigate }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Heart className="h-8 w-8 text-primary-600 fill-current" />
                <div className="absolute -top-1 -right-1">
                  <div className="w-4 h-4 bg-gratitude-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">C</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">Gratitude Web</div>
                <div className="text-xs text-primary-600 font-medium">Powered by IKE Coin</div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
                How It Works
              </a>
              <a href="#ike-coin" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
                IKE Coin
              </a>
              <a href="#community" className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
                Community
              </a>
              <motion.button
                onClick={() => onNavigate('community-guidelines')}
                className="text-gray-600 hover:text-primary-600 font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Guidelines
              </motion.button>
            </div>

            {/* CTA Button */}
            <motion.button
              onClick={onGetStarted}
              className="bg-gradient-to-r from-primary-600 to-gratitude-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <Hero />

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-gratitude-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* IKE Coin Logo */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img 
                src="/Ikecoin_540px.png" 
                alt="IKE Coin" 
                className="w-32 h-32 object-contain"
              />
            </div>
          </motion.div>

          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              The Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We believe gratitude is the foundation of human flourishing. The Gratitude Web transforms 
              your daily practice of appreciation into tangible rewards, creating a positive feedback 
              loop that benefits both individuals and communities. Through IKE Coin, we're building 
              the world's first economy powered by genuine human connection and mindful appreciation.
            </p>
          </motion.div>

          {/* Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <div className="mb-4">
                <div className="text-sm text-gray-500 mb-2">Give real value first, then</div>
                <h3 className="text-2xl font-bold text-primary-600">A New Gratitude Economy</h3>
              </div>
              <p className="text-gray-600">
                Transform appreciation into measurable value that flows through communities, 
                creating sustainable positive impact.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-gratitude-500 to-gratitude-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-white fill-current" />
              </div>
              <div className="mb-4">
                <div className="text-sm text-gray-500 mb-2">Introducing Web3 Gratitude Rewards</div>
                <h3 className="text-2xl font-bold text-gratitude-600">from IKE Coin</h3>
              </div>
              <p className="text-gray-600">
                Earn cryptocurrency rewards for authentic gratitude practices, mindful engagement, 
                and positive community contributions.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-wellness-500 to-wellness-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div className="mb-4">
                <div className="text-sm text-gray-500 mb-2">Permanently on</div>
                <h3 className="text-2xl font-bold text-wellness-600">Algorand</h3>
              </div>
              <p className="text-gray-600">
                Built on Algorand's carbon-negative blockchain, ensuring your gratitude 
                contributions are secure, sustainable, and permanent.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* How It Works Section */}
      <HowItWorks />

      {/* IKE Coin Section */}
      <IKECoinSection />

      {/* Community Section */}
      <Community />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;