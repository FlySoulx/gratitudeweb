import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Heart, Coins, Users, MessageCircle, Star, Quote, TrendingUp, Shield, Zap, Award, Smartphone, PenTool, Gift, UserPlus, Mail, Twitter, Github, Linkedin, ExternalLink } from 'lucide-react';
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

  const communityStats = [
    { icon: Users, label: 'Active Members', value: '10,000+' },
    { icon: MessageCircle, label: 'Daily Posts', value: '500+' },
    { icon: Heart, label: 'Gratitudes Shared', value: '1M+' },
    { icon: Star, label: 'Average Rating', value: '4.9' }
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
      {/* Mobile Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800"
      >
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <span className="text-gray-900 font-bold text-sm">I</span>
              </div>
              <div>
                <div className="text-lg font-bold text-white">The Gratitude Web</div>
                <div className="text-xs text-yellow-400 font-medium">Powered by IKE Coin</div>
              </div>
            </div>
            
            {/* Get Started Button */}
            <motion.button
              onClick={onGetStarted}
              className="bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded-full text-sm font-semibold transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="px-4 py-8">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 border border-teal-500/30 mb-6"
          >
            <Sparkles className="h-4 w-4 text-teal-400" />
            <span className="text-sm font-medium text-gray-300">
              Introducing Web3 Gratitude Rewards from IKE Coin
            </span>
            <Coins className="h-4 w-4 text-yellow-400" />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight"
          >
            Give Ikes,
            <br />
            <span className="bg-gradient-to-r from-teal-400 to-yellow-400 bg-clip-text text-transparent">
              Not Likes.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-300 mb-8 leading-relaxed"
          >
            The World's First Gratitude Coin. Tip any creator, website, or person to build a public record of human excellence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col space-y-4 mb-12"
          >
            <motion.button
              onClick={onGetStarted}
              className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-4 rounded-full font-semibold text-lg shadow-xl flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Join the Movement</span>
              <ArrowRight className="h-5 w-5" />
            </motion.button>
            
            <motion.button
              className="w-full bg-gray-800/80 backdrop-blur-sm text-gray-300 px-6 py-4 rounded-full font-semibold text-lg border border-gray-700 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Watch Demo</span>
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-4"
          >
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-1">Give Real</div>
              <div className="text-2xl font-bold text-teal-400">Value</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-1">A New</div>
              <div className="text-2xl font-bold text-yellow-400">Gratitude Economy</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-1">Permanently on</div>
              <div className="text-2xl font-bold text-green-400">Algorand</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="px-4 py-12 bg-gradient-to-b from-gray-900 to-gray-800"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Our Mission</h2>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
            <p className="text-gray-300 leading-relaxed mb-6">
              We believe gratitude is the foundation of human excellence. The Gratitude Web creates 
              a permanent, public record of appreciation that transcends traditional social media metrics.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Every IKE Coin tip becomes part of an immutable ledger of human kindness, 
              building a more grateful and connected world.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section className="px-4 py-12">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Everything You Need for
            <span className="bg-gradient-to-r from-teal-400 to-yellow-400 bg-clip-text text-transparent">
              {' '}Mindful Living
            </span>
          </h2>
          <p className="text-gray-400">
            Discover powerful features designed to make gratitude a rewarding part of your daily routine
          </p>
        </motion.div>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="bg-gray-800 rounded-2xl p-6 border border-gray-700"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-4`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="px-4 py-12 bg-gradient-to-b from-gray-800 to-gray-900">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            How The
            <span className="bg-gradient-to-r from-teal-400 to-yellow-400 bg-clip-text text-transparent">
              {' '}Gratitude Web{' '}
            </span>
            Works
          </h2>
          <p className="text-gray-400">
            Start your rewarding gratitude practice in just four simple steps
          </p>
        </motion.div>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={itemVariants}
              className="bg-gray-800 rounded-2xl p-6 border border-gray-700"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-900 font-bold">{step.step}</span>
                </div>
                
                <div className="flex-1">
                  <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center mb-4">
                    <step.icon className="h-6 w-6 text-teal-400" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* IKE Coin Section */}
      <section className="px-4 py-12">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 border border-yellow-400/30 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Coins className="h-5 w-5 text-yellow-400" />
            <span className="text-sm font-semibold text-gray-300">IKE Coin</span>
            <Award className="h-4 w-4 text-teal-400" />
          </motion.div>
          
          <h2 className="text-2xl font-bold text-white mb-4">
            The Currency of
            <span className="bg-gradient-to-r from-yellow-400 to-teal-400 bg-clip-text text-transparent">
              {' '}Gratitude
            </span>
          </h2>
          <p className="text-gray-400">
            IKE Coin powers the entire Gratitude Web ecosystem, rewarding mindful practices 
            and creating real value from your daily gratitude journey.
          </p>
        </motion.div>

        {/* Coin visualization */}
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
            {/* Floating coin animation */}
            <motion.div
              className="relative mx-auto w-32 h-32 mb-6"
              animate={{ 
                rotateY: [0, 360],
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-full shadow-2xl"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center">
                <div className="text-white text-xl font-bold">IKE</div>
              </div>
              
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full blur-xl opacity-30"
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
                  className="text-center p-3 bg-gray-900 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-lg font-bold text-yellow-400 mb-1">
                    {stat.value}
                    <span className="text-sm">{stat.suffix}</span>
                  </div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-4">
              Why IKE Coin?
            </h3>
            <p className="text-gray-400 mb-6">
              More than just a cryptocurrency, IKE Coin represents a new paradigm where 
              mindfulness meets meaningful rewards.
            </p>
          </div>

          {coinFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="flex items-start space-x-4 p-4 bg-gray-800 rounded-xl border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <feature.icon className="h-5 w-5 text-white" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Community Section */}
      <section className="px-4 py-12 bg-gradient-to-b from-gray-900 to-gray-800">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Join Our
            <span className="bg-gradient-to-r from-teal-400 to-yellow-400 bg-clip-text text-transparent">
              {' '}Grateful Community
            </span>
          </h2>
          <p className="text-gray-400">
            Connect with thousands of like-minded individuals on their gratitude journey
          </p>
        </motion.div>

        {/* Community Stats */}
        <motion.div
          className="grid grid-cols-2 gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {communityStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 bg-gray-800 rounded-xl border border-gray-700"
              whileHover={{ y: -2 }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-teal-500 to-yellow-500 rounded-xl mb-3"
                whileHover={{ rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <stat.icon className="h-6 w-6 text-white" />
              </motion.div>
              <div className="text-xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-center text-white mb-6">
            What Our Community Says
          </h3>
          
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-gray-800 rounded-2xl p-6 border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Quote icon */}
                <Quote className="h-6 w-6 text-teal-300 mb-4" />
                
                {/* Content */}
                <p className="text-gray-300 mb-4 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
                
                {/* Stats */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">C</span>
                    </div>
                    <span className="text-sm font-medium text-gray-300">{testimonial.coins} IKE</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">🔥</span>
                    </div>
                    <span className="text-sm font-medium text-gray-300">{testimonial.streak} days</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="px-4 py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-teal-600 via-yellow-600 to-teal-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Start Your Gratitude Journey?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Join our thriving community of grateful individuals and start earning IKE Coins 
            for your mindful practices today.
          </p>
          <div className="flex flex-col space-y-4">
            <motion.button
              onClick={onGetStarted}
              className="w-full bg-white text-teal-600 px-6 py-4 rounded-full font-semibold text-lg shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Join the Community
            </motion.button>
            <motion.button
              className="w-full border-2 border-white text-white px-6 py-4 rounded-full font-semibold text-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Features
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="px-4 py-8">
          {/* Brand Section */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="relative">
                <Heart className="h-8 w-8 text-teal-400 fill-current" />
                <motion.div
                  className="absolute -top-1 -right-1"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Coins className="h-4 w-4 text-yellow-400" />
                </motion.div>
              </div>
              <div>
                <div className="text-lg font-bold">Gratitude Web</div>
                <div className="text-sm text-teal-400 font-medium">Powered by IKE Coin</div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transform your daily gratitude practice into meaningful rewards. 
              Join thousands of users building mindful habits while earning IKE Coins.
            </p>

            {/* Social Links */}
            <div className="flex justify-center space-x-4 mb-8">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-700 rounded-xl flex items-center justify-center hover:bg-teal-600 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-5 w-5 text-gray-400 hover:text-white transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          <div className="space-y-6 mb-8">
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * categoryIndex }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold mb-3 text-white">{category}</h3>
                <div className="grid grid-cols-2 gap-2">
                  {links.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      className="text-gray-300 hover:text-teal-400 transition-colors duration-200 flex items-center text-sm"
                      whileHover={{ x: 2 }}
                    >
                      <span>{link.name}</span>
                      {link.external && (
                        <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      )}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Section */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Get the latest updates on IKE Coin, new features, and community highlights.
            </p>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-teal-500 transition-colors duration-200"
              />
              <motion.button
                className="w-full bg-gradient-to-r from-teal-600 to-yellow-600 text-white px-6 py-3 rounded-xl font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            className="pt-6 border-t border-gray-700 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-gray-400 text-sm mb-4">
              © 2025 Gratitude Web. All rights reserved.
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <span className="text-gray-400">Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
              <span className="text-gray-400">for mindful living</span>
            </div>
          </motion.div>

          {/* Community Guidelines Link */}
          <motion.div
            className="text-center mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => onNavigate('community-guidelines')}
              className="text-teal-400 hover:text-teal-300 text-sm font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Community Guidelines
            </motion.button>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;