import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Coins, Users, Zap, Award, Smartphone } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Heart,
      title: 'Daily Gratitude Practice',
      description: 'Build a sustainable gratitude habit with guided prompts, mood tracking, and personalized insights to transform your mindset.',
      color: 'primary',
      gradient: 'from-primary-500 to-primary-600'
    },
    {
      icon: Coins,
      title: 'Earn IKE Coins',
      description: 'Get rewarded for your gratitude practice. Earn IKE Coins for daily entries, consistency streaks, and community engagement.',
      color: 'gratitude',
      gradient: 'from-gratitude-500 to-gratitude-600'
    },
    {
      icon: Users,
      title: 'Grateful Community',
      description: 'Connect with like-minded individuals, share your gratitude journey, and inspire others in our supportive community.',
      color: 'wellness',
      gradient: 'from-wellness-500 to-wellness-600'
    },
    {
      icon: Zap,
      title: 'Instant Rewards',
      description: 'Redeem your IKE Coins for exclusive content, wellness products, and premium features within our ecosystem.',
      color: 'earth',
      gradient: 'from-earth-500 to-earth-600'
    },
    {
      icon: Award,
      title: 'Achievement System',
      description: 'Unlock badges, climb leaderboards, and celebrate milestones as you progress on your gratitude journey.',
      color: 'primary',
      gradient: 'from-primary-600 to-gratitude-500'
    },
    {
      icon: Smartphone,
      title: 'PWA Experience',
      description: 'Access your gratitude practice anywhere with our progressive web app. Works seamlessly across all devices.',
      color: 'wellness',
      gradient: 'from-wellness-600 to-primary-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need for
            <span className="bg-gradient-to-r from-primary-600 to-gratitude-600 bg-clip-text text-transparent">
              {' '}Mindful Living
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover powerful features designed to make gratitude a rewarding part of your daily routine
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 h-full"
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  className={`w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <feature.icon className="h-7 w-7 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect border */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  initial={false}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-gradient-to-r from-primary-600 to-gratitude-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 25px 50px -12px rgba(34, 197, 94, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;