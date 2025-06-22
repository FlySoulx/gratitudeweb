import React from 'react';
import { motion } from 'framer-motion';
import { Coins, TrendingUp, Shield, Users, Zap, Award } from 'lucide-react';

const IKECoinSection: React.FC = () => {
  const coinFeatures = [
    {
      icon: TrendingUp,
      title: 'Deflationary Tokenomics',
      description: 'Limited supply with burn mechanisms to maintain value appreciation over time.'
    },
    {
      icon: Shield,
      title: 'Secure & Transparent',
      description: 'Built on blockchain technology ensuring complete transparency and security.'
    },
    {
      icon: Users,
      title: 'Community Governed',
      description: 'Holders participate in governance decisions shaping the future of the platform.'
    },
    {
      icon: Zap,
      title: 'Instant Transactions',
      description: 'Fast, low-cost transactions for seamless user experience and rewards.'
    }
  ];

  const stats = [
    { label: 'Total Supply', value: '1,000,000', suffix: 'IKE' },
    { label: 'Circulating Supply', value: '650,000', suffix: 'IKE' },
    { label: 'Holders', value: '10,000+', suffix: '' },
    { label: 'Daily Volume', value: '$50K+', suffix: '' }
  ];

  return (
    <section id="ike-coin" className="py-20 bg-gradient-to-br from-wellness-50 to-earth-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gratitude-200 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Coins className="h-6 w-6 text-gratitude-600" />
            <span className="text-lg font-semibold text-gray-700">IKE Coin</span>
            <Award className="h-5 w-5 text-primary-600" />
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            The Currency of
            <span className="bg-gradient-to-r from-gratitude-600 to-earth-600 bg-clip-text text-transparent">
              {' '}Gratitude
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            IKE Coin powers the entire Gratitude Web ecosystem, rewarding mindful practices 
            and creating real value from your daily gratitude journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Coin visualization */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              {/* Floating coin animation */}
              <motion.div
                className="relative mx-auto w-64 h-64 mb-8"
                animate={{ 
                  rotateY: [0, 360],
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gratitude-400 via-gratitude-500 to-gratitude-600 rounded-full shadow-2xl"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-gratitude-300 to-gratitude-500 rounded-full flex items-center justify-center">
                  <div className="text-white text-4xl font-bold">IKE</div>
                </div>
                
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-gratitude-400 to-gratitude-600 rounded-full blur-xl opacity-30"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity 
                  }}
                />
              </motion.div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center p-4 bg-gray-50 rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-2xl font-bold text-gratitude-600 mb-1">
                      {stat.value}
                      <span className="text-lg">{stat.suffix}</span>
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 bg-primary-500 text-white p-3 rounded-xl shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <TrendingUp className="h-6 w-6" />
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -left-4 bg-wellness-500 text-white p-3 rounded-xl shadow-lg"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              <Shield className="h-6 w-6" />
            </motion.div>
          </motion.div>

          {/* Right side - Features */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Why IKE Coin?
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                More than just a cryptocurrency, IKE Coin represents a new paradigm where 
                mindfulness meets meaningful rewards. Every coin earned reflects genuine 
                engagement with gratitude practices.
              </p>
            </div>

            <div className="space-y-6">
              {coinFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-gratitude-500 to-earth-500 rounded-xl flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-gratitude-600 to-earth-600 rounded-3xl p-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-4">
            Start Earning IKE Coins Today
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join our community and begin your journey toward mindful living while earning 
            real rewards for your gratitude practice.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.button
              className="bg-white text-gratitude-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 25px -5px rgba(255, 255, 255, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Now
            </motion.button>
            <motion.button
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gratitude-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IKECoinSection;