import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Heart, Coins } from 'lucide-react';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-gratitude-50 to-wellness-50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
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
          className="absolute top-40 right-10 w-72 h-72 bg-gratitude-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
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
        <motion.div
          className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-wellness-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-primary-200 mb-8"
          >
            <Sparkles className="h-4 w-4 text-gratitude-500" />
            <span className="text-sm font-medium text-gray-700">
              Introducing Web3 Gratitude Rewards
            </span>
            <Coins className="h-4 w-4 text-primary-600" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Transform Your
            <br />
            <span className="bg-gradient-to-r from-primary-600 via-gratitude-600 to-wellness-600 bg-clip-text text-transparent">
              Gratitude Practice
            </span>
            <br />
            Into Rewards
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed"
          >
            Join the world's first Web3 gratitude platform. Earn{' '}
            <span className="font-semibold text-primary-600">IKE Coins</span> for your daily 
            gratitude practice, connect with a mindful community, and build lasting habits 
            that transform your wellbeing.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
          >
            <motion.button
              className="group bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 border border-primary-600"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 25px 50px -12px rgba(34, 197, 94, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Start Your Gratitude Journey</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
            
            <motion.button
              className="group bg-white/90 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 flex items-center space-x-2"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: 'rgba(255, 255, 255, 0.95)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Watch Demo</span>
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <motion.div
                className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                10K+
              </motion.div>
              <div className="text-gray-600 font-medium">Grateful Users</div>
            </div>
            <div className="text-center">
              <motion.div
                className="text-3xl sm:text-4xl font-bold text-gratitude-600 mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                1M+
              </motion.div>
              <div className="text-gray-600 font-medium">IKE Coins Earned</div>
            </div>
            <div className="text-center">
              <motion.div
                className="text-3xl sm:text-4xl font-bold text-wellness-600 mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                500K+
              </motion.div>
              <div className="text-gray-600 font-medium">Gratitude Entries</div>
            </div>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-1/4 left-10 hidden lg:block"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-primary-200">
              <Heart className="h-8 w-8 text-primary-600 fill-current mx-auto mb-2" />
              <div className="text-sm font-medium text-gray-700">Daily Practice</div>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-1/3 right-10 hidden lg:block"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gratitude-200">
              <Coins className="h-8 w-8 text-gratitude-600 mx-auto mb-2" />
              <div className="text-sm font-medium text-gray-700">Earn Rewards</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;