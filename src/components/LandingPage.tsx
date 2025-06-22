import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Coins, Wallet, Search, Database, Twitter, Linkedin, ExternalLink, ArrowLeft, Users, Shield, Microscope, Link as LinkIcon } from 'lucide-react';

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
  const [currentPage, setCurrentPage] = useState<'main' | 'about' | 'science' | 'blockchain' | 'community'>('main');

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

  const navigateToPage = (page: 'main' | 'about' | 'science' | 'blockchain' | 'community') => {
    setCurrentPage(page);
  };

  const renderMainPage = () => (
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
          <button onClick={() => navigateToPage('about')} className="text-gray-300 hover:text-white transition-colors">About</button>
          <button onClick={() => navigateToPage('science')} className="text-gray-300 hover:text-white transition-colors">Science</button>
          <button onClick={() => navigateToPage('blockchain')} className="text-gray-300 hover:text-white transition-colors">Technology</button>
          <button onClick={() => navigateToPage('community')} className="text-gray-300 hover:text-white transition-colors">Community</button>
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
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed">
            The World's First Gratitude Coin. A new way to say thank you, reward excellence, and support 
            the creators you love with <span className="text-teal-400 font-semibold">real value</span>.
          </p>
          
          {/* New IKE Coin Sub-heading */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-6"
          >
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 via-teal-400 to-yellow-400 bg-clip-text text-transparent">
              IKE Coin - International Keeper of Excellence
            </h2>
          </motion.div>
        </motion.div>
        
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

            {/* Learn More Links */}
            <div>
              <h3 className="font-semibold mb-4">Learn More</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <button 
                    onClick={() => navigateToPage('about')} 
                    className="hover:text-white transition-colors text-left"
                  >
                    About IKE Coin
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigateToPage('science')} 
                    className="hover:text-white transition-colors text-left"
                  >
                    The Science of Gratitude
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigateToPage('blockchain')} 
                    className="hover:text-white transition-colors text-left"
                  >
                    Blockchain Technology
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigateToPage('community')} 
                    className="hover:text-white transition-colors text-left"
                  >
                    Community Guidelines
                  </button>
                </li>
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
                  href="#"
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
            <div className="flex items-center space-x-4 text-sm">
              {/* Built with Bolt.new Badge */}
              <motion.a
                href="https://bolt.new"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">⚡</span>
                <span>Built with Bolt.new</span>
              </motion.a>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );

  const renderAboutPage = () => (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center p-6 max-w-7xl mx-auto"
      >
        <motion.button
          onClick={() => navigateToPage('main')}
          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mr-6"
          whileHover={{ x: -5 }}
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back</span>
        </motion.button>
        <div className="flex items-center space-x-3">
          <Coins className="h-8 w-8 text-yellow-400" />
          <h1 className="text-2xl font-bold">About IKE Coin</h1>
        </div>
      </motion.header>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto px-6 py-12"
      >
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-700">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-teal-400">Our Mission</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                To build a public record of human excellence by empowering anyone to give and receive gratitude seamlessly. 
                IKE Coin represents more than just a digital currency—it's a movement to recognize and reward the good in our world.
              </p>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <h2 className="text-3xl font-bold mb-4 text-yellow-400">Tokenomics</h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-300">
                  <strong>Asset ID:</strong> <a href="https://allo.info/asset/309546018/token" target="_blank" className="text-teal-400 hover:underline">309546018</a>
                </p>
                <p className="text-lg text-gray-300">
                  <strong>Blockchain:</strong> Algorand Standard Asset (ASA)
                </p>
                <p className="text-lg text-gray-300">
                  <strong>Total Supply:</strong> 1,000,000 IKE
                </p>
                <p className="text-lg text-gray-300">
                  <strong>Distribution:</strong> Community-driven through gratitude actions
                </p>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <h2 className="text-3xl font-bold mb-4 text-green-400">Why Algorand?</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                We chose Algorand for its speed, low transaction fees, scalability, and commitment to a carbon-negative footprint, 
                making it the ideal foundation for a global gratitude economy. Every transaction is fast, affordable, and environmentally responsible.
              </p>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <h2 className="text-3xl font-bold mb-4 text-purple-400">The Vision</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Imagine a world where every act of kindness, every moment of excellence, and every expression of gratitude 
                is permanently recorded and rewarded. IKE Coin makes this vision a reality, creating an eternal ledger of human goodness.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  const renderSciencePage = () => (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center p-6 max-w-7xl mx-auto"
      >
        <motion.button
          onClick={() => navigateToPage('main')}
          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mr-6"
          whileHover={{ x: -5 }}
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back</span>
        </motion.button>
        <div className="flex items-center space-x-3">
          <Microscope className="h-8 w-8 text-green-400" />
          <h1 className="text-2xl font-bold">The Science of Gratitude</h1>
        </div>
      </motion.header>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto px-6 py-12"
      >
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-700">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-green-400">Why Gratitude Matters</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Beyond just being a kind gesture, expressing and witnessing gratitude has proven mental and emotional benefits. 
                Scientific research shows that gratitude practices can boost neurotransmitters like dopamine and serotonin, 
                helping to reduce feelings of anxiety and depression while fostering a powerful sense of well-being and connection.
              </p>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <h2 className="text-3xl font-bold mb-4 text-blue-400">Neurological Benefits</h2>
              <ul className="space-y-4 text-lg text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span><strong>Increased Dopamine:</strong> Gratitude activates the brain's reward system, creating feelings of pleasure and motivation.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span><strong>Enhanced Serotonin:</strong> Regular gratitude practice boosts serotonin levels, improving mood and emotional regulation.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span><strong>Reduced Cortisol:</strong> Gratitude helps lower stress hormones, promoting better physical and mental health.</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <h2 className="text-3xl font-bold mb-4 text-purple-400">Social Impact</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Gratitude is contagious. When we express appreciation, it creates a ripple effect that strengthens social bonds, 
                builds trust, and encourages prosocial behavior. IKE Coin amplifies this effect by making gratitude visible, 
                permanent, and valuable.
              </p>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <h2 className="text-3xl font-bold mb-4 text-yellow-400">Research Findings</h2>
              <div className="space-y-4 text-lg text-gray-300">
                <p>
                  Studies from leading institutions like Harvard, UC Berkeley, and Stanford have consistently shown that:
                </p>
                <ul className="space-y-3 ml-6">
                  <li>• People who practice gratitude report 25% higher happiness levels</li>
                  <li>• Gratitude improves sleep quality and immune function</li>
                  <li>• Grateful individuals have stronger relationships and social connections</li>
                  <li>• Regular gratitude practice can increase life satisfaction by up to 25%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  const renderBlockchainPage = () => (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center p-6 max-w-7xl mx-auto"
      >
        <motion.button
          onClick={() => navigateToPage('main')}
          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mr-6"
          whileHover={{ x: -5 }}
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back</span>
        </motion.button>
        <div className="flex items-center space-x-3">
          <LinkIcon className="h-8 w-8 text-blue-400" />
          <h1 className="text-2xl font-bold">Blockchain Technology</h1>
        </div>
      </motion.header>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto px-6 py-12"
      >
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-700">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-blue-400">Why Blockchain?</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Blockchain technology ensures that every expression of gratitude is permanent, transparent, and immutable. 
                Your thanks become part of an eternal record that can never be lost, deleted, or manipulated.
              </p>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <h2 className="text-3xl font-bold mb-4 text-teal-400">Algorand Advantages</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-700/50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3 text-green-400">Speed</h3>
                  <p className="text-gray-300">Transactions finalize in under 5 seconds, making gratitude instant.</p>
                </div>
                <div className="bg-gray-700/50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3 text-yellow-400">Low Fees</h3>
                  <p className="text-gray-300">Transaction costs are minimal, typically under $0.01.</p>
                </div>
                <div className="bg-gray-700/50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3 text-purple-400">Scalable</h3>
                  <p className="text-gray-300">Handles thousands of transactions per second globally.</p>
                </div>
                <div className="bg-gray-700/50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3 text-blue-400">Carbon Negative</h3>
                  <p className="text-gray-300">Environmentally responsible blockchain with negative carbon footprint.</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <h2 className="text-3xl font-bold mb-4 text-green-400">Security & Trust</h2>
              <ul className="space-y-4 text-lg text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span><strong>Immutable Records:</strong> Once recorded, gratitude messages cannot be altered or deleted.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span><strong>Transparent:</strong> All public transactions are visible on the blockchain explorer.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span><strong>Decentralized:</strong> No single entity controls the network or your data.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span><strong>Private Options:</strong> Choose to keep personal messages encrypted while maintaining transaction transparency.</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <h2 className="text-3xl font-bold mb-4 text-purple-400">The Future of Gratitude</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                By leveraging blockchain technology, we're creating the world's first permanent, searchable, and valuable record 
                of human appreciation. Future generations will be able to explore this digital monument to kindness and excellence, 
                inspiring continued acts of gratitude across time.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  const renderCommunityPage = () => (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center p-6 max-w-7xl mx-auto"
      >
        <motion.button
          onClick={() => navigateToPage('main')}
          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mr-6"
          whileHover={{ x: -5 }}
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back</span>
        </motion.button>
        <div className="flex items-center space-x-3">
          <Users className="h-8 w-8 text-purple-400" />
          <h1 className="text-2xl font-bold">Community Guidelines</h1>
        </div>
      </motion.header>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto px-6 py-12"
      >
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-700">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-purple-400">Our Values</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                The Gratitude Web is built on principles of kindness, respect, and genuine appreciation. 
                We're creating a positive space where excellence is recognized and gratitude flows freely.
              </p>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <h2 className="text-3xl font-bold mb-4 text-green-400">Community Standards</h2>
              <div className="space-y-6">
                <div className="bg-gray-700/50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3 text-green-400">✓ Authentic Gratitude</h3>
                  <p className="text-gray-300">Express genuine appreciation. Meaningful messages create lasting impact.</p>
                </div>
                <div className="bg-gray-700/50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3 text-blue-400">✓ Respectful Communication</h3>
                  <p className="text-gray-300">Treat all community members with kindness and respect, regardless of background.</p>
                </div>
                <div className="bg-gray-700/50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-3 text-yellow-400">✓ Constructive Engagement</h3>
                  <p className="text-gray-300">Focus on positive contributions that build up the community and celebrate excellence.</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <h2 className="text-3xl font-bold mb-4 text-red-400">What We Don't Allow</h2>
              <ul className="space-y-4 text-lg text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span><strong>Spam or Abuse:</strong> Automated or repetitive messages that don't express genuine gratitude.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span><strong>Harassment:</strong> Any form of bullying, threats, or inappropriate behavior.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span><strong>Fraudulent Activity:</strong> Fake accounts, manipulation, or attempts to game the system.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span><strong>Inappropriate Content:</strong> Offensive, illegal, or harmful material of any kind.</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <h2 className="text-3xl font-bold mb-4 text-teal-400">Privacy & Safety</h2>
              <div className="space-y-4 text-lg text-gray-300">
                <p>
                  <strong>Your Privacy Matters:</strong> You control the visibility of your gratitude messages. 
                  Choose between public recognition and private appreciation.
                </p>
                <p>
                  <strong>Safe Environment:</strong> We actively monitor for abuse and have systems in place 
                  to protect community members from harassment or spam.
                </p>
                <p>
                  <strong>Data Security:</strong> Your personal information is protected, and blockchain 
                  transactions are secured by cryptographic protocols.
                </p>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <h2 className="text-3xl font-bold mb-4 text-yellow-400">Reporting & Support</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                If you encounter any issues or violations of these guidelines, please report them to our 
                community team. We're committed to maintaining a positive environment where gratitude can flourish.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <motion.button
                  className="bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-lg font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Report an Issue
                </motion.button>
                <motion.button
                  className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Support
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );

  // Render the appropriate page based on current state
  switch (currentPage) {
    case 'about':
      return renderAboutPage();
    case 'science':
      return renderSciencePage();
    case 'blockchain':
      return renderBlockchainPage();
    case 'community':
      return renderCommunityPage();
    default:
      return renderMainPage();
  }
};

export default LandingPage;