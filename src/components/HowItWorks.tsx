import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, PenTool, Coins, Gift } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: UserPlus,
      title: 'Join Our Community',
      description: 'Create your account and connect your wallet to start your gratitude journey with IKE Coin integration.',
      step: '01'
    },
    {
      icon: PenTool,
      title: 'Practice Daily Gratitude',
      description: 'Write daily gratitude entries, track your mood, and build a consistent mindfulness practice.',
      step: '02'
    },
    {
      icon: Coins,
      title: 'Earn IKE Coins',
      description: 'Get rewarded with IKE Coins for your consistency, community engagement, and mindful contributions.',
      step: '03'
    },
    {
      icon: Gift,
      title: 'Redeem & Share',
      description: 'Use your earned coins for premium features, wellness products, or share with other community members.',
      step: '04'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            How The
            <span className="bg-gradient-to-r from-primary-600 to-gratitude-600 bg-clip-text text-transparent">
              {' '}Gratitude Web{' '}
            </span>
            Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start your rewarding gratitude practice in just four simple steps
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={itemVariants}
              className="relative"
            >
              <div className="text-center group">
                {/* Step Number */}
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-100 to-gratitude-100 rounded-full mb-6 relative"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-gratitude-600 bg-clip-text text-transparent">
                    {step.step}
                  </span>
                  
                  {/* Connecting Line (hidden on mobile, shown on lg+) */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-gratitude-300 transform -translate-y-1/2"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                      viewport={{ once: true }}
                    />
                  )}
                </motion.div>

                {/* Icon */}
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-lg border border-gray-100 mb-6 group-hover:shadow-xl transition-all duration-300"
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <step.icon className="h-10 w-10 text-primary-600 group-hover:text-gratitude-600 transition-colors duration-300" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom section with additional info */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Daily Practice?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of users who have already started their gratitude journey and are earning IKE Coins for their mindful practices.
            </p>
            <motion.button
              className="bg-gradient-to-r from-primary-600 to-gratitude-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 25px -5px rgba(34, 197, 94, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              Start Earning Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;