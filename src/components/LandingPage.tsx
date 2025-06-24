import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Heart, Coins, Users, MessageCircle, Star, Quote, TrendingUp, Shield, Zap, Award, Smartphone, PenTool, Gift, UserPlus, ExternalLink, Mail, Twitter, Github, Linkedin } from 'lucide-react';
import { Screen } from '../App';

interface LandingPageProps {
  onGetStarted: () => void;
  onNavigate: (screen: Screen) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted, onNavigate }) => {
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

  const communityStats = [
    { icon: Users, label: 'Active Members', value: '10,000+' },
    { icon: MessageCircle, label: 'Daily Posts', value: '500+' },
    { icon: Heart, label: 'Gratitudes Shared', value: '1M+' },
    { icon: Star, label: 'Average Rating', value: '4.9' }
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
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
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
                Introducing Web3 Gratitude Rewards from IKE Coin
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
                onClick={onGetStarted}
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
                  className="text-lg sm:text-xl text-gray-500 mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Give Real
                </motion.div>
                <div className="text-3xl sm:text-4xl font-bold text-primary-600">Value</div>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-lg sm:text-xl text-gray-500 mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  A New
                </motion.div>
                <div className="text-3xl sm:text-4xl font-bold text-gratitude-600">Gratitude Economy</div>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-lg sm:text-xl text-gray-500 mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  Permanently on
                </motion.div>
                <div className="text-3xl sm:text-4xl font-bold text-wellness-600">Algorand</div>
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

      {/* IKE Coin Logo Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-6 max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* IKE Coin Logo */}
          <motion.div
            className="relative mx-auto mb-12 w-64 h-64"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1.2, 
              type: "spring", 
              stiffness: 100,
              damping: 15
            }}
          >
            {/* Outer glow ring */}
            <motion.div
              className="absolute inset-0 w-full h-full"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-r from-yellow-400/20 via-yellow-500/30 to-yellow-600/20 blur-xl"></div>
            </motion.div>

            {/* Main logo container */}
            <motion.div
              className="relative w-full h-full"
              whileHover={{ 
                scale: 1.05,
                rotate: [0, 5, -5, 0],
                transition: { 
                  scale: { duration: 0.3 },
                  rotate: { duration: 0.6, repeat: 2 }
                }
              }}
            >
              {/* Logo image */}
              <motion.img
                src="/Ikecoin_540px.png"
                alt="IKE Coin Logo"
                className="w-full h-full object-contain drop-shadow-2xl"
                animate={{ 
                  rotateY: [0, 360],
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              />

              {/* Floating particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                  style={{
                    top: `${20 + Math.sin(i * 60 * Math.PI / 180) * 40}%`,
                    left: `${50 + Math.cos(i * 60 * Math.PI / 180) * 40}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.4, 1, 0.4],
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{
                    duration: 2 + i * 0.3,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>

            {/* Inner sparkle effect */}
            <motion.div
              className="absolute inset-16 w-32 h-32 mx-auto"
              animate={{ 
                rotate: [0, -360],
                scale: [0.8, 1.1, 0.8]
              }}
              transition={{ 
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    top: `${50 + Math.sin(i * 90 * Math.PI / 180) * 30}%`,
                    left: `${50 + Math.cos(i * 90 * Math.PI / 180) * 30}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-6 max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-primary-400 to-gratitude-400 bg-clip-text text-transparent">
              The Mission
            </span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed text-gray-300">
            <p>
              We believe gratitude is the foundation of human excellence. Yet in our fast-paced world, 
              genuine appreciation often goes unrecognized and unrewarded. The Gratitude Web changes this.
            </p>
            <p>
              By combining the power of blockchain technology with the timeless practice of gratitude, 
              we're creating the world's first economy where appreciation has real, tangible value. 
              Every act of recognition, every moment of thankfulness, every expression of gratitude 
              becomes a building block in a more connected, more appreciative world.
            </p>
            <p className="text-xl font-semibold text-primary-400">
              Together, we're not just practicing gratitude—we're revolutionizing how human excellence 
              is recognized, rewarded, and remembered.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
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

      {/* How It Works Section */}
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
                onClick={onGetStarted}
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

      {/* IKE Coin Section */}
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
                onClick={onGetStarted}
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

      {/* Community Section */}
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
                onClick={onGetStarted}
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="py-16">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <motion.div
                  className="flex items-center space-x-3 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <Heart className="h-10 w-10 text-primary-400 fill-current" />
                    <motion.div
                      className="absolute -top-1 -right-1"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Coins className="h-5 w-5 text-gratitude-400" />
                    </motion.div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Gratitude Web</div>
                    <div className="text-sm text-primary-400 font-medium">Powered by IKE Coin</div>
                  </div>
                </motion.div>
                
                <motion.p
                  className="text-gray-300 mb-8 max-w-md leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  Transform your daily gratitude practice into meaningful rewards. 
                  Join thousands of users building mindful habits while earning IKE Coins.
                </motion.p>

                {/* Social Links */}
                <motion.div
                  className="flex space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-primary-600 transition-all duration-300 group"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </motion.a>
                  ))}
                </motion.div>
              </div>

              {/* Links Sections */}
              {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * (categoryIndex + 1) }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-semibold mb-6 text-white">{category}</h3>
                  <ul className="space-y-4">
                    {links.map((link) => (
                      <li key={link.name}>
                        <motion.a
                          href={link.href}
                          className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"
                          whileHover={{ x: 2 }}
                        >
                          <span>{link.name}</span>
                          {link.external && (
                            <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                          )}
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <motion.div
            className="py-12 border-t border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
                <p className="text-gray-300">
                  Get the latest updates on IKE Coin, new features, and community highlights.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors duration-200"
                />
                <motion.button
                  className="bg-gradient-to-r from-primary-600 to-gratitude-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            className="py-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-gray-400 text-sm">
              © 2025 Gratitude Web. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-gray-400">Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
              <span className="text-gray-400">for mindful living</span>
            </div>
            <div className="flex items-center space-x-4">
              <motion.button
                onClick={() => onNavigate('community-guidelines')}
                className="text-gray-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                whileHover={{ scale: 1.05 }}
              >
                Community Guidelines
              </motion.button>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;