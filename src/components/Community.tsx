import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageCircle, Heart, Star, Quote } from 'lucide-react';

const Community: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Mindfulness Coach',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'The Gratitude Web has transformed my daily practice. Earning IKE Coins makes gratitude feel even more rewarding!',
      coins: 1250,
      streak: 45
    },
    {
      name: 'Marcus Johnson',
      role: 'Mental Health Advocate',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'I love how this platform combines mindfulness with real value. The community support is incredible.',
      coins: 980,
      streak: 32
    },
    {
      name: 'Elena Rodriguez',
      role: 'Wellness Enthusiast',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      content: 'The daily prompts and community engagement have helped me build a consistent gratitude practice.',
      coins: 1560,
      streak: 67
    }
  ];

  const communityStats = [
    { icon: Users, label: 'Active Members', value: '10,000+' },
    { icon: MessageCircle, label: 'Daily Posts', value: '500+' },
    { icon: Heart, label: 'Gratitudes Shared', value: '1M+' },
    { icon: Star, label: 'Average Rating', value: '4.9' }
  ];

  return (
    <section id="community" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Join Our
            <span className="bg-gradient-to-r from-primary-600 to-wellness-600 bg-clip-text text-transparent">
              {' '}Grateful Community
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with thousands of like-minded individuals on their gratitude journey, 
            share experiences, and grow together.
          </p>
        </motion.div>

        {/* Community Stats */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {communityStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-gradient-to-br from-gray-50 to-primary-50 rounded-2xl border border-gray-100"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-wellness-500 rounded-2xl mb-4"
                whileHover={{ rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <stat.icon className="h-8 w-8 text-white" />
              </motion.div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Community Says
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {/* Quote icon */}
                <Quote className="h-8 w-8 text-primary-300 mb-4" />
                
                {/* Content */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
                
                {/* Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-gratitude-500 to-gratitude-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">C</span>
                    </div>
                    <span className="text-sm font-medium text-gray-700">{testimonial.coins} IKE</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">🔥</span>
                    </div>
                    <span className="text-sm font-medium text-gray-700">{testimonial.streak} days</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-primary-600 via-wellness-600 to-primary-600 rounded-3xl p-12 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your Gratitude Journey?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join our thriving community of grateful individuals and start earning IKE Coins 
            for your mindful practices today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.button
              className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 25px -5px rgba(255, 255, 255, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              Join the Community
            </motion.button>
            <motion.button
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Features
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;