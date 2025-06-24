import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Coins, ArrowRight, Sparkles, Users, Star, Quote, TrendingUp, Shield, Zap, Award, UserPlus, PenTool, Gift, Twitter, Github, Linkedin, Mail, ExternalLink, Bell, MessageCircle, Trophy, Smartphone } from 'lucide-react';
import { Screen } from '../App';

interface LandingPageProps {
  onGetStarted: () => void;
  onNavigate: (screen: Screen) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted, onNavigate }) => {
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

  const communityStats = [
    { icon: Users, label: 'Active Members', value: '10,000+' },
    { icon: MessageCircle, label: 'Daily Posts', value: '500+' },
    { icon: Heart, label: 'Gratitudes Shared', value: '1M+' },
    { icon: Star, label: 'Average Rating', value: '4.9' }
  ];

  const stats = [
    { label: 'Total Supply', value: '1,000,000', suffix: 'IKE' },
    { label: 'Circulating Supply', value: '650,000', suffix: 'IKE' },
    { label: 'Holders', value: '10,000+', suffix: '' },
    { label: 'Daily Volume', value: '$50K+', suffix: '' }
  ];

  const footerLinks = {
    Product: [
      { name: 'Features', href: '#features' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Roadmap', href: '#roadmap' }
    ],
    Community: [
      { name: 'Discord', href: '#', external: true },
      { name: 'Telegram', href: '#', external: true },
      { name: 'Blog', href: '#', external: true },
      { name: 'Newsletter', href: '#newsletter' }
    ],
    Resources: [
      { name: 'Documentation', href: '#', external: true },
      { name: 'API Reference', href: '#', external: true },
      { name: 'Help Center', href: '#support' },
      { name: 'Contact Us', href: '#contact' }
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'Security', href: '#security' }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Github, href: '#', name: 'GitHub' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Mail, href: '#', name: 'Email' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-200 via-teal-100 to-cyan-200">
      {/* Side Panels with Mobile PWA Container */}
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-sm w-full bg-gray-900 text-white shadow-2xl overflow-hidden h-screen overflow-y-auto">
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
              className="inline-flex items-center space-x-2 bg-teal-500/20 border border-teal-500/30 rounded-full px-3 py-1.5 mb-6"
            >
              <Coins className="h-3 w-3 text-yellow-400" />
              <span className="text-xs font-medium text-teal-300">
                Web3 Gratitude Rewards
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
              className="text-gray-400 mb-8 leading-relaxed text-sm"
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

            {/* Stats - Updated as requested */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-3 gap-4"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-400 mb-1">Grateful</div>
                <div className="text-xs text-gray-400">Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-1">IKE</div>
                <div className="text-xs text-gray-400">Earned</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">Excellence</div>
                <div className="text-xs text-gray-400">Recognized</div>
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
              <p className="text-gray-300 leading-relaxed text-sm">
                We're building a world where gratitude has real value. Every IKE Coin represents 
                genuine appreciation, creating a permanent record of human excellence on the blockchain.
              </p>
            </motion.div>
          </motion.section>

          {/* How It Works Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="px-6 py-8"
          >
            <h3 className="text-xl font-bold mb-6 text-center">How It Works</h3>
            
            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 border border-gray-700 rounded-xl p-4 flex items-center space-x-4"
                >
                  <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                    {step.step}
                  </div>
                  <div>
                    <div className="font-medium text-sm">{step.title}</div>
                    <div className="text-xs text-gray-400">{step.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Features Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="px-6 py-8"
          >
            <h3 className="text-xl font-bold mb-6 text-center">Everything You Need for Mindful Living</h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 border border-gray-700 rounded-xl p-4"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <feature.icon className="h-5 w-5 text-teal-400" />
                    <h4 className="font-medium text-sm">{feature.title}</h4>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Community Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="px-6 py-8"
          >
            <h3 className="text-xl font-bold mb-6 text-center">Join Our Grateful Community</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {communityStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 border border-gray-700 rounded-xl p-4 text-center"
                >
                  <stat.icon className="h-6 w-6 text-teal-400 mx-auto mb-2" />
                  <div className="text-lg font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            {/* Community CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-teal-500/20 to-blue-500/20 border border-teal-500/30 rounded-xl p-4 text-center"
            >
              <h4 className="font-bold mb-2">Ready to Start Your Gratitude Journey?</h4>
              <p className="text-xs text-gray-400 mb-4">
                Join our thriving community of grateful individuals and start earning IKE Coins 
                for your mindful practices today.
              </p>
              <motion.button
                onClick={onGetStarted}
                className="w-full bg-teal-500 hover:bg-teal-600 py-3 rounded-full font-semibold transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Join the Community
              </motion.button>
            </motion.div>
          </motion.section>

          {/* IKE Coin Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="px-6 py-8"
          >
            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Coins className="h-6 w-6 text-yellow-400" />
                <h3 className="text-xl font-bold">The Currency of Gratitude</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                IKE Coin powers the entire Gratitude Web ecosystem, rewarding mindful practices 
                and creating real value from your daily gratitude journey.
              </p>
              
              {/* Coin Features */}
              <div className="space-y-3 mb-4">
                {coinFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-800/50 rounded-xl p-3 flex items-start space-x-3"
                  >
                    <feature.icon className="h-4 w-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-medium text-xs text-white mb-1">{feature.title}</h5>
                      <p className="text-xs text-gray-400">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={stat.label} className="bg-gray-800/50 rounded-xl p-3 text-center">
                    <div className="text-lg font-bold text-yellow-400 mb-1">
                      {stat.value}
                      <span className="text-sm">{stat.suffix}</span>
                    </div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Testimonials */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="px-6 py-8"
          >
            <h3 className="text-xl font-bold mb-6 text-center">What Our Community Says</h3>
            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 border border-gray-700 rounded-xl p-4"
                >
                  <Quote className="h-4 w-4 text-teal-400 mb-2" />
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-medium text-sm text-white">{testimonial.name}</div>
                        <div className="text-xs text-gray-400">{testimonial.role}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-xs">
                      <span className="text-yellow-400 font-bold">{testimonial.coins} IKE</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-teal-400">{testimonial.streak} days</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Newsletter Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="px-6 py-8"
          >
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-400 text-sm mb-4">
                Get the latest updates on IKE Coin, new features, and community highlights.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-teal-500 transition-colors text-sm"
                />
                <motion.button
                  className="w-full bg-gradient-to-r from-teal-500 to-blue-500 py-3 rounded-xl font-semibold text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </div>
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
              <div className="flex items-center justify-center space-x-2 mb-3">
                <Star className="h-5 w-5 text-purple-400" />
                <h3 className="text-lg font-bold text-purple-300">Together We Build Excellence</h3>
                <Star className="h-5 w-5 text-purple-400" />
              </div>
              <p className="text-purple-200 text-sm mb-6 leading-relaxed">
                Join thousands building the future of gratitude. Start earning IKE Coins 
                for your mindful practices and help create a world where appreciation has real value.
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
            {/* Footer Links Grid */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h4 className="font-semibold text-sm mb-3 text-white">{category}</h4>
                  <ul className="space-y-2">
                    {links.slice(0, 3).map((link) => (
                      <li key={link.name}>
                        <button className="text-xs text-gray-400 hover:text-white transition-colors flex items-center">
                          <span>{link.name}</span>
                          {link.external && (
                            <ExternalLink className="h-3 w-3 ml-1" />
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center space-x-4 mb-6">
              {socialLinks.map((social) => (
                <motion.button
                  key={social.name}
                  className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-4 w-4 text-gray-400 hover:text-white transition-colors duration-300" />
                </motion.button>
              ))}
            </div>

            {/* Footer Bottom */}
            <div className="flex flex-col items-center space-y-4">
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
              
              <div className="text-center">
                <div className="text-xs text-gray-500 mb-2">
                  © 2025 Gratitude Web. All rights reserved.
                </div>
                <div className="flex items-center justify-center space-x-2 text-xs text-gray-400">
                  <span>Made with</span>
                  <Heart className="h-3 w-3 text-red-500 fill-current animate-pulse" />
                  <span>for mindful living</span>
                </div>
              </div>
            </div>
          </motion.footer>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;