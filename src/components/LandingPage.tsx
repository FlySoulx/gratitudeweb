import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Users, Zap, Award, Shield, TrendingUp, Coins } from 'lucide-react';
import { Screen } from '../App';

interface LandingPageProps {
  onGetStarted: () => void;
  onNavigate: (screen: Screen) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted, onNavigate }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full top-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <span className="text-gray-900 font-bold">IKE</span>
              </div>
              <div>
                <div className="text-xl font-bold text-white">The Gratitude Web</div>
                <div className="text-xs text-teal-400 font-medium">Powered by IKE Coin</div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-teal-400 font-medium transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-300 hover:text-teal-400 font-medium transition-colors">
                How It Works
              </a>
              <a href="#community" className="text-gray-300 hover:text-teal-400 font-medium transition-colors">
                Community
              </a>
              <motion.button
                onClick={() => onNavigate('community-guidelines')}
                className="text-gray-300 hover:text-teal-400 font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Guidelines
              </motion.button>
            </div>

            {/* CTA Button */}
            <motion.button
              onClick={onGetStarted}
              className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-teal-500/20 rounded-full mix-blend-multiply filter blur-xl"
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-40 right-10 w-72 h-72 bg-yellow-500/20 rounded-full mix-blend-multiply filter blur-xl"
            animate={{
              x: [0, -30, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-teal-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-teal-500/30 mb-8"
          >
            <Coins className="h-4 w-4 text-teal-400" />
            <span className="text-sm font-medium text-teal-300">
              Web3 Gratitude Rewards
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Give Ikes, Not Likes.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed"
          >
            The World's First Gratitude Coin. Tip any creator, website, or person to build a public record of human excellence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
          >
            <motion.button
              onClick={onGetStarted}
              className="group bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 25px 50px -12px rgba(20, 184, 166, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Join the Movement</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
            
            <motion.button
              className="group bg-gray-800/50 backdrop-blur-sm text-gray-300 px-8 py-4 rounded-full font-semibold text-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 flex items-center space-x-2"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(31, 41, 55, 0.7)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Watch Demo</span>
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <motion.div
                className="text-3xl sm:text-4xl font-bold text-teal-400 mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                10K+
              </motion.div>
              <div className="text-gray-400 font-medium">Users</div>
            </div>
            <div className="text-center">
              <motion.div
                className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                1M+
              </motion.div>
              <div className="text-gray-400 font-medium">IKE Earned</div>
            </div>
            <div className="text-center">
              <motion.div
                className="text-3xl sm:text-4xl font-bold text-green-400 mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                500K+
              </motion.div>
              <div className="text-gray-400 font-medium">Gratitudes</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Everything You Need for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-yellow-400">
                {' '}Mindful Living
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover powerful features designed to make gratitude a rewarding part of your daily routine
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Daily Gratitude Practice',
                description: 'Build a sustainable gratitude habit with guided prompts, mood tracking, and personalized insights.',
                gradient: 'from-red-500 to-pink-500'
              },
              {
                icon: Coins,
                title: 'Earn IKE Coins',
                description: 'Get rewarded for your gratitude practice. Earn IKE Coins for daily entries and consistency.',
                gradient: 'from-yellow-500 to-orange-500'
              },
              {
                icon: Users,
                title: 'Grateful Community',
                description: 'Connect with like-minded individuals and inspire others in our supportive community.',
                gradient: 'from-blue-500 to-purple-500'
              },
              {
                icon: Zap,
                title: 'Instant Rewards',
                description: 'Redeem your IKE Coins for exclusive content, wellness products, and premium features.',
                gradient: 'from-green-500 to-teal-500'
              },
              {
                icon: Award,
                title: 'Achievement System',
                description: 'Unlock badges, climb leaderboards, and celebrate milestones on your gratitude journey.',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: Shield,
                title: 'Secure & Transparent',
                description: 'Built on blockchain technology ensuring complete transparency and security.',
                gradient: 'from-teal-500 to-blue-500'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  className="bg-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 h-full"
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className={`w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="h-7 w-7 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              How The
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-yellow-400">
                {' '}Gratitude Web{' '}
              </span>
              Works
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Start your rewarding gratitude practice in just four simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Join Our Community',
                description: 'Create your account and connect your wallet to start your gratitude journey.',
                icon: Users
              },
              {
                step: '02',
                title: 'Practice Daily Gratitude',
                description: 'Write daily gratitude entries and build a consistent mindfulness practice.',
                icon: Heart
              },
              {
                step: '03',
                title: 'Earn IKE Coins',
                description: 'Get rewarded with IKE Coins for your consistency and community engagement.',
                icon: Coins
              },
              {
                step: '04',
                title: 'Redeem & Share',
                description: 'Use your earned coins for premium features or share with other members.',
                icon: Award
              }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500/20 to-yellow-500/20 rounded-full mb-6 relative"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-yellow-400">
                    {step.step}
                  </span>
                </motion.div>

                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 bg-gray-800 rounded-2xl border border-gray-700 mb-6 group-hover:border-gray-600 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <step.icon className="h-10 w-10 text-teal-400" />
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Join Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-yellow-400">
                {' '}Grateful Community
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Connect with thousands of like-minded individuals on their gratitude journey
            </p>
          </motion.div>

          <motion.div
            className="text-center bg-gradient-to-r from-teal-500/20 to-yellow-500/20 rounded-3xl p-12 border border-teal-500/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Gratitude Journey?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our thriving community and start earning IKE Coins for your mindful practices today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.button
                onClick={onGetStarted}
                className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join the Community
              </motion.button>
              <motion.button
                className="border-2 border-teal-400 text-teal-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-400 hover:text-gray-900 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Features
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <span className="text-gray-900 font-bold text-sm">IKE</span>
              </div>
              <div className="text-xl font-bold text-white">The Gratitude Web</div>
            </div>
            <p className="text-gray-400 mb-8">
              Transform your daily gratitude practice into meaningful rewards.
            </p>
            <div className="text-gray-500 text-sm">
              © 2025 The Gratitude Web. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;