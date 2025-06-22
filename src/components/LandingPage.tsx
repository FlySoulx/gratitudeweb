import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Coins, Wallet, Search, Database, Twitter, Linkedin, ExternalLink, X, Brain, Sparkles } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 12,
    hours: 20,
    minutes: 15,
    seconds: 57
  });
  const [showScienceModal, setShowScienceModal] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          seconds = 59;
          minutes--;
        } else if (hours > 0) {
          seconds = 59;
          minutes = 59;
          hours--;
        } else if (days > 0) {
          seconds = 59;
          minutes = 59;
          hours = 23;
          days--;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowScienceModal(false);
      }
    };

    if (showScienceModal) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [showScienceModal]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center justify-between p-6 max-w-7xl mx-auto"
      >
        <div className="flex items-center space-x-3">
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
            <span className="text-xl font-bold">The Gratitude Web</span>
            <div className="text-xs text-teal-400 font-medium">Powered by IKE Coin</div>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#mission" className="text-gray-300 hover:text-white transition-colors">The Mission</a>
          <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">How it Works</a>
          <motion.button
            onClick={onGetStarted}
            className="bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded-lg font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center py-20 px-6 max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className="inline-flex items-center space-x-2 bg-teal-500/20 backdrop-blur-sm rounded-full px-6 py-3 border border-teal-500/30 mb-8">
            <Coins className="h-5 w-5 text-yellow-400" />
            <span className="text-sm font-medium text-teal-300">
              Introducing Web3 Gratitude Rewards
            </span>
          </div>
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Give Ikes, Not Likes.
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          The World's First Gratitude Coin. A new way to say thank you, reward excellence, and support 
          the creators you love with <span className="text-teal-400 font-semibold">real value</span>.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
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
            <motion.div
              className="w-2 h-2 bg-white rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.button>
          
          <motion.button
            className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Watch Demo</span>
          </motion.button>
        </div>

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
            <div className="text-gray-400 font-medium">Grateful Users</div>
          </div>
          <div className="text-center">
            <motion.div
              className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              1M+
            </motion.div>
            <div className="text-gray-400 font-medium">IKE Coins Earned</div>
          </div>
          <div className="text-center">
            <motion.div
              className="text-3xl sm:text-4xl font-bold text-green-400 mb-2"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              500K+
            </motion.div>
            <div className="text-gray-400 font-medium">Gratitude Entries</div>
          </div>
        </motion.div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        id="mission"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-6 max-w-6xl mx-auto"
      >
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-700">
          <h2 className="text-4xl font-bold mb-8 text-center">The Mission</h2>
          <p className="text-lg text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
            IKE Coin is a digital time capsule and a record of humanity's excellence. It's an 
            ecosystem for "International Keepers of Excellence" to reward good deeds and 
            give thanks. We believe in a world where gratitude is tangible, and appreciation 
            directly empowers the creators and innovators who enrich our lives. Our mission 
            is to lower the barrier to entry, making it simple and inspiring for everyone to 
            participate in this new economy of goodwill.
          </p>
        </div>
      </motion.section>

      {/* Countdown Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-6 max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-3xl p-12 text-center border border-blue-500/30"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Help Us Set a World Record for Gratitude.
          </h2>
          
          {/* Countdown Timer */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-blue-400 mb-8 font-mono"
          >
            <div className="flex items-center justify-center space-x-2 md:space-x-4">
              <div className="flex flex-col items-center">
                <motion.span
                  key={timeLeft.days}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-800/80 rounded-xl px-4 py-2"
                >
                  {timeLeft.days}d
                </motion.span>
              </div>
              <div className="flex flex-col items-center">
                <motion.span
                  key={timeLeft.hours}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-800/80 rounded-xl px-4 py-2"
                >
                  {timeLeft.hours}h
                </motion.span>
              </div>
              <div className="flex flex-col items-center">
                <motion.span
                  key={timeLeft.minutes}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-800/80 rounded-xl px-4 py-2"
                >
                  {timeLeft.minutes}m
                </motion.span>
              </div>
              <div className="flex flex-col items-center">
                <motion.span
                  key={timeLeft.seconds}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-800/80 rounded-xl px-4 py-2"
                >
                  {timeLeft.seconds}s
                </motion.span>
              </div>
            </div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg text-blue-200 max-w-2xl mx-auto leading-relaxed"
          >
            On the final day of the hackathon, we will attempt to send the most thank you's in a single minute. Let's make history together!
          </motion.p>
        </motion.div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        id="how-it-works"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-6 max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-16">How it Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center group"
          >
            <motion.div
              className="w-20 h-20 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
              whileHover={{ rotate: 5 }}
            >
              <Wallet className="h-10 w-10 text-white" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-3">1. Connect a Wallet</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Securely connect a free Algorand wallet in seconds.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center group"
          >
            <motion.div
              className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
              whileHover={{ rotate: 5 }}
            >
              <Search className="h-10 w-10 text-white" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-3">2. Find & Tip</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Paste a URL or enter a creator's name to send your appreciation.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center group"
          >
            <motion.div
              className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
              whileHover={{ rotate: 5 }}
            >
              <Database className="h-10 w-10 text-white" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-3">3. Build the Record</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Your "thank you" is permanently recorded on the blockchain.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Get Started Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-6 max-w-6xl mx-auto"
      >
        <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Your Key to the Gratitude Economy.</h2>
          <p className="text-xl mb-8 opacity-90">To participate, you'll need a secure Algorand wallet. We recommend Pera Wallet.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.button
              onClick={() => window.open('https://perawallet.app/', '_blank')}
              className="bg-white text-teal-600 px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 25px -5px rgba(255, 255, 255, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Wallet className="h-5 w-5" />
              <span>Create a Pera Wallet</span>
            </motion.button>
            <motion.button
              onClick={onGetStarted}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-teal-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              I Already Have a Wallet
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="border-t border-gray-800 py-12 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <Heart className="h-8 w-8 text-teal-400 fill-current" />
                  <Coins className="h-4 w-4 text-yellow-400 absolute -top-1 -right-1" />
                </div>
                <div>
                  <div className="text-xl font-bold">The Gratitude Web</div>
                  <div className="text-sm text-teal-400 font-medium">Powered by IKE Coin</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Transform your daily gratitude practice into meaningful rewards. 
                Join thousands building mindful habits while earning IKE Coins.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-semibold mb-4">Learn More</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <motion.a 
                    href="https://ikecoins.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center space-x-1"
                    whileHover={{ x: 2 }}
                  >
                    <span>Official IKE Coins Website</span>
                    <ExternalLink className="h-3 w-3" />
                  </motion.a>
                </li>
                <li>
                  <motion.button
                    onClick={() => setShowScienceModal(true)}
                    className="hover:text-white transition-colors text-left"
                    whileHover={{ x: 2 }}
                  >
                    The Science of Gratitude
                  </motion.button>
                </li>
                <li><a href="#" className="hover:text-white transition-colors">Blockchain Technology</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community Guidelines</a></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-teal-500 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Twitter className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-teal-500 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
                <motion.a
                  href="https://ikecoins.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-teal-500 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="h-5 w-5" />
                </motion.a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 sm:mb-0">
              © 2025 The Gratitude Web. All rights reserved.
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
              <span>for mindful living</span>
            </div>
          </div>
        </div>
      </motion.footer>

      {/* Science of Gratitude Modal */}
      <AnimatePresence>
        {showScienceModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowScienceModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-gray-900 border border-gray-700 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center"
                    whileHover={{ rotate: 5 }}
                  >
                    <Brain className="h-6 w-6 text-white" />
                  </motion.div>
                  <h2 className="text-3xl font-bold text-white">The Science of Gratitude</h2>
                </div>
                <motion.button
                  onClick={() => setShowScienceModal(false)}
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="h-5 w-5 text-gray-400" />
                </motion.button>
              </div>

              {/* Content */}
              <div className="space-y-6">
                {/* Main Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-6"
                >
                  <div className="flex items-start space-x-4">
                    <motion.div
                      className="flex-shrink-0 mt-1"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Sparkles className="h-6 w-6 text-purple-400" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-purple-300 mb-4">Why Give Gratitude?</h3>
                      <p className="text-gray-300 leading-relaxed text-lg">
                        Beyond just being a kind gesture, expressing and witnessing gratitude has proven mental and emotional benefits. 
                        It can boost neurotransmitters like <span className="text-purple-400 font-semibold">dopamine</span> and{' '}
                        <span className="text-pink-400 font-semibold">serotonin</span>, helping to reduce feelings of anxiety and depression 
                        and fostering a powerful sense of well-being and connection.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Benefits Grid */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
                    <h4 className="font-semibold text-purple-300 mb-2">Mental Health Benefits</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Reduces anxiety and depression</li>
                      <li>• Increases life satisfaction</li>
                      <li>• Improves sleep quality</li>
                      <li>• Enhances self-esteem</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
                    <h4 className="font-semibold text-pink-300 mb-2">Social Benefits</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Strengthens relationships</li>
                      <li>• Increases empathy</li>
                      <li>• Builds social connections</li>
                      <li>• Promotes prosocial behavior</li>
                    </ul>
                  </div>
                </motion.div>

                {/* Neuroscience Insight */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gray-800 border border-gray-700 rounded-2xl p-6"
                >
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center space-x-2">
                    <Brain className="h-5 w-5 text-purple-400" />
                    <span>The Neuroscience</span>
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Research shows that gratitude activates the brain's reward system, particularly the ventral tegmental area 
                    and nucleus accumbens. This activation releases dopamine, creating a positive feedback loop that encourages 
                    more grateful thinking and behavior.
                  </p>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-center pt-4"
                >
                  <motion.button
                    onClick={() => {
                      setShowScienceModal(false);
                      onGetStarted();
                    }}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start Your Gratitude Journey
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;